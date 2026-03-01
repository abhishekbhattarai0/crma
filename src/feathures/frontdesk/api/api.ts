import { baseApi } from "@/services/baseApi";


export const frontDeskApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getOrganization: builder.query({
            query: (params) => ({
                url: '/org',
                method: 'GET',
                params: {
                    page: params.page,
                    limit: params.limit,
                    order: params.order,
                    searchTerm: params.searchTerm,
                    searchField: params.searchField,
                },
            }),
            transformResponse: (response) => ({
                data: response.data.data,
                meta: {
                    totalCount: Number(response.data.meta.total),
                    pageIndex: Number(response.data.meta.page),
                    limit: Number(response.data.meta.limit),
                    pageSize: Number(response.data.meta.limit),
                },
            }),
            providesTags: ['organization'],
        }),

        createOrganization: builder.mutation({
            query: (data) => ({
                url: '/org',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['organization'],
        }),

        getOrganizationById: builder.query({
            query: (organizationId: string) => ({
                url: `/org/${organizationId}`,
                method: 'GET',
            }),
        }),
    })
})

export const { useGetOrganizationQuery, useCreateOrganizationMutation, useGetOrganizationByIdQuery } = frontDeskApi;