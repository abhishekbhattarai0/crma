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
  }),
});

export const {
  useAddUserMutation,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserByIdMutation,
} = userApi;
