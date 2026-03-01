import { Mutex } from 'async-mutex';
import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
// import type { RootState } from "@/store"
import { logout } from '@/feathures/auth/authstore/authSlice';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: 'include',
  // prepareHeaders: (headers, { getState }) => {
  //   const token = (getState() as RootState).auth?.accessToken
  //   if (token) {
  //     headers.set("Authorization", `Bearer ${token}`)
  //   }
  //   return headers
  // },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const refreshResult = await baseQuery(
          {
            url: '/auth/refresh-access-token',
            method: 'POST',
          },
          api,
          extraOptions,
        );

        if (refreshResult.data) {
          // retry original request
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logout());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: [
    'login',
    'logout',
    'getCurrentUser',
    'all-users',
    'all-access-control',
    'all-login-history',
    'all-active-sessions',

    //organization
    'organization',
    'organization-branch'
  ],
});
