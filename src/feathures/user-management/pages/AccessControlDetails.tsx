import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { permissionCategories } from "@/dummydata/accessControlData"
import Detail from "@/feathures/frontdesk/components/detail-card"
import { Info, } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useGetAccessControlByRoleNameQuery } from "../userStore/userApi";


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
                <CardContent className="space-y-4  rounded-md">
                    {permissionCategories.map(category => (
                        <div key={category.category} >
                            <h4 className="text-foreground/75 text-xs mb-2 ">
                                {category.category}
                            </h4>

                            <div className="grid grid-cols-2 gap-2">
                                {category.permissions.map(permission => (
                                    <div
                                        key={permission.key}
                                        className="flex items-center space-x-2"
                                    >
                                        <Checkbox
                                            id={permission.key}
                                            checked={data?.permission.includes(permission.key)}
                                        />

                                        <label htmlFor={permission.key} className="text-sm text-foreground/75">
                                            {permission.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>



        </div>
    )
}
