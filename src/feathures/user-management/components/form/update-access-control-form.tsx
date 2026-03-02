import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { permissionCategories } from "@/dummydata/accessControlData"
import { accessControlSchema } from "../../types/accessControlTypes"
import { useGetAccessControlByRoleNameQuery, useUpdateAccessControlByRoleNameMutation } from "../../userStore/userApi"
import { useEffect } from "react"
import { toast } from "sonner"
import useModal from "@/hooks/useModal"
import { Loader2 } from "lucide-react"






type accessControlFormValues = z.infer<typeof accessControlSchema>
const UpdateAccessControlForm = ({ role }: { role: string }) => {

    const { setClose } = useModal()
    const { data, isLoading } = useGetAccessControlByRoleNameQuery(role)
    const [updateAccessControl, { isLoading: isUpdating }] = useUpdateAccessControlByRoleNameMutation()
    console.log('update access control form', data)

    const { handleSubmit, control, reset, formState: { errors } } = useForm<accessControlFormValues>({
        resolver: zodResolver(accessControlSchema),
        defaultValues: {
            role: data?.role,
            description: data?.description,
            permission: data?.permission,
        },
    })
    const onSubmit = (data: accessControlFormValues) => {
        console.log('update submitted')
        try {
            updateAccessControl({ role, data }).unwrap()
            toast.success("Access control updated successfully")
            setClose()
        } catch (error) {
            toast.error("Failed to update access control");
            console.log(error)
        }
    }

    useEffect(() => {
        if (data) {
            reset(data);
        }
    }, [data, reset]);

    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <Card className="border-0 p-0">
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="w-full">
                        <label className="text-sm text-foreground/75">Role Name</label>
                        <Controller
                            name="role"
                            control={control}
                            render={({ field }) => (
                                <Input value={field.value} onChange={field.onChange} />
                            )}
                        />
                        {errors.role && (
                            <span className="text-xs text-red-600">
                                {errors.role.message}
                            </span>
                        )}
                    </div>
                    <div className="w-full">
                        <label className="text-sm text-foreground/75">Description</label>
                        <Controller
                            name="description"
                            control={control}
                            render={({ field }) => (
                                <Input value={field.value} onChange={field.onChange} />
                            )}
                        />
                        {errors.description && (
                            <span className="text-xs text-red-600">
                                {errors.description.message}
                            </span>
                        )}
                    </div>



                    <div>
                        <label className="text-sm text-foreground/75">
                            Permission
                        </label>

                        <Controller
                            control={control}
                            name="permission"
                            render={({ field }) => {
                                const togglePermission = (key: string) => {
                                    const current = field.value || [];

                                    if (current.includes(key)) {
                                        field.onChange(current.filter(p => p !== key));
                                    } else {
                                        field.onChange([...current, key]);
                                    }
                                };

                                return (
                                    <div className="space-y-4 mt-2 border p-2 rounded-md">
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
                                                                checked={field.value?.includes(permission.key)}
                                                                onCheckedChange={() =>
                                                                    togglePermission(permission.key)
                                                                }
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
                                );
                            }}
                        />

                        {errors.permission && (
                            <span className="text-xs text-red-600">
                                {errors.permission.message}
                            </span>
                        )}
                    </div>

                    {/* {error && 'data' in error &&
                            // @ts-expect-error/not handled error types
                            <span className="text-xs text-red-600">{error.data?.message}</span>
                        } */}
                    <Button className="w-full" type="submit">
                        {isUpdating ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            "Update"
                        )}
                    </Button>
                </form>
            </CardContent>

        </Card>
    )
}

export default UpdateAccessControlForm 