import Logo from '@/assets/logo.png'

import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Pencil, Info, Contact2, LocateFixed, Upload, Save, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import CategoryDetailContainer from '@/components/category-detail-container'
import { useForm } from 'react-hook-form'


const deviceData = [
  {
    branch: "Branch 1",
    sessions: "Someone sharma",
    day: -3,
    // week: -12,
  },
  {
    branch: "Branch 2",
    sessions: "Someone sharma",
    day: -5,
    // week: -2,
  },
  {
    branch: "Branch 3",
    sessions: "Someone sharma",
    day: -5,
    // week: -6,
  },
];

type OrganizationProp = {
  id: string;
  institutionName: string;
  founderName: string;
  affiliation: string;
  institutionShortcode: string;
  panNumber: string;
  primaryEmail: string;
  alternateEmail: string;
  contactNumber: string;
  officeNumber: string;
  address: string;
  province: string;
  city: string;
  zipCode: string;
  institutionType: string;
  packageType: string;
  hasBranch: boolean;
  branchCount: number;
  logoUrl: string;
  tagline: string;
  createdAt: string;
  updatedAt: string;
}

const organization:OrganizationProp ={
  "id": "org_001",

  "institutionName": "Himalayan Sunrise Academy Pvt. Ltd.",
  "founderName": "Suman Shrestha",
  "affiliation": "National Examination Board (NEB)",
  "institutionShortcode": "HSA",
  "panNumber": "604578392",

  "primaryEmail": "info@hsa.edu.np",
  "alternateEmail": "admin@hsa.edu.np",
  "contactNumber": "+977-1-4523678",
  "officeNumber": "+977-1-4529876",

  "address": "Baneshwor-10",
  "province": "Bagmati",
  "city": "Kathmandu",
  "zipCode": "44600",

  "institutionType": "school",
  "packageType": "premium",

  "hasBranch": true,
  "branchCount": 3,

  "logoUrl": "https://dummycdn.com/logo-hsa.png",
  "tagline": "Explore to Invent",

  "createdAt": "2025-01-10T10:00:00Z",
  "updatedAt": "2025-02-01T15:30:00Z"
}


// type InstitutionTypeProp = 'school' | 'campus' | 'cooperative'

export default function Organization() {

  const [isEditActive, setIsEditActive] = useState(false)
  // const [isBranch, setIsBranch] = useState(false)

  const {
    register,
    handleSubmit,

  } = useForm<OrganizationProp>({
    defaultValues: organization,
  })

  const onSubmit = (data: OrganizationProp) => {
    console.log(data)
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
              <Input
                id="institutionName"
                className="w-full"
                disabled={!isEditActive}
                {...register("institutionName")}
              />
            </div>

            <div className="flex gap-2">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="founderName" className="text-sm text-foreground/75">
                  Founder Name <span className="text-red-500">*</span> :
                </label>
                <Input
                  id="founderName"
                  className="w-full"
                  disabled={!isEditActive}
                  {...register('founderName')}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="affiliation" className="text-sm text-foreground/75">
                  Affiliation <span className="text-red-500">*</span> :
                </label>
                <Input
                  id="affiliation"
                  className="w-full"
                  disabled={!isEditActive}
                  {...register('affiliation')}
                />
              </div>

            </div>


            <div className="flex gap-2">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="institutionShortcode" className="text-sm text-foreground/75">
                  Institution Shortcode :
                </label>
                <Input
                  id="institutionShortcode"
                  className="w-full"
                  disabled={!isEditActive}
                  {...register('institutionShortcode')}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="panNo" className="text-sm text-foreground/75">
                  PAN Number <span className="text-red-500">*</span> :
                </label>
                <Input
                  id="panNo"
                  className="w-full"
                  disabled={!isEditActive}
                  {...register('panNumber')}
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
                <Input
                  id="primaryEmail"
                  className="w-full"
                  disabled={!isEditActive}
                  {...register('primaryEmail')}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="alternateEmail" className="text-sm text-foreground/75">
                  Alternate Email :
                </label>
                <Input
                  id="alternateEmail"
                  className="w-full"
                  disabled={!isEditActive}
                  {...register('alternateEmail')}
                />
              </div>

            </div>


            <div className="flex gap-2">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="contactNo" className="text-sm text-foreground/75">
                  Contact:
                </label>
                <Input
                  id="contactNo"
                  className="w-full"
                  disabled={!isEditActive}
                  {...register('contactNumber')}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="officeNo" className="text-sm text-foreground/75">
                  Office No :
                </label>
                <Input
                  id="officeNo"
                  className="w-full"
                  disabled={!isEditActive}
                  {...register('officeNumber')}
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
                  <Input
                      id="address"
                      className="w-full"
                      disabled={!isEditActive}
                      {...register('address')}
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="province" className="text-sm text-foreground/75">
                    Province:
                  </label>
                  <Input
                    id="province"
                    className="w-full"
                    disabled={!isEditActive}
                    {...register('province')}
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="city" className="text-sm text-foreground/75">
                    City:
                  </label>
                  <Input
                    id="city"
                    className="w-full"
                    disabled={!isEditActive}
                    {...register('city')}
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="zipCode" className="text-sm text-foreground/75">
                    Zip Code:
                  </label>
                  <Input
                    id="zipCode"
                    className="w-full"
                    disabled={!isEditActive}
                    {...register('zipCode')}
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
                  <Input
                    id="location"
                    className="w-full"
                    disabled={!isEditActive}
                    {...register('institutionType')}
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="packageType" className="text-sm text-foreground/75">
                    Package Type:
                  </label>
                  <Input
                    id="packageType"
                    className="w-full"
                    disabled={!isEditActive}
                    {...register('packageType')}
                  />
                </div>
              </div>


            </CategoryDetailContainer>
          </div>

        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">

          <Card className="px-0 py-1 shadow-xs ">
            <CardContent className=" space-y-3 text-xs px-4  py-2 w-full">
              <div className="">
                <div className="flex flex-row gap-2 items-center">
                  <Input type="checkbox" id='hasBranch' className="size-3" />

                  <label htmlFor="hasBranch" className="text-sm text-foreground/75 text-nowrap">
                    Any Branch ?
                  </label>
                </div>
                <div className="flex flex-col gap-2 w-full pt-3">
                  <label htmlFor="branchCount" className="text-sm text-foreground/75">
                    No of Branch :
                  </label>
                  <Input
                    id="branchCount"
                    type="number"
                    min={1}
                    max={20}
                    className="w-full"
                    disabled={!isEditActive}
                    {...register('branchCount')}
                  />
                </div>
              </div>
            </CardContent>
          </Card>


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

          {/* Branch info */}
          <div className='px-4 mt-2 border'>
            <Table className='text-xs text-gray-600'>
              {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
              <TableHeader>
                <TableRow>
                  <TableHead className="">Branch Name</TableHead>
                  <TableHead>Head</TableHead>
                  <TableHead>Day</TableHead>
                  <TableHead >Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deviceData.map((item) => (
                  <TableRow key={item.branch}>
                    <TableCell className="font-medium">{item.branch}</TableCell>
                    <TableCell>{item.sessions}</TableCell>
                    <TableCell>{item.day}</TableCell>
                    {/* <TableCell >{item.week}</TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

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


