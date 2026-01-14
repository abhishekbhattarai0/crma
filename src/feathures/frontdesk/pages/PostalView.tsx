import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, CircleFadingPlus, File, } from "lucide-react"
import DocumentCard from "../components/document-card"
import Detail from "../components/detail-card"

export default function PostalView() {
  return (
    <div className="w-full  mx-auto flex flex-col gap-4 pb-6">


      {/* Layout */}
      {/* Left Column */}

      <div className="grid lg:grid-cols-2 gap-4">

        {/* Summary Information */}
        <Card className="px-0 py-1">
          <CardHeader className="border-b flex  items-center px-4 ">
            <div className="text-xs text-foreground/75">
              <Info size={14} />
            </div>
            <CardTitle className="text-foreground/75 font-semibold text-md">
              Summary Information
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs px-4  py-2">
            <Detail label="REFERENCE NO" value="REF-2024-002" />
            <Detail label="LETTER NO" link="LTR-002" />
            <Detail label="DATE" value="2024-01-18" />
            <Detail label="FROM DATE" value="2024-01-17" />
          </CardContent>
        </Card>


        {/* Recipient & Content */}
        <Card className="px-0 py-1">
          <CardHeader className="border-b flex  items-center px-4 ">
            <div className="text-xs text-foreground/75">
              <CircleFadingPlus size={14} />
            </div>
            <CardTitle className="text-foreground/75 font-semibold text-md">
              Recipient & Content
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 py-4 px-4">
            <Detail label="to title" value="REF-2024-002" />
            <Detail label="address" value="Kathmandu Metropolitan City, Nepal" />
            <Detail label="Note" value="Request for project proposal submission" />
          </CardContent>
        </Card>


      </div>

      {/* Documents */}
      <Card className="px-0 py-1">
        <CardHeader className="border-b flex  items-center px-4 ">
          <div className="text-xs text-foreground/75">
            <File size={14} />
          </div>
          <CardTitle className="text-foreground/75 font-semibold text-md">
            Documents
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 py-4 px-4">

          <DocumentCard fileName="proposal-request.pdf" />
          <DocumentCard fileName="proposal-request.pdf" />
          <DocumentCard fileName="proposal-request.pdf" />
        </CardContent>
      </Card>

      {/* Right Column */}
      <div className="space-y-6">
        {/* <Card className="px-0 gap-1" >
          <CardHeader className="border-b flex justify-between items-center px-2">
            <CardTitle className="text-foreground/85 text-sm">Key Contacts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 p-2">

          </CardContent>
        </Card> */}


      </div>
    </div>
  )
}








