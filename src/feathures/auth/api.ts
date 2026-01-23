import { baseApi } from "@/services/baseApi"
import type { FetchBaseQueryMeta } from "@reduxjs/toolkit/query"

type LoginRequest = {
    username: string
    password: string
}

type BackendUser = {
    id: string
    username: string
    refresh_token: string,
    accessToken: string,
    role_id: string
}

type LoginApiResponse = {
    statuscode: number,
    data: {
        accessToken: string
        refreshToken: string,
        user: BackendUser
    }
}

type NormalizedLoginResponse = {
    accessToken: string | null
    refreshToken: string
    user: {
        id: string
        username: string
        role: string
    }
}

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<NormalizedLoginResponse, LoginRequest>({
            query: (body) => ({
                url: "/auth/login",
                method: "POST",
                body,
            }),

            // ✅ Normalize response here
            transformResponse: (
                response: LoginApiResponse,
                meta: FetchBaseQueryMeta | undefined
            ): NormalizedLoginResponse => {
                const user = response.data.user

                console.log(meta?.response?.headers)
                const accessToken = response.data.accessToken
                // meta?.response?.headers
                //     ?.get("Authorization")
                //     ?.replace(/bearer\s+/i, "") ?? null

                return {
                    accessToken,
                    refreshToken: user.refresh_token,
                    user: {
                        id: user.id,
                        username: user.username,
                        role: user.role_id,
                    },
                }
            },
        }),
    }),
})

export const { useLoginMutation } = authApi
