import type { ColumnDef } from "@tanstack/react-table";
import type { LoginHistoryProps } from "@/dummydata/loginHistory";
import LoginActionRow from "./row/login-history-row";
import ActiveSessionRow from "./row/active-session-row";


export const sessionWithDistinctUserColumn: ColumnDef<LoginHistoryProps>[] = [
    {
        accessorKey: "username",
        header: "Username",
    },
   {
    id:"loginHistory",
    header:"Login History",
    cell: ({row})=><LoginActionRow row={row}/>,
    meta:{
        label:"Login History"
    }    
   },
   {
    id:"activeSession",
    header:"Active Session",
    cell: ({row})=><ActiveSessionRow row={row}/>,
    meta:{
        label:"Active Session"
    }    
   }
]