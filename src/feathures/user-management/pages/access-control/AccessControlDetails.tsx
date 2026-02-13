import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Detail from "@/feathures/frontdesk/components/detail-card"
import { Info, } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useGetAccessControlByRoleNameQuery } from "../../userStore/userApi";
import RolePermissionView from "../../components/role-permission-view";


export default function AccessControlDetails() {

    const location = useLocation()
    const { data, isLoading } = useGetAccessControlByRoleNameQuery(location.state.role)
    console.log("access control data", data)

    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div className="w-full  mx-auto grid lg:grid-cols-2 gap-4 pb-6">

            <div className="grid  gap-4">

                {/* Summary Information */}
                <Card className="px-0 py-1">
                    <CardHeader className="border-b flex  items-center px-4 ">
                        <div className="text-xs text-foreground/75">
                            <Info size={14} />
                        </div>
                        <CardTitle className="text-foreground/75 font-semibold text-md">
                            Role Information
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs px-4  py-2">
                        <Detail label="Role Name" value={data?.role} />
                        {data?.description && <Detail label="Description" value={data?.description} />}
                        {data?.totalUsers && <Detail label="Total Users" value={String(data?.totalUsers)} />}
                    </CardContent>
                </Card>
            </div>

            <Card className="px-0 py-1">
                <CardHeader className="border-b flex  items-center px-4 ">
                    <div className="text-xs text-foreground/75">
                        <Info size={14} />
                    </div>
                    <CardTitle className="text-foreground/75 font-semibold text-md">
                        Role Information
                    </CardTitle>
                </CardHeader>
                <CardContent className="  rounded-md">
                    <RolePermissionView permissions={data?.permission} />
                </CardContent>
            </Card>



        </div>
    )
}
