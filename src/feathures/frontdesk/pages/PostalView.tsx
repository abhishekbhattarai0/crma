import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, CircleFadingPlus, File, Download } from "lucide-react"

//  {
//     referenceNo: "REF-2024-002",
//     date: "2024-01-18",
//     fromDate: "2024-01-17",
//     address: "Lalitpur Sub-Metropolitan City, Nepal",
//     note: "Submission of company profile and credentials.",
//     toTitle: "Procurement Department",
//     letterNo: "LTR-002",
//     docs: [
//       "https://example.com/docs/company-profile.pdf",
//       "https://example.com/docs/credentials.pdf"
//     ]
//   },

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
        <Card className="px-0 gap-1" >
          <CardHeader className="border-b flex justify-between items-center px-2">
            <CardTitle className="text-foreground/85 text-sm">Key Contacts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 p-2">

          </CardContent>
        </Card>


      </div>
    </div>
  )
}

/* Helper Components */

function Detail({
  label,
  value,
  link
}: {
  label: string
  value?: string
  link?: string
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase text-foreground/65 mb-1">{label}</p>

      {link && <a href={link} className="text-primary hover:underline">
        {link}
      </a>}
      {value && <p className="font-medium text-xs text-foreground/80">{value}</p>}
    </div>
  )
}



function DocumentCard({
  fileName,
}: {
  fileName: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 border rounded p-2 text-foreground/85 ">
      <div className="flex gap-4">
        <div className="flex items-center justify-center p-1 bg-pink-200
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

