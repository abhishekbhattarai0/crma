import Logo from '@/assets/logo.png'

import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Pencil, Info, Contact2, LocateFixed, Upload, Save, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import CategoryDetailContainer from '@/components/category-detail-container'
import { Controller, useForm } from 'react-hook-form'
import { useGetOrganizationByIdQuery, useUpdateOrganizationMutation } from '../../api/api'
import { toast } from 'sonner'
import { useParams } from 'react-router-dom'
import type { OrganizationProp } from '../../types/organizationType'


export default function Organization() {

  const { organizationId } = useParams()
  const [isEditActive, setIsEditActive] = useState(false)
  // const [isBranch, setIsBranch] = useState(false)
  const [updateOrganization] = useUpdateOrganizationMutation()
  const { data: organizationData, isLoading } = useGetOrganizationByIdQuery(organizationId as string)

  const {
    control,
    handleSubmit,
    reset,
  } = useForm<OrganizationProp>({
    // defaultValues: organization,
    defaultValues: organizationData,
  })

  useEffect(() => {
    if (organizationData) {
      reset(organizationData?.data)
    }
  }, [organizationData])

  const onSubmit = async (data: OrganizationProp) => {
    const { data: response, error } = await updateOrganization({ organizationId, data });
    if (response) {
      toast.success("Organization created successfully");
    }
    if (error) {
      toast.error("Failed to create organization");
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="  flex flex-col gap-4 pb-6">

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-2 flex flex-col gap-3">

          {/* General Information */}
          <CategoryDetailContainer icon={Info} title='General Information'>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="institutionName" className="text-sm text-foreground/75">
                Institution Name <span className="text-red-500">*</span> :
              </label>
              <Controller
                name="institutionName"
                control={control}
                render={({ field }) => (
                    <Input value={field.value} onChange={field.onChange} disabled={!isEditActive}/>
                )}
              />
            </div>

            <div className="flex gap-2">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="founderName" className="text-sm text-foreground/75">
                  Founder Name <span className="text-red-500">*</span> :
                </label>
                <Controller
                name="founderName"
                control={control}
                render={({ field }) => (
                    <Input value={field.value} onChange={field.onChange} disabled={!isEditActive}/>
                )}
              />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="affiliation" className="text-sm text-foreground/75">
                  Affiliation <span className="text-red-500">*</span> :
                </label>
                <Controller
                name="affiliation"
                control={control}
                render={({ field }) => (
                    <Input value={field.value} onChange={field.onChange} disabled={!isEditActive}/>
                )}
              />
              </div>

            </div>


            <div className="flex gap-2">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="institutionShortcode" className="text-sm text-foreground/75">
                  Institution Shortcode :
                </label>
                <Controller
                name="institutionShortCode"
                control={control}
                render={({ field }) => (
                    <Input value={field.value} onChange={field.onChange} disabled={!isEditActive}/>
                )}
              />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="panNo" className="text-sm text-foreground/75">
                  PAN Number <span className="text-red-500">*</span> :
                </label>
                <Controller
                name="panNumber"
                control={control}
                render={({ field }) => (
                    <Input value={field.value} onChange={field.onChange} disabled={!isEditActive}/>
                )}
              />
              </div>

            </div>
          </CategoryDetailContainer>


          {/* Contact Information */}
          <CategoryDetailContainer icon={Contact2} title='Contact Information'>
            <div className="flex gap-2">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="primaryEmail" className="text-sm text-foreground/75">
                  Primary Email <span className="text-red-500">*</span> :
                </label>
                <Controller
                name="primaryEmail"
                control={control}
                render={({ field }) => (
                    <Input value={field.value} onChange={field.onChange} disabled={!isEditActive}/>
                )}
              />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="alternateEmail" className="text-sm text-foreground/75">
                  Alternate Email :
                </label>
                <Controller
                name="alternateEmail"
                control={control}
                render={({ field }) => (
                    <Input value={field.value} onChange={field.onChange} disabled={!isEditActive}/>
                )}
              />
              </div>

            </div>


            <div className="flex gap-2">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="contactNumber" className="text-sm text-foreground/75">
                  Contact:
                </label>
                <Controller
                name="contactNumber"
                control={control}
                render={({ field }) => (
                    <Input value={field.value} onChange={field.onChange} disabled={!isEditActive}/>
                )}
              />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="officeNo" className="text-sm text-foreground/75">
                  Office No :
                </label>
                <Controller
                name="officeNo"
                control={control}
                render={({ field }) => (
                    <Input value={field.value} onChange={field.onChange} disabled={!isEditActive}/>
                )}
              />
              </div>

            </div>
          </CategoryDetailContainer>

          {/* Classification and Location Information */}
          <div className="grid md:grid-cols-2 gap-4 ">
            <CategoryDetailContainer icon={Contact2} title='Location' >


              <div className="space-y-2">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="Address" className="text-sm text-foreground/75">
                    Address <span className="text-red-500">*</span> :
                  </label>
                  <Controller
                  name="address"
                  control={control}
                  render={({ field }) => (
                      <Input value={field.value} onChange={field.onChange} disabled={!isEditActive}/>
                  )}
                />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="province" className="text-sm text-foreground/75">
                    Province:
                  </label>
                  <Controller
                  name="province"
                  control={control}
                  render={({ field }) => (
                      <Input value={field.value} onChange={field.onChange} disabled={!isEditActive}/>
                  )}
                />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="city" className="text-sm text-foreground/75">
                    City:
                  </label>
                  <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                      <Input value={field.value} onChange={field.onChange} disabled={!isEditActive}/>
                  )}
                />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="zipCode" className="text-sm text-foreground/75">
                    Zip Code:
                  </label>
                  <Controller
                  name="zipCode"
                  control={control}
                  render={({ field }) => (
                      <Input value={field.value} onChange={field.onChange} disabled={!isEditActive}/>
                  )}
                />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="zipCode" className="text-sm text-foreground/75">
                    Zip Code:
                  </label>
                  <Controller
                  name="zipCode"
                  control={control}
                  render={({ field }) => (
                      <Input value={field.value} onChange={field.onChange} disabled={!isEditActive}/>
                  )}
                />
                </div>
              </div>
            </CategoryDetailContainer>


            <CategoryDetailContainer icon={LocateFixed} title='Classification'>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="location" className="text-sm text-foreground/75">
                    Institution Type <span className="text-red-500">*</span> :
                  </label>
                  <Controller
                  name="institutionType"
                  control={control}
                  render={({ field }) => (
                      <Input value={field.value} onChange={field.onChange} disabled={!isEditActive}/>
                  )}
                />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="location" className="text-sm text-foreground/75">
                    Institution Shortcode <span className="text-red-500">*</span> :
                  </label>
                  <Controller
                  name="institutionShortCode"
                  control={control}
                  render={({ field }) => (
                      <Input value={field.value} onChange={field.onChange} disabled={!isEditActive}/>
                  )}
                />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="packageType" className="text-sm text-foreground/75">
                    Package Type:
                  </label>
                  <Controller
                  name="packageType"
                  control={control}
                  render={({ field }) => (
                      <Input value={field.value} onChange={field.onChange} disabled={!isEditActive}/>
                  )}
                />
                </div>
              </div>


            </CategoryDetailContainer>
          </div>

        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          <Controller
          name="logo"
          control={control}
          render={({ field }) => (
              <Input value={field.value} onChange={field.onChange} disabled={!isEditActive}/>
          )}
        />
          {/* Logo */}
          <Card className=''>
            <CardHeader className="border-b flex justify-between items-center">
              <CardTitle className="text-foreground/85">Logo</CardTitle>
              <CardAction >
                <Button type='button' variant={'default'} size={'sm'} className="text-white hover:bg-primary/90 active:bg-primary py-1">
                  <Upload size={18} />
                  <div >Update</div>
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2 justify-center items-center">
              <div className='flex flex-col '>
                <Avatar className='border rounded-sm '>
                  <AvatarImage src={Logo} />
                </Avatar>
                <div className='mt-2 '>
                  <h1 className='text-sm text-center font-bold trackingwider text-foreground/85'>CMR Campus</h1>
                  <p className='text-center text-xs text-foreground/75'>Explore to Invent</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card >
            <CardContent className=''>
              <div className='flex gap-2'>
                {isEditActive &&
                  <Button
                    size={'sm'}
                    className='hover:bg-primary/80 active:bg-primary w-1/2 '
                    onClick={() => {
                      setIsEditActive(prev => !prev)
                    }}
                  >
                    <X />
                    Cancel

                  </Button>
                }

                {isEditActive &&
                  <Button
                    type='submit'
                    size={'sm'}
                    className={cn(
                      'hover:bg-primary/80 active:bg-primary w-full ',
                      isEditActive && 'w-1/2'
                    )}
                  // onClick={() => {
                  //   setIsEditActive(prev => !prev)
                  // }}
                  >
                    <Save />
                    Save
                  </Button>
                }

                {!isEditActive &&
                  <Button
                    type='button'
                    size={'sm'}
                    className={cn(
                      'hover:bg-primary/80 active:bg-primary w-full ',
                    )}
                    onClick={() => {
                      setIsEditActive(prev => !prev)
                    }}
                  >
                    <Pencil />
                    Edit

                  </Button>
                }

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  )
}


