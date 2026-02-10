import { Checkbox } from '@/components/ui/checkbox'
import { permissionCategories } from '@/dummydata/accessControlData'

const RolePermissionView = ({ permissions }: { permissions: string[] | undefined }) => {
    return (
        <div className="space-y-4">
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
                                    checked={permissions?.includes(permission.key)}
                                />

                                <label htmlFor={permission.key} className="text-sm text-foreground/75">
                                    {permission.label}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RolePermissionView