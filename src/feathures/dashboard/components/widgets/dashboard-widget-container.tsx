import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'

type Props = {
    title?: string;
    // period?: string;
    select?: React.ReactNode;
    successRate?: string;
    description?: string;
    actionText?: string;
    children?: React.ReactNode;
    summary?: boolean
}

const DashboardWidgetContainer = ({
    title,
    // period = "This Month",
    select,
    // successRate,
    // description,
    // actionText,
    children, // chart goes here,
    // summary = false,
}: Props) => {

    return (
        <Card className='px-0'>
            <CardHeader className='border-b flex justify-between items-center px-4  '>
                <CardTitle className='text-foreground/75 font-semibold text-sm '>{title}</CardTitle>
                <CardAction>
                    {select && select}
                </CardAction>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}

export default DashboardWidgetContainer





