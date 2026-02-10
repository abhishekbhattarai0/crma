import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { permissionCategories } from "@/dummydata/accessControlData"
import { accessControlSchema, type accessControlFormValues } from "../../types/accessControlTypes"
import { useCreateRoleWithPermissionMutation } from "../../userStore/userApi"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import useModal from "@/hooks/useModal"





const CreateAccessControlForm = () => {

    const { setClose } = useModal()
    const [createRoleWithPermission, { isLoading, error }] = useCreateRoleWithPermissionMutation()
    const { register, handleSubmit, control, formState: { errors } } = useForm<accessControlFormValues>({
        resolver: zodResolver(accessControlSchema),
    })
    const onSubmit = async (data: accessControlFormValues) => {
        try {
            console.log(data,)
            await createRoleWithPermission(data).unwrap()
            toast.success("Role created successfully", {
                position: "top-right",
            })
            setClose()
        } catch (error) {
            console.log(error)
            toast.error("Failed to create role", {
                position: "top-right",
            })
        }
    }
    return (
        <Card className="border-0 p-0">
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="w-full">
                        <label className="text-sm text-foreground/75">Role Name</label>
                        <Input {...register("role")} />
                        {errors.role && (
                            <span className="text-xs text-red-600">
                                {errors.role.message}
                            </span>
                        )}
                    </div>
                    <div className="w-full">
                        <label className="text-sm text-foreground/75">Description</label>
                        <Input {...register("description")} />
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

                    <Button className="w-full" type="submit">
                        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Create'}
                    </Button>
                    {error && 'data' in error &&
                        // @ts-expect-error/not handled error types
                        <span className="text-xs text-red-600">{error.data?.message}</span>
                    }
                </form>
            </CardContent>

        </Card>
    )
}

export default CreateAccessControlForm