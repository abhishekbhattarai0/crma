import { DataTable } from "@/components/table/data-table2"
import { loginHistoryColumn } from "../../components/table/column/login-history-column"
import { useGetLoginHistoryByIdQuery } from "../../userStore/userApi"
// import { Loader2 } from "lucide-react"
// import { useLocation } from "react-router-dom"
// import HeaderWithRefetch from "@/components/header/header-with-refetch"

const LoginHistoryByUser = () => {
    // const { state } = useLocation()
    console.log('statttee')
    // const { data: loginHistory, isLoading, refetch, isFetching } = useGetLoginHistoryByIdQuery({
    //     userId: state.userId,
    //     limit: 2,
    //     cursor: '',
    //     ip: '',
    //     search: ''
    // })

    // if (isLoading) {
    //     return <Loader2 className="animate-spin mx-auto" />
    // }
    return (
        <div className="p-4">
            {/* <HeaderWithRefetch refetch={refetch} isFetching={isFetching} /> */}
            <div className="mt-4">
                <DataTable columns={loginHistoryColumn} useQuery={useGetLoginHistoryByIdQuery} searchFields={[
                    { label: "Username", value: "username" },
                ]} />
            </div>
        </div>
    )
}

export default LoginHistoryByUser