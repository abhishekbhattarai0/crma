import { DataTable } from "@/components/table/data-table"
import { loginHistoryColumn } from "./column/login-history-column"
import { useGetLoginHistoryQuery, useGetActiveSessionsQuery } from "../../userStore/userApi"
import { Loader, RefreshCw } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { activeSessionColumn } from "./column/active-session-column"


const LoginHistoryTable = () => {
    const { data: loginHistory, refetch: refetchLoginHistory, isLoading: isLoginHistoryLoading } = useGetLoginHistoryQuery({})
    const [tab, setTab] = useState('loginHistory')
    const { data: activeSessions, refetch: refetchActiveSessions, isLoading: isSessionLoading } = useGetActiveSessionsQuery({})


    const handleLoginHistory = () => {
        setTab('loginHistory')
        refetchLoginHistory()
    }
    const handleActiveSession = () => {
        setTab('session')
        refetchActiveSessions()
    }

    const handleRefresh = () => {
        if (tab === 'loginHistory') {
            refetchLoginHistory()
        } else {
            refetchActiveSessions()
        }
    }

    if (isLoginHistoryLoading || isSessionLoading) {
        return <Loader className="animate-spin mx-auto" />
    }

    return (
        <div className=" flex flex-col gap-2">
            <div className="flex gap-2 ">
                <Button
                    variant={tab === 'loginHistory' ? "default" : "outline"}
                    onClick={handleLoginHistory}
                > Login History </Button>
                <Button
                    variant={tab === 'session' ? "default" : "outline"}
                    onClick={handleActiveSession}
                > Active Session </Button>
                <Button
                    onClick={handleRefresh}
                    variant={'outline'}
                    size={'icon'}
                >
                    <RefreshCw size={16} />
                </Button>
            </div>
            <div>
                {tab === 'loginHistory' && <DataTable columns={loginHistoryColumn} data={loginHistory?.data || []} />}
                {tab === 'session' && <DataTable columns={activeSessionColumn} data={activeSessions?.data || []} />}

            </div>
        </div >
    )
}

export default LoginHistoryTable 