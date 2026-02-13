import { DataTable } from "@/components/table/data-table"
import { useGetActiveSessionsByAuthIdQuery } from "../../userStore/userApi"
import { Loader2 } from "lucide-react"
import { useLocation } from "react-router-dom"
import { activeSessionColumn } from "../../components/table/column/active-session-column"
import HeaderWithRefetch from "@/components/header/header-with-refetch"

const ActiveSessionById = () => {
    const { state } = useLocation()
    const { data: activeSession, isLoading, refetch, isFetching } = useGetActiveSessionsByAuthIdQuery(state.authId)

    if (isLoading) {
        return <Loader2 className="animate-spin mx-auto" />
    }
    return (
        <div>
           <HeaderWithRefetch refetch={refetch} isFetching={isFetching} />
            <div className="mt-4">
                <DataTable data={activeSession?.data || []} columns={activeSessionColumn} />
            </div>
        </div>
    )
}

export default ActiveSessionById 