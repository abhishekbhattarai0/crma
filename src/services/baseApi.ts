import {
  fetchBaseQuery,
  createApi,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react"
import type { RootState } from "@/store"
import { logout, setCredentials } from "@/feathures/auth/slice"


const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken
    if (token) {
      headers.set("Authorization", `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {



  let result = await baseQuery(args, api, extraOptions)


  if (result.error && result.error.status === 401) {

    const refreshResult = await baseQuery(
      {
        url: "/auth/refresh-access-token",
        method: "POST",
      },
      api,
      extraOptions
    )

    const data = refreshResult?.data as { accessToken: string; refreshToken: string }

    if (data) {
      // const newAccessToken = (refreshResult.data as any).accessToken

      api.dispatch(
        setCredentials({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          user: (api.getState() as RootState).auth.user!,
        })
      )

      //  retry original request
      result = await baseQuery(args, api, extraOptions)
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

