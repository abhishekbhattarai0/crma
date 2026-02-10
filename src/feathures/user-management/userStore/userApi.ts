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

    getUserById: builder.query({
      query: (userId: string) => ({
        url: `/user/${userId}`,
        method: 'GET',
      }),
      transformResponse: (response: { data: userDataProps }) => response.data,
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
        console.log('datajdflkjfdkjf', data);
        return {
          url: 'auth/users/assign-role',
          method: 'PATCH',
          body: { role: data.role, username: data.username },
        };
      },
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
} = userApi;
