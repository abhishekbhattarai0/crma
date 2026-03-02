import Logo from '@/assets/logo.png'

import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Info, Contact2, LocateFixed, Upload, Save } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useEffect } from 'react'
import { cn } from '@/lib/utils'
import CategoryDetailContainer from '@/components/category-detail-container'
import { useForm } from 'react-hook-form'
import { useCreateOrganizationMutation, useGetOrganizationByIdQuery } from '../../api/api'
import { toast } from 'sonner'
import { useParams } from 'react-router-dom'
import { OrganizationProp } from '../../types/organizationType'
import { zodResolver } from '@hookform/resolvers/zod'






export default function CreateOrganizationForm() {

    const { organizationId } = useParams()
    const [createOrganization] = useCreateOrganizationMutation()
    const { data: organizationData, isLoading } = useGetOrganizationByIdQuery(organizationId as string)
//   const [file, setFile] = useState('');

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//         const url = URL.createObjectURL(file);
//       setFile(url);
//     }
//   };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<OrganizationProp>({
        // defaultValues: organization,
        resolver: zodResolver(OrganizationProp), 
        defaultValues: {...organizationData, tagline: ' this is tagline'},
    })

    useEffect(() => {
        if (organizationData) {
            reset(organizationData?.data)
        }
    }, [organizationData])

    const onSubmit = async (data: OrganizationProp) => {
        console.log(data)
        const { data: response, error } = await createOrganization(data);
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
                {/* <div className="App">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleFileChange} />
            {file && <img src={file} alt="Uploaded preview" />} */}
        {/* </div> */}
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
                                {...register("institutionName")}
                            />
                            {errors.institutionName && (
                                <p className="text-red-500">{errors.institutionName.message}</p>
                            )}
                        </div>

                        <div className="flex gap-2">
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="founderName" className="text-sm text-foreground/75">
                                    Founder Name <span className="text-red-500">*</span> :
                                </label>
                                <Input
                                    id="founderName"
                                    className="w-full"
                                    {...register('founderName')}
                                />
                                 {errors.founderName && (
                                    <p className="text-red-500">{errors.founderName.message}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="affiliation" className="text-sm text-foreground/75">
                                    Affiliation <span className="text-red-500">*</span> :
                                </label>
                                <Input
                                    id="affiliation"
                                    className="w-full"
                                    {...register('affiliation')}
                                />
                                {errors.affiliation && (
                                    <p className="text-red-500">{errors.affiliation.message}</p>
                                )}
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
                                    {...register('institutionShortCode')}
                                />
                                {errors.institutionShortCode && (
                                    <p className="text-red-500">{errors.institutionShortCode.message}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="panNo" className="text-sm text-foreground/75">
                                    PAN Number <span className="text-red-500">*</span> :
                                </label>
                                <Input
                                    id="panNo"
                                    className="w-full"
                                    {...register('panNumber')}
                                />
                                {errors.panNumber && (
                                    <p className="text-red-500">{errors.panNumber.message}</p>
                                )}
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
                                    {...register('primaryEmail')}
                                />
                                {errors.primaryEmail && (
                                    <p className="text-red-500">{errors.primaryEmail.message}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="alternateEmail" className="text-sm text-foreground/75">
                                    Alternate Email :
                                </label>
                                <Input
                                    id="alternateEmail"
                                    className="w-full"
                                    {...register('alternateEmail')}
                                />
                                {errors.alternateEmail && (
                                    <p className="text-red-500">{errors.alternateEmail.message}</p>
                                )}
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
                                    {...register('contactNumber')}
                                />
                                {errors.contactNumber && (
                                    <p className="text-red-500">{errors.contactNumber.message}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="officeNo" className="text-sm text-foreground/75">
                                    Office No :
                                </label>
                                <Input
                                    id="officeNo"
                                    className="w-full"
                                    {...register('officeNo')}
                                />
                                {errors.officeNo && (
                                    <p className="text-red-500">{errors.officeNo.message}</p>
                                )}
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
                                        {...register('address')}
                                    />
                                    {errors.address && (
                                        <p className="text-red-500">{errors.address.message}</p>
                                    )}
                                </div>

                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="province" className="text-sm text-foreground/75">
                                        Province:
                                    </label>
                                    <Input
                                        id="province"
                                        className="w-full"
                                        {...register('province')}
                                    />
                                    {errors.province && (
                                        <p className="text-red-500">{errors.province.message}</p>
                                    )}
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="city" className="text-sm text-foreground/75">
                                        City:
                                    </label>
                                    <Input
                                        id="city"
                                        className="w-full"
                                        {...register('city')}
                                    />
                                    {errors.city && (
                                        <p className="text-red-500">{errors.city.message}</p>
                                    )}
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="zipCode" className="text-sm text-foreground/75">
                                        Zip Code:
                                    </label>
                                    <Input
                                        id="zipCode"
                                        className="w-full"
                                        {...register('zipCode')}
                                    />
                                    {errors.zipCode && (
                                        <p className="text-red-500">{errors.zipCode.message}</p>
                                    )}
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
                                        {...register('institutionType')}
                                    />
                                    {errors.institutionType && (
                                        <p className="text-red-500">{errors.institutionType.message}</p>
                                    )}
                                </div>

                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="packageType" className="text-sm text-foreground/75">
                                        Package Type:
                                    </label>
                                    <Input
                                        id="packageType"
                                        className="w-full"
                                        {...register('packageType')}
                                    />
                                    {errors.packageType && (
                                        <p className="text-red-500">{errors.packageType.message}</p>
                                    )}
                                </div>
                            </div>


                        </CategoryDetailContainer>
                    </div>

                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-4">

                    <Input
                        id="branchCount"
                        // type="file"
                        className="w-full"
                        {...register('logo')}
                    />
                    {errors.logo && (
                        <p className="text-red-500">{errors.logo.message}</p>
                    )}
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


                                <Button
                                    type='submit'
                                    size={'sm'}
                                    className={cn(
                                        'hover:bg-primary/80 active:bg-primary w-full ',
                                    )}
                                // onClick={() => {
                                //   setIsEditActive(prev => !prev)
                                // }}
                                >
                                    <Save />
                                    Save

                                </Button>

                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </form>
    )
}


