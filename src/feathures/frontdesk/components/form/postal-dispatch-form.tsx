
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import useModal from "@/hooks/useModal";

const postalForm = z.object({
    referenceNo: z.string().nonempty({ error: 'cannot be empty' }),
    date: z.string().nonempty({ error: 'cannot be empty' }),
    fromTitle: z.string().nonempty({ error: 'cannot be empty' }),
    address: z.string().nonempty({ error: 'cannot be empty' }),
    note: z.string().optional(),
    toTitle: z.string().nonempty({ error: 'cannot be empty' }),
    letterNo: z.string().nonempty({ error: 'cannot be empty' }),
    docs: z
        .instanceof(FileList)
        .refine((files) => files.length === 1, "File required")
        .refine(
            (files) =>
                ["application/pdf", "image/png", "image/jpeg", "image/jpg"].includes(
                    files[0]?.type
                ),
            "Invalid file type"
        )
});

type PostalInputProps = z.infer<typeof postalForm>


const PostalDispatchForm = () => {

    const { setClose } = useModal()


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(postalForm)
    })



    const onSubmit = (data: PostalInputProps) => {
        console.log(data, errors)
        setClose()

    }


    return (
        <Card className="border-0 shadow-none">
            <CardContent>
                <form action="" onSubmit={handleSubmit(onSubmit)}>

                    <div className="space-y-3">

                        {/* Refrence No */}
                        <div className="flex gap-2">
                            <div className="flex flex-col w-full  gap-1  ">
                                <label className="relative  text-sm  text-foreground/75" htmlFor="referenceNo">
                                    Refrence No<span className="text-red-500"> *</span> :
                                </label>
                                <Input
                                    id="referenceNo"
                                    className="border-sm"
                                    placeholder="Enter referenceNo"
                                    {...register("referenceNo")}
                                />
                                {errors.referenceNo && (
                                    <span className="text-xs text-red-600">{errors.referenceNo.message}</span>
                                )}
                            </div>

                            {/* Date */}
                            <div className="flex flex-col w-full  gap-1 ">
                                <label className="relative  text-sm  text-foreground/75" htmlFor="date">
                                    Date (BS)<span className="text-red-500"> *</span> :
                                </label>
                                <Input
                                    id="date"
                                    type="date"
                                    className="border-sm"
                                    placeholder="Enter referenceNo"
                                    {...register("date")}
                                />
                                {errors.date && (
                                    <span className="text-xs text-red-600">{errors.date.message}</span>
                                )}
                            </div>
                        </div>

                        {/* From Title */}
                        <div className="flex flex-col w-full  gap-1 ">
                            <label className="relative  text-sm  text-foreground/75" htmlFor="fromTitle">
                                From Title<span className="text-red-500"> *</span> :
                            </label>
                            <Input
                                id="fromTitle"
                                className="border-sm"
                                placeholder="Enter fromTitle"
                                {...register("fromTitle")}
                            />
                            {errors.fromTitle && (
                                <span className="text-xs text-red-600">{errors.fromTitle.message}</span>
                            )}
                        </div>

                        {/* Address */}
                        <div className="flex flex-col w-full  gap-1 ">
                            <label className="relative  text-sm  text-foreground/75" htmlFor="address">
                                Address<span className="text-red-500"> *</span> :
                            </label>
                            <Input
                                id="address"
                                className="border-sm "
                                placeholder="Enter address"
                                {...register("address")}
                            />
                            {errors.address && (
                                <span className="text-xs text-red-600">{errors.address.message}</span>
                            )}
                        </div>

                        {/* Note */}
                        <div className="flex flex-col w-full  gap-1 ">
                            <label className=" text-sm  text-foreground/75" htmlFor="note">
                                Note :
                            </label>
                            <Textarea
                                id="note"
                                className="border-sm"
                                placeholder="Enter note"
                                {...register("note")}
                            />
                            {errors.note && (
                                <span className="text-xs text-red-600">{errors.note.message}</span>
                            )}
                        </div>

                        {/* To title */}
                        <div className="flex flex-col w-full  gap-1 ">
                            <label className="relative  text-sm  text-foreground/75" htmlFor="toTitle">
                                To Title<span className="text-red-500"> *</span> :
                            </label>
                            <Input
                                id="toTitle"
                                className="border-sm"
                                placeholder="Enter toTitle"
                                {...register("toTitle")}
                            />
                            {errors.toTitle && (
                                <span className="text-xs text-red-600">{errors.toTitle.message}</span>
                            )}
                        </div>

                        {/* Letter No */}
                        <div className="flex flex-col w-full  gap-1 ">
                            <label className="relative  text-sm  text-foreground/75" htmlFor="letterNo">
                                Letter No<span className="text-red-500"> *</span> :
                            </label>
                            <Input
                                id="letterNo"
                                type="input"
                                className="border-sm"
                                placeholder="Enter letterNo"
                                {...register("letterNo")}
                            />
                            {errors.letterNo && (
                                <span className="text-xs text-red-600">{errors.letterNo.message}</span>
                            )}
                        </div>

                        {/* Docs */}
                        <div className="flex flex-col w-full  gap-1 ">
                            <label className=" text-sm  text-foreground/75" htmlFor="docs">
                                Docs :
                            </label>
                            <Input
                                id="docs"
                                type="file"
                                className="border-sm"
                                placeholder="Enter docs"
                                {...register("docs")}
                            />
                            {errors.docs && (
                                <span className="text-xs text-red-600">{errors.docs.message}</span>
                            )}
                        </div>

                        <Button type="submit" className="w-full mt-4 hover:bg-primary/90 active:bg-primary">
                            <span>Submit</span>
                        </Button>
                    </div>

                </form>
            </CardContent>
        </Card>
    );
};

export default PostalDispatchForm;
