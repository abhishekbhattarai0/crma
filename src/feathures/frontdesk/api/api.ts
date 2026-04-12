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

        updateOrganization: builder.mutation({
            query: ({ organizationId, data }) => ({
                url: `/org/${organizationId}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['organization'],
        }),

        // organization branch
        getOrganizationBranchsByOrgId: builder.query({
            query: (params: {
                organizationId: string,
                page: number,
                limit: number,
                order: string,
                searchTerm: string,
                searchField: string}) => ({
                url: `/org/${params.organizationId}/branches`,
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
            providesTags: ['organization-branch'],
        }),

        createBranch: builder.mutation({
            query: ({organizationId, data}) => ({
                url: `/org/${organizationId}/branch`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['organization-branch'],
        }),

        getBranchById: builder.query({
            query: ({organizationId, branchId}: {organizationId: string, branchId: string}) => ({
                url: `/org/${organizationId}/branch/${branchId}`,
                method: 'GET',
            }),
        }),

        updateBranch: builder.mutation({
            query: ({organizationId, branchId, data}) => ({
                url: `/org/${organizationId}/branch/${branchId}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['organization-branch'],
        }),
    })
})

export const { 
    useGetOrganizationQuery, 
    useCreateOrganizationMutation, 
    useGetOrganizationByIdQuery, 
    useGetOrganizationBranchsByOrgIdQuery, 
    useUpdateOrganizationMutation, 
    useCreateBranchMutation, 
    useGetBranchByIdQuery, 
    useUpdateBranchMutation 
} = frontDeskApi;