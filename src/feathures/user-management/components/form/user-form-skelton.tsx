import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const Field = () => (
    <div className="w-full space-y-2">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-10 w-full rounded-md" />
    </div>
);

const UserFormSkeleton = () => {
    return (
        <Card className="border-0">
            <CardContent className="space-y-6">

                {/* PERSONAL */}
                <Skeleton className="h-5 w-40" />

                <div className="flex gap-2">
                    <Field />
                    <Field />
                </div>

                <div className="flex gap-2">
                    <Field />
                    <Field />
                </div>

                <Field />

                {/* CONTACT */}
                <Skeleton className="h-5 w-48 mt-4" />

                <Field />
                <Field />

                <div className="flex gap-2">
                    <Field />
                    <Field />
                </div>

                <Field />
                <Field />

                {/* COMPANY */}
                <Skeleton className="h-5 w-48 mt-4" />

                <div className="flex gap-2">
                    <Field />
                    <Field />
                </div>

                <div className="flex gap-2">
                    <Field />
                    <Field />
                </div>

                <Field />

                {/* SYSTEM ACCESS */}
                <Skeleton className="h-5 w-48 mt-4" />

                <Field />
                <Field />
                <Field />
                <Field />

                {/* BUTTON */}
                <Skeleton className="h-10 w-full rounded-md mt-4" />
            </CardContent>
        </Card>
    );
};

export default UserFormSkeleton;
