import type { accessControlProps } from '@/dummydata/accessControlData';
import type { userDataProps } from '@/dummydata/user';
import { baseApi } from '@/services/baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (data) => ({
        url: '/user/create',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['all-users'],
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: '/user/',
        method: 'GET',
      }),
      providesTags: ['all-users'],
    }),
    //  getAllUsers: builder.query({
    //       query: (params) => ({
    //         url: '/user/',
    //         params:{
    //           page: params.page,
    //           limit: params.limit,
    //           order: params.order,
    //         },
    //         method: 'GET',
    //       }),
    //       providesTags: ['all-users'],
    //     }),

    getUserById: builder.query({
      query: (userId: string) => ({
        url: `/user/${userId}`,
        method: 'GET',
      }),
      transformResponse: (response: { data: userDataProps }) => response.data,
      providesTags: ['all-users'],
    }),

    updateUserById: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/user/${userId}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['all-users'],
    }),

    // access control

    getRoleByUserId: builder.query({
      query: (userId: string) => ({
        url: `/auth/${userId}/role`,
        method: 'GET',
      }),
      transformResponse: (response: {
        data: { role: string; permission: string[] };
      }) => response.data,
    }),

    createRoleWithPermission: builder.mutation({
      query: (data: {
        role: string;
        permission: string[];
        description?: string;
      }) => ({
        url: '/auth/create-role-permission',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['all-access-control'],
    }),

    deleteRoleByRoleName: builder.mutation({
      query: (role: string) => ({
        url: `auth/delete-role-permission/${role}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['all-access-control'],
    }),

    getAllAccessControl: builder.query({
      query: () => ({
        url: 'auth/roles',
        method: 'GET',
      }),
      providesTags: ['all-access-control'],
    }),

    getAccessControlByRoleName: builder.query({
      query: (role: string) => ({
        url: `auth/roles/${role}`,
        method: 'GET',
      }),
      providesTags: ['all-access-control'],
      transformResponse: (response: { data: accessControlProps }) =>
        response.data,
    }),

    updateAccessControlByRoleName: builder.mutation({
      query: ({ role, data }) => ({
        url: `/auth/update-role-permission/${role}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['all-access-control'],
    }),

    assignRole: builder.mutation({
      query: (data: { role: string; username: string }) => {
        return {
          url: 'auth/users/assign-role',
          method: 'PATCH',
          body: { role: data.role, username: data.username },
        };
      },
    }),

    // login history

    getLoginHistory: builder.query({
      query: () => ({
        url: 'auth/login-history',
        method: 'GET',
      }),
      providesTags: ['all-login-history'],
    }),

    getLoginHistoyDistinctUser: builder.query({
      query: () => ({
        url: 'auth/sessions/distinct-users',
        method: 'GET',
      }),
      providesTags: ['all-login-history'],
    }),

    // getLoginHistoryById: builder.query({
    //   query: (
    //    value:{
    //     userId: string,
    //     limit: number,
    //     cursor: string,
    //     ip: string,
    //     search: string,
    //    }  
    //   ) => ({
    //     url: `auth/login-history/${value.userId}/?limit=${value.limit ?? null}&cursor=${value.cursor ?? null}&ip=${value.ip ?? null}&search=${value.search ?? null}`,
    //     method: 'GET',
    //   }),
    //   providesTags: ['all-login-history'],
    //   transformResponse: (response) =>
    //     response.data,
    // }),

    getLoginHistoryById: builder.query({
      query: (params) => ({
        url: `auth/login-history/${params.userId}`,
        params: {
          page: params.page,
          limit: params.limit,
          ip: params.ip,
          order: params.order,
          searchTerm: params.searchTerm,
          searchField: params.searchField,
        },
        method: 'GET',
      }),
      providesTags: ['all-login-history'],
      transformResponse: (response) => ({
        data: response.data.data,
        meta: {
          totalCount: Number(response.data.meta.total),
          pageIndex: Number(response.data.meta.page),
          limit: Number(response.data.meta.limit),
          pageSize: Number(response.data.meta.limit),
        },
      }),
    }),


    getActiveSessions: builder.query({
      query: () => ({
        url: 'auth/sessions',
        method: 'GET',
      }),
      providesTags: ['all-active-sessions'],
    }),

    getActiveSessionsByAuthId: builder.query({
      query: (authId: string) => ({
        url: `auth/sessions/${authId}`,
        method: 'GET',
      }),
      providesTags: ['all-active-sessions'],
    }),

    revokeLoginSession: builder.mutation({
      query: (sessionId: string) => ({
        url: `auth/sessions/${sessionId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['all-active-sessions'],
    }),
  }),
});

export const {
  useAddUserMutation,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserByIdMutation,
  useGetAllAccessControlQuery,
  useGetAccessControlByRoleNameQuery,
  useCreateRoleWithPermissionMutation,
  useUpdateAccessControlByRoleNameMutation,
  useGetRoleByUserIdQuery,
  useAssignRoleMutation,
  useGetLoginHistoryQuery,
  useGetLoginHistoyDistinctUserQuery,
  useGetLoginHistoryByIdQuery,
  useRevokeLoginSessionMutation,
  useGetActiveSessionsQuery,
  useGetActiveSessionsByAuthIdQuery,
  useDeleteRoleByRoleNameMutation,
} = userApi;
