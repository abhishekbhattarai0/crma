import { baseApi } from "@/services/baseApi"
import type { FetchBaseQueryMeta } from "@reduxjs/toolkit/query"
import { setUser } from './slice'

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
        user: BackendUser,
        role: {
            id: string,
            role: string,
            permission: string[]
        }
    }
}

type GetUserApiResponse = {
    statuscode: number,
    data: {
        data: {
            accessToken?: string
            refreshToken?: string,
            user: BackendUser,
            role: {
                id: string,
                role: string,
                permission: string[]
            }
        }

    }
}

type NormalizedLoginResponse = {
    accessToken?: string | null
    refreshToken?: string
    user: {
        id: string
        username: string
        role: string
    },
    role_permission: {
        id: string,
        role: string,
        permission: string[]
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
                const role = response.data.role

                console.log(meta?.response?.headers)
                const accessToken = response.data.accessToken
                // meta?.response?.headers
                //     ?.get("Authorization")
                //     ?.replace(/bearer\s+/i, "") ?? null
                console.log('userrrrrrrrrr', user, 'Role ', role)
                return {
                    accessToken,
                    refreshToken: user.refresh_token,
                    user: {
                        id: user.id,
                        username: user.username,
                        role: user.role_id,
                    },
                    role_permission: {
                        id: role.id,
                        role: role.role,
                        permission: role.permission,
                    }
                }
            },
        }),
        // ✅ Get current user
        getCurrentUser: builder.query<NormalizedLoginResponse, void>({
            query: () => ({
                url: "/auth/me",   // endpoint returning the logged-in user
                method: "GET",
                // credentials already handled in baseApi
            }),
            providesTags: ['getCurrentUser'],
            transformResponse: (
                response: GetUserApiResponse,
                // meta: FetchBaseQueryMeta | undefined
            ): NormalizedLoginResponse => {
                const user = response.data?.data.user;
                const rolePermission = response.data?.data.role
                if (!user) {
                    throw Error("User not found")
                }
                console.log("first", response.data?.data.user)


                return {
                    user: {
                        id: user.id,
                        username: user.username,
                        role: user.role_id,
                    },
                    role_permission: rolePermission,


                }
            },
            // ✅ store user in another slice
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled; // this is already transformed
                    const user = {
                        user: data.user,
                        rolePermission: data.role_permission

                    }

                    dispatch(setUser(user)); // store in your own slice
                } catch (err) {
                    console.error("Failed to fetch current user:", err);
                }
            },
        }),


        // logout user


        logout: builder.mutation<void, void>({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
            invalidatesTags: ['getCurrentUser'],
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                await queryFulfilled
                dispatch(baseApi.util.resetApiState())
            },
        }),

    }),
})


export const { useLoginMutation, useGetCurrentUserQuery, useLogoutMutation } = authApi
