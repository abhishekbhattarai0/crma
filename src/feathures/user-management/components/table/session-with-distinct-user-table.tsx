// import { DataTable } from '@/components/table/data-table'
import { sessionWithDistinctUserColumn } from './session-with-distinct-user-column'
import { useGetLoginHistoyDistinctUserQuery } from '@/feathures/user-management/userStore/userApi'
import HeaderWithRefetch from '@/components/header/header-with-refetch'
import { DataTable } from '@/components/table/data-table2'

const SessionWithDistinctUserTable = () => {
    const { refetch, isFetching } = useGetLoginHistoyDistinctUserQuery({})
    return (
        <div>
            <HeaderWithRefetch refetch={refetch} isFetching={isFetching} />
            <div className="mt-4">
                {/* <DataTable columns={sessionWithDistinctUserColumn} data={data?.data || []} /> */}
                <DataTable columns={sessionWithDistinctUserColumn} useQuery={useGetLoginHistoyDistinctUserQuery} searchKey='username' searchFields={[{ label: 'Username', value: 'username' }]} />
            </div>
        </div>
    )
}

export default SessionWithDistinctUserTable