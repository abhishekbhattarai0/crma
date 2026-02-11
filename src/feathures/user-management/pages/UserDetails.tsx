import user from '@/assets/user.jpg'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarImageFallback } from "@/components/ui/avatar"
import { Contact2, LocateFixed, } from "lucide-react"
import CategoryDetailContainer from '@/components/category-detail-container'
import { DetailField } from '@/components/detail-field'
import { useLocation } from 'react-router-dom'
import { useGetUserByIdQuery } from '../userStore/userApi'
import RolePermissionView from '../components/role-permission-view'
import Loader from '@/components/common/Loader'





export default function UserDetails() {

  const location = useLocation()
  const { data, isLoading } = useGetUserByIdQuery(location.state.userId)
  // const { data: accessControl, isLoading: accessControlLoading } = useGetRoleByUserIdQuery(data?.id)
  // const { data: accessControl, isLoading: isAccessControlLoading } =
  //   useGetRoleByUserIdQuery(data?.id as string, {
  //     skip: !data?.id,
  //   });
  if (isLoading) {
    return <Loader />
  }

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
                    <AvatarImage src={data?.avatar || user} />
                    <AvatarImageFallback text="AB" />
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold text-foreground/75">
                      {data?.firstName} {data?.lastName}
                    </h3>
                    <p className="text-sm text-foreground/45">
                      {data?.designation}, {data?.currentAddress}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground/75">
                    {data?.role}
                  </h3>
                  <p className="text-sm text-foreground/45">{data?.isActive}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Details */}
          <CategoryDetailContainer icon={Contact2} title="Personal Details">
            <div className="flex gap-4">
              <DetailField label="First Name" value={data?.firstName} />
              <DetailField label="Last Name" value={data?.lastName} />
            </div>

            <div className="flex gap-4">
              <DetailField label="Gender" value={data?.gender} />
              <DetailField label="Marital Status" value="Married" />
              <DetailField label="DOB" value="2002-01-04" />
            </div>
          </CategoryDetailContainer>

          {/* Contact Details */}
          <CategoryDetailContainer icon={Contact2} title="Contact Details">
            <div className="flex gap-4">
              <DetailField
                label="Official Email"
                value={data?.officialEmail}
              />
              <DetailField
                label="Personal Email"
                value={data?.personalEmail}
              />
            </div>

            <div className="flex gap-4">
              <DetailField label="Phone" value={data?.phone} />
              <DetailField
                label="Emergency Contact"
                value={data?.emergencyContactPhone}
              />
            </div>
          </CategoryDetailContainer>

          {/* Company Details */}
          <CategoryDetailContainer icon={Contact2} title="Company Details">
            <div className="flex gap-4">
              <DetailField label="Department" value={data?.department} />
              <DetailField label="Team" value={data?.team} />
            </div>

            <div className="flex gap-4">
              <DetailField label="Designation" value={data?.designation} />
              <DetailField label="Shift" value={data?.shift} />
            </div>
          </CategoryDetailContainer>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4">
          <CategoryDetailContainer title="System Access" icon={LocateFixed}>
            <div className="flex flex-col gap-4">
              <DetailField label="Username" value={data?.username} />
              <DetailField label="Role" value={data?.role} />

              {/* Permissions */}
              <p className="text-sm text-foreground/75">Permissions</p>
              <div className='border p-2'>
                <RolePermissionView permissions={data?.permission} />
              </div>
              <DetailField label="Status" value={data?.isActive} />
            </div>
          </CategoryDetailContainer>
        </div>

      </div>
    </div>
  );
}



