import { useState } from 'react'
import DashboardWidgetContainer from './dashboard-widget-container'
import { SelectComponent } from '../SelectComponent'
import { ChartBarMultiple } from '../charts/ChartBarMultiple'

const MultipleBarchartWidget = () => {
    const [time, setTime] = useState<'This Year' | 'Last Year' | 'Till Now'>('This Year')

    return (
        <DashboardWidgetContainer
            title="Leads & Vendors"
            successRate="76%"
            description="Deals successfully closed something is better than nothing"
            actionText="More details"
            summary
            select={<SelectComponent
                onValueChange={(value) => setTime(value as 'This Year' | 'Last Year' | 'Till Now')}
                options={[
                    { label: "This Year", value: "This Year" },
                    { label: "Last Year", value: "Last Year" },
                    { label: "Till Now", value: "Til Now" },
                ]}
                placeholder={time}
            />}
        >
            <ChartBarMultiple />
        </DashboardWidgetContainer>
    )
}

export default MultipleBarchartWidget