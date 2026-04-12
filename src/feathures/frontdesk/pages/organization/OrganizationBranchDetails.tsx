import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Info, Contact2, LocateFixed, Save } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import CategoryDetailContainer from "@/components/category-detail-container"
import { Controller, useForm } from "react-hook-form"

import { toast } from "sonner"
import {  useGetBranchByIdQuery, useUpdateBranchMutation } from "../../api/api"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

type BranchProp = {
  id: string
  branchName: string
  branchHead: string
  contactNumber: string
  email: string
  address: string
  province: string
  city: string
  zipCode: string
  status: string
  organizationId: string
  createdAt: string
  updatedAt: string
}

export default function OrganizationBranchDetails() {
  const { organizationId, branchId} = useParams()

  const [updateBranch] = useUpdateBranchMutation()
  const { data: branchData, isLoading } =
    useGetBranchByIdQuery({organizationId: organizationId as string, branchId: branchId as string}, {
      skip: !branchId,
    })

  const { 
    handleSubmit, 
    reset ,
    control,
  } = useForm<BranchProp>({
    defaultValues: branchData?.data 
  })

  useEffect(() => {
    if (branchData?.data) {
      reset(branchData.data)
    }
  }, [branchData, reset])

  const onSubmit = async (data: BranchProp) => {
    const { data: response, error } = await updateBranch({organizationId, branchId, data})

    if (response) {
      toast.success("Branch saved successfully")
    }

    if (error) {
      toast.error("Failed to save branch")
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 pb-6"
    >
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-2 flex flex-col gap-3">
          {/* General Information */}
          <CategoryDetailContainer icon={Info} title="General Information">
            <div className="flex flex-col w-full gap-2">
              <label className="text-sm text-foreground/75">
                Branch Name <span className="text-red-500">*</span> :
              </label>
              <Controller
                name="branchName"
                control={control}
                render={({field}) => (
                  <Input {...field}  />
                )}
              />
            </div>

            <div className="flex flex-col w-full gap-2">
              <label className="text-sm text-foreground/75">
                Branch Head <span className="text-red-500">*</span> :
              </label>
              <Controller
                name="branchHead"
                control={control}
                render={({field}) => (
                  <Input {...field}  />
                )}
              />
            </div>
          </CategoryDetailContainer>

          {/* Contact Information */}
          <CategoryDetailContainer icon={Contact2} title="Contact Information">
            <div className="flex gap-2">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm text-foreground/75">
                  Contact Number :
                </label>
                <Controller
                  name="contactNumber"
                  control={control}
                  render={({field}) => (
                    <Input {...field}  />
                  )}
                  />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm text-foreground/75">
                  Email :
                </label>
                <Controller
                  name="email"
                  control={control}
                  render={({field}) => (
                    <Input {...field}  />
                  )}
                  />
              </div>
            </div>
          </CategoryDetailContainer>

          {/* Location */}
          <div className="grid md:grid-cols-2 gap-4">
            <CategoryDetailContainer icon={LocateFixed} title="Location">
              <div className="space-y-2">
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-sm text-foreground/75">
                    Address <span className="text-red-500">*</span> :
                  </label>
                  <Controller
                    name="address"
                    control={control}
                    render={({field}) => (
                      <Input {...field}  />
                    )}
                    />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label className="text-sm text-foreground/75">
                    Province :
                  </label>
                  <Controller
                    name="province"
                    control={control}
                    render={({field}) => (
                      <Input {...field}  />
                    )}
                    />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label className="text-sm text-foreground/75">
                    City :
                  </label>
                  <Controller
                    name="city"
                    control={control}
                    render={({field}) => (
                      <Input {...field}  />
                    )}
                    />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label className="text-sm text-foreground/75">
                    Zip Code :
                  </label>
                  <Controller
                    name="zipCode"
                    control={control}
                    render={({field}) => (
                      <Input {...field}  />
                    )}
                    />
                </div>
              </div>
            </CategoryDetailContainer>

            {/* Status Section */}
            <CategoryDetailContainer icon={Info} title="Status">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm text-foreground/75">
                  Status :
                </label>
                <Controller
                  name="status"
                  control={control}
                  render={({field}) => (
                    <Input {...field}  />
                  )}
                  />
              </div>

              <Controller
                name="organizationId"
                control={control}
                render={({field}) => (
                  <Input {...field} type="hidden" />
                )}
              />
            </CategoryDetailContainer>
          </div>

          <Card>
            <CardContent>
              <Button
                type="submit"
                size="sm"
                className={cn(
                  "hover:bg-primary/80 active:bg-primary w-"
                )}
              >
                <Save />
                Save Branch
              </Button>
            </CardContent>
          </Card>
      </div>
    </form>
  )
}