import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { TrendingDown, TrendingUp } from 'lucide-react';

type InfoCardProps = {
    title: string;
    total: string;
    rate: number;
    desc: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}


const InfoCard = ({ title, total, rate, Icon, desc, }: InfoCardProps) => {
    return (
        <Card className='px-2 '>
            <CardContent className=' space-y-2'>
                <div className='font-semibold text-sm tracking-normal text-foreground/80 ' >
                    {title}
                </div>
                <div className='flex justify-between h-8 items-center'>
                    <h1 className='text-2xl font-semibold text-foreground/80 '>
                        {total}
                    </h1>
                    <div className=' bg-primary/10 rounded-full text-xl p-2 '>
                        <Icon className='text-foreground/35' />
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-2 text-xs font-medium text-green-500'>
                        {rate > 0 ? (
                            <>
                                <TrendingUp />
                                <p>8.5%</p>
                            </>
                        ) : (
                            <>
                                <TrendingDown color='red' />
                                <p className='text-red-500 '>{rate}</p>
                            </>
                        )}
                        <p className='text-foreground/50  truncate'>{desc}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default InfoCard