import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Info, Contact2, LocateFixed, Save } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import CategoryDetailContainer from "@/components/category-detail-container"
import { useForm } from "react-hook-form"
import {
  useCreateBranchMutation,
} from "../../api/api"
import { toast } from "sonner"
import { useParams } from "react-router-dom"

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

export default function CreateBranchForm() {
  const {  organizationId } = useParams()

  const [createBranch] = useCreateBranchMutation()
  

  const { register, handleSubmit  } = useForm<BranchProp>({
    defaultValues: {
      organizationId: organizationId,
      status: "ACTIVE",
    },
  })

  

  const onSubmit = async (data: BranchProp) => {
    const { data: response, error } = await createBranch({organizationId, data})

    if (response) {
      toast.success("Branch saved successfully")
    }

    if (error) {
      toast.error("Failed to save branch")
    }
  }

  

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 pb-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-2 flex flex-col gap-3">
          {/* General Information */}
          <CategoryDetailContainer icon={Info} title="General Information">
            <div className="flex flex-col w-full gap-2">
              <label className="text-sm text-foreground/75">
                Branch Name <span className="text-red-500">*</span> :
              </label>
              <Input {...register("branchName")} />
            </div>

            <div className="flex flex-col w-full gap-2">
              <label className="text-sm text-foreground/75">
                Branch Head <span className="text-red-500">*</span> :
              </label>
              <Input {...register("branchHead")} />
            </div>
          </CategoryDetailContainer>

          {/* Contact Information */}
          <CategoryDetailContainer icon={Contact2} title="Contact Information">
            <div className="flex gap-2">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm text-foreground/75">
                  Contact Number :
                </label>
                <Input {...register("contactNumber")} />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm text-foreground/75">
                  Email :
                </label>
                <Input {...register("email")} />
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
                  <Input {...register("address")} />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label className="text-sm text-foreground/75">
                    Province :
                  </label>
                  <Input {...register("province")} />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label className="text-sm text-foreground/75">
                    City :
                  </label>
                  <Input {...register("city")} />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label className="text-sm text-foreground/75">
                    Zip Code :
                  </label>
                  <Input {...register("zipCode")} />
                </div>
              </div>
            </CategoryDetailContainer>

            {/* Status Section */}
            <CategoryDetailContainer icon={Info} title="Status">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm text-foreground/75">
                  Status :
                </label>
                <Input {...register("status")} />
              </div>

              <Input
                type="hidden"
                {...register("organizationId")}
              />
            </CategoryDetailContainer>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4">
          <Card>
            <CardContent>
              <Button
                type="submit"
                size="sm"
                className={cn(
                  "hover:bg-primary/80 active:bg-primary w-full"
                )}
              >
                <Save />
                Save Branch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  )
}