import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FiscalYearPage() {
    const data = {
        name: "2081/2083",
        start: "2081/04/01",
        end: "2083/03/31",
        isCurrent: true,
        isActive: true,
    };

    return (
        <div className="min-h-screen ">
            <div className="max-w-2xl mx-auto">
                <Card className="border-none shadow-xs py-4">
                    <CardHeader className="">
                        <CardTitle className="text-lg text-foreground/85 text-center">Fiscal Year Details</CardTitle>
                    </CardHeader>

                    <CardContent className=" text-sm">
                        <div className="gap-6 space-y-8 border p-4">
                            <div className="space-y-2 flex gap-4 justify-between">
                                <p className="text-muted-foreground">Fiscal Year Name</p>
                                <p className="font-medium text-base">{data.name}</p>
                            </div>

                             <div className="space-y-2 flex gap-4 justify-between">
                                <p className="text-muted-foreground">Fiscal Year Start</p>
                                <p className="font-medium text-base">{data.start}</p>
                            </div>

                             <div className="space-y-2 flex gap-4 justify-between">
                                <p className="text-muted-foreground">Fiscal Year End</p>
                                <p className="font-medium text-base">{data.end}</p>
                            </div>

                            <div className="space-y-1 flex gap-4 justify-between">
                                <p className="text-muted-foreground">Is Current Fiscal Year</p>
                                <Badge variant={data.isCurrent ? "default" : "secondary"}>
                                    {data.isCurrent ? "True" : "False"}
                                </Badge>
                            </div>

                            <div className="space-y-1 flex gap-4 justify-between">
                                <p className="text-muted-foreground">Is Active</p>
                                <Badge variant={data.isActive ? "default" : "secondary"}>
                                    {data.isActive ? "True" : "False"}
                                </Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
