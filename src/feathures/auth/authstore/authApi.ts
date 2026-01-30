import { baseApi } from "@/services/baseApi"
import { setUser } from './authSlice'
import type { RolePermission, User } from "../types/user"

type LoginRequest = {
    username: string
    password: string
}

type LoginApiResponse = {
    statuscode: number,
    data: {
        user: User,
        role?: {
            id: string,
            role: string,
            permission: string[]
        }
    }
}

type GetUserApiResponse = {
    statuscode: number,
    data: {
        // accessToken?: string
        // sessionId?: string,
        user: User,
        role: RolePermission | null
    }

}

type NormalizeUserResponse = {
    user: User,
    role_permission: RolePermission | null
}

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<NormalizeUserResponse, LoginRequest>({
            query: (body) => ({
                url: "/auth/login",
                method: "POST",
                body,
            }),

            // ✅ Normalize response here
            transformResponse: (
                response: LoginApiResponse,
            ): NormalizeUserResponse => {

                const user = response.data?.user
                const role = response.data?.role


                return {
                    user: {
                        id: user.id,
                        username: user.username,
                        roleId: user.roleId,
                        isSuperUser: user.isSuperUser,
                        isVerified: user.isVerified,
                        email: user.email
                    },
                    role_permission: role ? {
                        id: role.id,
                        role: role?.role,
                        permission: role?.permission,
                    } : null
                }
            },
        }),
        //  Get current user
        getCurrentUser: builder.query<NormalizeUserResponse, void>({
            query: () => ({
                url: "/auth/me",
                method: "GET",


                // credentials already handled in baseApi
            }),
            keepUnusedDataFor: 0,
            providesTags: ['getCurrentUser'],
            transformResponse: (
                response: GetUserApiResponse,
                // meta: FetchBaseQueryMeta | undefined
            ): NormalizeUserResponse => {
                const user = response.data?.user;
                const rolePermission = response.data?.role

                if (!user) {
                    throw Error("User not found")
                }
                console.log("first", response.data?.user)


                return {
                    user: {
                        id: user.id,
                        username: user.username,
                        roleId: user.roleId,
                        isSuperUser: user.isSuperUser,
                        isVerified: user.isVerified,
                        email: user.email
                    },
                    role_permission: rolePermission ? rolePermission : null,


                }
            },
            //  store user in another slice
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled; // this is already transformed

                    dispatch(setUser({
                        user: {
                            ...data.user,
                            role: data.role_permission?.role ?? "",
                        },
                        rolePermission: data.role_permission ?? null,
                    }));
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
