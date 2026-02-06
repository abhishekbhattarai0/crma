import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useModal from "@/hooks/useModal";
import { SelectComponent } from "@/components/ui/SelectComponent";
import { useEffect, useState } from "react";
import { z } from "zod";
import { useGetUserByIdQuery, useUpdateUserByIdMutation } from "../../userStore/userApi";
import UserFormSkeleton from "./user-form-skelton";
import { userSchema } from "../../types/userType";
import { Loader2 } from "lucide-react";

type RoleProps =
    | "SUPER_ADMIN"
    | "DEVELOPER"
    | "SUPPORT_STAFF"
    | "ACCOUNT_STAFF"
    | "MARKET_STAFF";



export type userFormValues = z.infer<typeof userSchema>;

const labelClass = "text-sm text-foreground/75";

const EditUserForm = ({ userId }: { userId: string }) => {
    const { setClose } = useModal();
    const [role, setRole] = useState<RoleProps>("ACCOUNT_STAFF");

    const { data: userData, isLoading, error } = useGetUserByIdQuery(userId)
    const [updateUserById, { isLoading: isUpdating, error: updateError }] = useUpdateUserByIdMutation()

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm<userFormValues>({
        resolver: zodResolver(userSchema),
        defaultValues: userData ?? {},
    });
    useEffect(() => {
        if (userData) {
            reset(userData);

        }
    }, [userData, reset]);

    const onSubmit = async (data: userFormValues) => {
        try {
            await updateUserById({ userId, data }).unwrap();
            setClose();
        } catch (err) {
            console.error("Update failed:", err);
        }
    };


    if (isLoading) return <UserFormSkeleton />

    return (
        <Card className="border-0">
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    {/* PERSONAL */}
                    <h3 className="font-semibold">Personal Details</h3>

                    <div className="flex gap-2">
                        <div className="w-full">
                            <label className={labelClass}>First Name</label>
                            <Input {...register("firstName")} />
                            {errors.firstName && (
                                <span className="text-xs text-red-600">
                                    {errors.firstName.message}
                                </span>
                            )}
                        </div>
                        <div className="w-full">
                            <label className={labelClass}>Last Name</label>
                            <Input {...register("lastName")} />
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
                                        // value={field.value}
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
                            <Input type="date" {...register("dob")} />
                            {errors.dob && (
                                <span className="text-xs text-red-600">
                                    {errors.dob.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className={labelClass}>Marital Status</label>
                        {/* <Input {...register("maritalStatus")} />
                        {errors.maritalStatus && (
                            <span className="text-xs text-red-600">
                                {errors.maritalStatus.message}
                            </span>
                        )} */}

                        <Controller
                            name="maritalStatus"
                            control={control}
                            render={({ field }) => (
                                <SelectComponent
                                    // value={field.value}
                                    onValueChange={field.onChange}
                                    options={[
                                        { label: "MARRIED", value: "MARRIED" },
                                        { label: "SINGLE", value: "SINGLE" },
                                    ]}
                                    placeholder="Select Marital Status"
                                />
                            )}
                        />
                    </div>

                    {/* CONTACT */}
                    <h3 className="font-semibold">Contact Information</h3>
                    <div>

                        <label className={labelClass}>Official Email</label>
                        <Input {...register("officialEmail")} />
                        {errors.officialEmail && (
                            <span className="text-xs text-red-600">
                                {errors.officialEmail.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <label className={labelClass}>Personal Email</label>
                        <Input {...register("personalEmail")} />
                        {errors.personalEmail && (
                            <span className="text-xs text-red-600">
                                {errors.personalEmail.message}
                            </span>
                        )}
                    </div>

                    <div className="flex gap-2">
                        <div className="w-full">
                            <label className={labelClass}>Phone</label>
                            <Input {...register("phone")} />
                            {errors.phone && (
                                <span className="text-xs text-red-600">
                                    {errors.phone.message}
                                </span>
                            )}
                        </div>
                        <div className="w-full">
                            <label className={labelClass}>Emergency Contact</label>
                            <Input {...register("emergencyContactPhone")} />
                            {errors.emergencyContactPhone && (
                                <span className="text-xs text-red-600">
                                    {errors.emergencyContactPhone.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className={labelClass}>Current Address</label>
                        <Input {...register("currentAddress")} />
                        {errors.currentAddress && (
                            <span className="text-xs text-red-600">
                                {errors.currentAddress.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <label className={labelClass}>Permanent Address</label>
                        <Input {...register("permanentAddress")} />
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
                            <Input {...register("department")} />
                            {errors.department && (
                                <span className="text-xs text-red-600">
                                    {errors.department.message}
                                </span>
                            )}
                        </div>
                        <div className="w-full">
                            <label className={labelClass}>Team</label>
                            <Input {...register("team")} />
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
                            <Input {...register("designation")} />
                            {errors.designation && (
                                <span className="text-xs text-red-600">
                                    {errors.designation.message}
                                </span>
                            )}
                        </div>
                        <div className="w-full">
                            <label className={labelClass}>Job Title</label>
                            <Input {...register("jobTitle")} />
                            {errors.jobTitle && (
                                <span className="text-xs text-red-600">
                                    {errors.jobTitle.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className={labelClass}>Shift</label>
                        <Input {...register("shift")} />
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
                        <Input {...register("username")} />
                        {errors.username && (
                            <span className="text-xs text-red-600">
                                {errors.username.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <label className={labelClass}>Role</label>
                        <SelectComponent
                            onValueChange={(value) => setRole(value as RoleProps)}
                            options={[
                                { label: "SUPER_ADMIN", value: "SUPER_ADMIN" },
                                { label: "DEVELOPER", value: "DEVELOPER" },
                                { label: "SUPPORT_STAFF", value: "SUPPORT_STAFF" },
                                { label: "ACCOUNT_STAFF", value: "ACCOUNT_STAFF" },
                                { label: "MARKET_STAFF", value: "MARKET_STAFF" },
                            ]}
                            placeholder={role}
                            {...register("role")}
                        />
                    </div>

                    {/* FIXED SELECT WITH CONTROLLER */}
                    <label className={labelClass}>Permission Group</label>
                    <Controller
                        name="permissionGroup"
                        control={control}
                        render={({ field }) => (
                            <SelectComponent
                                // value={field.value}
                                onValueChange={field.onChange}
                                options={[
                                    { label: "DEV_STANDARD", value: "DEV_STANDARD" },
                                    { label: "ADMIN_FULL", value: "ADMIN_FULL" },
                                    { label: "SUPPORT_LIMITED", value: "SUPPORT_LIMITED" },
                                ]}
                                placeholder="Select Permission Group"
                            />
                        )}
                    />

                    <label className={labelClass}>Status</label>
                    <Controller
                        name="status"
                        control={control}
                        render={({ field }) => (
                            <SelectComponent
                                // value={field.value}
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
                    <Button type="submit" className="w-full mt-4">
                        {isUpdating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Update User"}
                    </Button>

                    {updateError && 'data' in updateError &&
                        // @ts-expect-error/not handled error types
                        <span className="text-xs text-red-600">{updateError.data?.message}</span>
                    }

                </form>
            </CardContent>
        </Card>
    );
};

export default EditUserForm;

