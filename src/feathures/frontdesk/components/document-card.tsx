import { Button } from "@/components/ui/button";
import { Download, File } from "lucide-react";

export default function DocumentCard({
  fileName,
}: {
  fileName: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 border rounded p-2 text-foreground/85 ">
      <div className="flex gap-4">
        <div className="flex items-center justify-center p-1 bg-pink-200 rounded
          ">
          <File size={18} />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground/85 ">{fileName}</p>
          {/* <p className="text-xs text-muted-foreground">{role}</p> */}
        </div>
      </div>
      <Button variant={'outline'} size={'icon-sm'} className="text-primary/80 rounded-full">
        <Download />
      </Button>

    </div>
  )
}