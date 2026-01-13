import Logo from '@/assets/logo.png'

import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Pencil, Info, Contact2, LocateFixed, Upload, Save, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { SelectComponent } from '@/components/ui/SelectComponent'


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

type InstitutionTypeProp = 'school' | 'campus' | 'cooperative'

export default function Organization() {

  const [isEditActive, setIsEditActive] = useState(false)
  // const [isBranch, setIsBranch] = useState(false)
  const [type, setType] = useState<InstitutionTypeProp>('school')

  return (
    <div className="  flex flex-col gap-4 pb-6">

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-2 flex flex-col gap-3">

          {/* General Information */}
          <Card className="px-0 py-1 shadow-xs">
            <CardHeader className="border-b flex  items-center px-4 ">
              <div className="text-xs text-foreground/75">
                <Info size={14} />
              </div>
              <CardTitle className="text-foreground/75 font-semibold text-md">
                General Information
              </CardTitle>
            </CardHeader>
            <CardContent className=" space-y-3 text-xs px-4  py-2 w-full">

              <div className="flex flex-col w-full gap-2">
                <label htmlFor="institutionName" className="text-sm text-foreground/75">
                  Institution Name <span className="text-red-500">*</span> :
                </label>
                <Input
                  id="institutionName"
                  className="w-full"
                  disabled={!isEditActive}
                  value={'value'}
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
                    value={'value'}
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
                    value={'value'}
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
                    value={'value'}
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
                    value={'value'}
                  />
                </div>

              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="px-0 py-1 shadow-xs">
            <CardHeader className="border-b flex  items-center px-4 ">
              <div className="text-xs text-foreground/75">
                <Contact2 size={14} />
              </div>
              <CardTitle className="text-foreground/75 font-semibold text-md">
                Contact Details
              </CardTitle>
            </CardHeader>
            <CardContent className=" space-y-3 text-xs px-4  py-2 w-full">

              <div className="flex gap-2">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="primaryEmail" className="text-sm text-foreground/75">
                    Primary Email <span className="text-red-500">*</span> :
                  </label>
                  <Input
                    id="primaryEmail"
                    className="w-full"
                    disabled={!isEditActive}
                    value={'value'}
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
                    value={'value'}
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
                    value={'value'}
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
                    value={'value'}
                  />
                </div>

              </div>
            </CardContent>
          </Card>

          {/* Classification and Location Information */}
          <div className="grid md:grid-cols-2 gap-4 ">
            <Card className="px-0 py-1 shadow-xs">
              <CardHeader className="border-b flex  items-center px-4 ">
                <div className="text-xs text-foreground/75">
                  <Contact2 size={14} />
                </div>
                <CardTitle className="text-foreground/75 font-semibold text-md">
                  Classification
                </CardTitle>
              </CardHeader>
              <CardContent className=" space-y-3 text-xs px-4  py-2 w-full">

                <div className="space-y-2">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="institutionType" className="text-sm text-foreground/75">
                      Institution Type <span className="text-red-500">*</span> :
                    </label>
                    {/* <Input
                      id="institutionType"
                      className="w-full"
                      disabled={!isEditActive}
                      value={'value'}
                    /> */}
                    <SelectComponent
                      
                      onValueChange={(value) => setType(value as InstitutionTypeProp)}
                      options={[
                        { label: "School", value: "school" },
                        { label: "campus", value: "cooperative" },
                        { label: "Co-operative", value: "cooperative" },
                      ]}
                      placeholder={type}
                      
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
                      value={'value'}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="px-0 py-1 shadow-xs">
              <CardHeader className="border-b flex  items-center px-4 ">
                <div className="text-xs text-foreground/75">
                  <LocateFixed size={14} />
                </div>
                <CardTitle className="text-foreground/75 font-semibold text-md">
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className=" space-y-3 text-xs px-4  py-2 w-full">

                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="location" className="text-sm text-foreground/75">
                      Institution Type <span className="text-red-500">*</span> :
                    </label>
                    <Input
                      id="location"
                      className="w-full"
                      disabled={!isEditActive}
                      value={'value'}
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
                      value={'value'}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
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
                    value={'value'}
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
                <Button variant={'default'} size={'sm'} className="text-white hover:bg-primary/90 active:bg-primary py-1">
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

              </Button>}
              <Button
                size={'sm'}
                className={cn(
                  'hover:bg-primary/80 active:bg-primary w-full ',
                  isEditActive && 'w-1/2'
                )}
                onClick={() => {
                  setIsEditActive(prev => !prev)
                }}
              >
                {isEditActive ? <Save /> : <Pencil />}
                {isEditActive ? "Save" : "Edit"}

              </Button>
             </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


