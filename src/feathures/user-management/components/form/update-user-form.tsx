import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useModal from "@/hooks/useModal";
import { SelectComponent } from "@/components/ui/SelectComponent";
import { useEffect } from "react";
import { z } from "zod";
import { useGetAllAccessControlQuery, useGetUserByIdQuery, useUpdateUserByIdMutation } from "../../userStore/userApi";
import UserFormSkeleton from "./user-form-skelton";
import { updateUserSchema } from "../../types/userType";
import { Loader2 } from "lucide-react";

export type userFormValues = z.infer<typeof updateUserSchema>;

const labelClass = "text-sm text-foreground/75";

const UpdateUserForm = ({ userId }: { userId: string }) => {
    const { setClose } = useModal();

    const { data: userData, isLoading, error } = useGetUserByIdQuery(userId)
    const [updateUserById, { isLoading: isUpdating, error: updateError }] = useUpdateUserByIdMutation()
    const { data: allRoles } = useGetAllAccessControlQuery({});
    // const { data: roles } = useGetRoleByUserIdQuery(userId)

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm<userFormValues>({
        resolver: zodResolver(updateUserSchema),
        defaultValues: userData,
    });
    useEffect(() => {
        if (userData) {
            reset({ ...userData, isActive: userData.isActive ? "ACTIVE" : "INACTIVE" });
        }
    }, [userData, reset,]);

    const onSubmit = async (data: userFormValues) => {
       
        try {

            await updateUserById({ userId, data }).unwrap();
            // assignRole({ role: data?.role as string, username: data?.username })

            setClose();
        } catch (err) {
            console.error("Update failed:", err);
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onError = (errors: any) => {
        console.log(errors);
    }


    if (isLoading && !userData) return <UserFormSkeleton />

    return (
        <Card className="border-0">
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6">

                    {/* PERSONAL */}
                    <h3 className="font-semibold">Personal Details</h3>

                    <div className="flex gap-2">
                        <div className="w-full">
                            <label className={labelClass}>First Name</label>
                            <Controller
                                name="firstName"
                                control={control}
                                render={({ field }) => (
                                    <Input value={field.value} onChange={field.onChange} />
                                )}
                            />
                            {errors.firstName && (
                                <span className="text-xs text-red-600">
                                    {errors.firstName.message}
                                </span>
                            )}
                        </div>
                        <div className="w-full">
                            <label className={labelClass}>Last Name</label>
                            <Controller
                                name="lastName"
                                control={control}
                                render={({ field }) => (
                                    <Input value={field.value} onChange={field.onChange} />
                                )}
                            />
                            {errors.lastName && (
                                <span className="text-xs text-red-600">
                                    {errors.lastName.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="w-full">
                            <label className={labelClass}>Gender</label>
                            <Controller
                                name="gender"
                                control={control}
                                render={({ field }) => (
                                    <SelectComponent
                                        value={field.value}
                                        onValueChange={field.onChange}
                                        options={[
                                            { label: "MALE", value: "MALE" },
                                            { label: "FEMALE", value: "FEMALE" },
                                            { label: "OTHER", value: "OTHER" },
                                        ]}
                                        placeholder="Select Gender"
                                    />
                                )}
                            />
                            {errors.gender && (
                                <span className="text-xs text-red-600">
                                    {errors.gender.message}
                                </span>
                            )}
                        </div>
                        <div className="w-full">
                            <label className={labelClass}>DOB</label>
                            <Controller
                                name="dob"
                                control={control}
                                render={({ field }) => (
                                    <Input type="date" value={field.value} onChange={field.onChange} />
                                )}
                            />
                            {errors.dob && (
                                <span className="text-xs text-red-600">
                                    {errors.dob.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className={labelClass}>Marital Status</label>

                        <Controller
                            name="maritalStatus"
                            control={control}
                            render={({ field }) => (
                                <SelectComponent
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    options={[
                                        { label: "MARRIED", value: "MARRIED" },
                                        { label: "SINGLE", value: "SINGLE" },
                                    ]}
                                    placeholder="Select Marital Status"
                                />
                            )}
                        />
                        {errors.maritalStatus && (
                            <span className="text-xs text-red-600">
                                {errors.maritalStatus.message}
                            </span>
                        )}
                    </div>

                    {/* CONTACT */}
                    <h3 className="font-semibold">Contact Information</h3>
                    <div>

                        <label className={labelClass}>Official Email</label>
                        <Controller
                            name="officialEmail"
                            control={control}
                            render={({ field }) => (
                                <Input value={field.value} onChange={field.onChange} />
                            )}
                        />
                        {errors.officialEmail && (
                            <span className="text-xs text-red-600">
                                {errors.officialEmail.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <label className={labelClass}>Personal Email</label>
                        <Controller
                            name="personalEmail"
                            control={control}
                            render={({ field }) => (
                                <Input value={field.value} onChange={field.onChange} />
                            )}
                        />
                        {errors.personalEmail && (
                            <span className="text-xs text-red-600">
                                {errors.personalEmail.message}
                            </span>
                        )}
                    </div>

                    <div className="flex gap-2">
                        <div className="w-full">
                            <label className={labelClass}>Phone</label>
                            <Controller
                                name="phone"
                                control={control}
                                render={({ field }) => (
                                    <Input value={field.value} onChange={field.onChange} />
                                )}
                            />
                            {errors.phone && (
                                <span className="text-xs text-red-600">
                                    {errors.phone.message}
                                </span>
                            )}
                        </div>
                        <div className="w-full">
                            <label className={labelClass}>Emergency Contact</label>
                            <Controller
                                name="emergencyContactPhone"
                                control={control}
                                render={({ field }) => (
                                    <Input value={field.value} onChange={field.onChange} />
                                )}
                            />
                            {errors.emergencyContactPhone && (
                                <span className="text-xs text-red-600">
                                    {errors.emergencyContactPhone.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className={labelClass}>Current Address</label>
                        <Controller
                            name="currentAddress"
                            control={control}
                            render={({ field }) => (
                                <Input value={field.value} onChange={field.onChange} />
                            )}
                        />
                        {errors.currentAddress && (
                            <span className="text-xs text-red-600">
                                {errors.currentAddress.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <label className={labelClass}>Permanent Address</label>
                        <Controller
                            name="permanentAddress"
                            control={control}
                            render={({ field }) => (
                                <Input value={field.value} onChange={field.onChange} />
                            )}
                        />
                        {errors.permanentAddress && (
                            <span className="text-xs text-red-600">
                                {errors.permanentAddress.message}
                            </span>
                        )}
                    </div>

                    {/* COMPANY */}
                    <h3 className="font-semibold">Company Information</h3>

                    <div className="flex gap-2">
                        <div className="w-full">
                            <label className={labelClass}>Department</label>
                            <Controller
                                name="department"
                                control={control}
                                render={({ field }) => (
                                    <Input value={field.value} onChange={field.onChange} />
                                )}
                            />
                            {errors.department && (
                                <span className="text-xs text-red-600">
                                    {errors.department.message}
                                </span>
                            )}
                        </div>
                        <div className="w-full">
                            <label className={labelClass}>Team</label>
                            <Controller
                                name="team"
                                control={control}
                                render={({ field }) => (
                                    <Input value={field.value} onChange={field.onChange} />
                                )}
                            />
                            {errors.team && (
                                <span className="text-xs text-red-600">
                                    {errors.team.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="w-full">
                            <label className={labelClass}>Designation</label>
                            <Controller
                                name="designation"
                                control={control}
                                render={({ field }) => (
                                    <Input value={field.value} onChange={field.onChange} />
                                )}
                            />
                            {errors.designation && (
                                <span className="text-xs text-red-600">
                                    {errors.designation.message}
                                </span>
                            )}
                        </div>
                        <div className="w-full">
                            <label className={labelClass}>Job Title</label>
                            <Controller
                                name="jobTitle"
                                control={control}
                                render={({ field }) => (
                                    <Input value={field.value} onChange={field.onChange} />
                                )}
                            />
                            {errors.jobTitle && (
                                <span className="text-xs text-red-600">
                                    {errors.jobTitle.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className={labelClass}>Shift</label>
                        <Controller
                            name="shift"
                            control={control}
                            render={({ field }) => (
                                <Input value={field.value} onChange={field.onChange} />
                            )}
                        />
                        {errors.shift && (
                            <span className="text-xs text-red-600">
                                {errors.shift.message}
                            </span>
                        )}
                    </div>

                    {/* SYSTEM ACCESS */}
                    <h3 className="font-semibold">System Access</h3>

                    <div>
                        <label className={labelClass}>Username</label>
                        <Controller
                            name="username"
                            control={control}
                            render={({ field }) => (
                                <Input value={field.value} onChange={field.onChange} />
                            )}
                        />
                        {errors.username && (
                            <span className="text-xs text-red-600">
                                {errors.username.message}
                            </span>
                        )}
                        {errors.username && (
                            <span className="text-xs text-red-600">
                                {errors.username.message}
                            </span>
                        )}
                    </div>

                    {/* <div>
                        <label className={labelClass}>Password</label>
                        <Input {...register("password")} type="password" placeholder="Enter Password" />
                        {errors.password && (
                            <span className="text-xs text-red-600">
                                {errors.password.message}
                            </span>
                        )}
                    </div> */}

                    <Controller
                        control={control}
                        name="role"
                        render={({ field }) => (
                            <SelectComponent
                                value={field.value || ""}
                                onValueChange={field.onChange}
                                options={
                                    allRoles?.data?.map((role: { role: string }) => ({
                                        label: role.role,
                                        value: role.role,
                                    }))
                                }
                                placeholder="Select role"
                            />
                        )}
                    />


                    <label className={labelClass}>Status</label>
                    <Controller
                        name="isActive"
                        control={control}
                        render={({ field }) => (
                            <SelectComponent
                                value={field.value || ""}
                                onValueChange={field.onChange}
                                options={[
                                    { label: "ACTIVE", value: "ACTIVE" },
                                    { label: "INACTIVE", value: "INACTIVE" },
                                ]}
                                placeholder="Select Status"
                            />
                        )}
                    />

                    {error && 'data' in error &&
                        // @ts-expect-error/not handled error types
                        <span className="text-xs text-red-600">{error.data?.message}</span>
                    }
                    {updateError && 'data' in updateError &&
                        // @ts-expect-error/not handled error types
                        <span className="text-xs text-red-600">{updateError.data?.message}</span>
                    }
                    <Button type="submit" className="w-full mt-4">
                        {isUpdating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Update User"}
                    </Button>


                </form>
            </CardContent>
        </Card>
    );
};

export default UpdateUserForm;

