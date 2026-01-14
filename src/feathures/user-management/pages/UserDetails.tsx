import user from '@/assets/user.jpg'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarImageFallback } from "@/components/ui/avatar"
import { Contact2, LocateFixed, } from "lucide-react"
import CategoryDetailContainer from '@/components/category-detail-container'
import { DetailField } from '@/components/detail-field'





export default function UserDetails() {

  // const [isBranch, setIsBranch] = useState(true)

  return (

    <div className="flex flex-col gap-4 pb-6">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 flex flex-col gap-4">

          {/* General Information */}
          <Card className="px-0 py-1 shadow-xs">
            <CardContent className="px-4 py-2">
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <Avatar className="size-14">
                    <AvatarImage src={user} />
                    <AvatarImageFallback text="AB" />
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold text-foreground/75">
                      Rosa Dodson
                    </h3>
                    <p className="text-sm text-foreground/45">
                      UI/UX Designer, Nepal
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground/75">
                    Admin
                  </h3>
                  <p className="text-sm text-foreground/45">Active</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Details */}
          <CategoryDetailContainer icon={Contact2} title="Personal Details">
            <div className="flex gap-4">
              <DetailField label="First Name" value="Sarah" />
              <DetailField label="Last Name" value="Johnson" />
            </div>

            <div className="flex gap-4">
              <DetailField label="Gender" value="Female" />
              <DetailField label="Marital Status" value="Married" />
              <DetailField label="DOB" value="2002-01-04" />
            </div>
          </CategoryDetailContainer>

          {/* Contact Details */}
          <CategoryDetailContainer icon={Contact2} title="Contact Details">
            <div className="flex gap-4">
              <DetailField
                label="Official Email"
                value="sarah.johnson@company.com"
              />
              <DetailField
                label="Personal Email"
                value="sarah@gmail.com"
              />
            </div>

            <div className="flex gap-4">
              <DetailField label="Phone" value="98000378338" />
              <DetailField
                label="Emergency Contact"
                value="98000378338"
              />
            </div>
          </CategoryDetailContainer>

          {/* Company Details */}
          <CategoryDetailContainer icon={Contact2} title="Company Details">
            <div className="flex gap-4">
              <DetailField label="Department" value="Finance" />
              <DetailField label="Team" value="Accounts" />
            </div>

            <div className="flex gap-4">
              <DetailField label="Designation" value="Accountant" />
              <DetailField label="Shift" value="Day" />
            </div>
          </CategoryDetailContainer>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4">
          <CategoryDetailContainer title="System Access" icon={LocateFixed}>
            <div className="flex flex-col gap-4">
              <DetailField label="Username" value="@sarahj" />
              <DetailField label="Role" value="Accountant" />
              <DetailField label="Permission Group" value="ALL_ACCESS" />
              <DetailField label="Status" value="ACTIVE" />
            </div>
          </CategoryDetailContainer>
        </div>

      </div>
    </div>
  );
}



