import {
    fetchBaseQuery,
    createApi,
    type BaseQueryFn,
    type FetchArgs,
    type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react"
import type { RootState } from "@/store"
import { logout, setCredentials } from "@/feathures/auth/slice"

const PUBLIC_ROUTES = ['/auth/login', '/auth/register']

const rawBaseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    // baseUrl: 'http://localhost:4000/api/v1/',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.accessToken
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    },
})

const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {

    const url = typeof args === 'string' ? args : args.url;

    const isPublicRoute = PUBLIC_ROUTES.some((route) => url.includes(route))

    let result = await rawBaseQuery(args, api, extraOptions)

    if (isPublicRoute) {
        return result;
    }

    if (result.error && result.error.status === 401) {
        const refreshToken = (api.getState() as RootState).auth.refreshToken

        if (!refreshToken) {
            api.dispatch(logout())
            return result
        }

        //  attempt refresh
        const refreshResult = await rawBaseQuery(
            {
                url: "/auth/refresh",
                method: "POST",
                body: { refreshToken },
            },
            api,
            extraOptions
        )

        if (refreshResult.data) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const newAccessToken = (refreshResult.data as any).accessToken

            api.dispatch(
                setCredentials({
                    accessToken: newAccessToken,
                    refreshToken,
                    user: (api.getState() as RootState).auth.user!,
                })
            )

            //  retry original request
            result = await rawBaseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logout())
        }
    }

    return result
}

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
})

