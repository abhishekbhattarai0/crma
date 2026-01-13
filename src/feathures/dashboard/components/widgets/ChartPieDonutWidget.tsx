import { useState } from 'react'
import DashboardWidgetContainer from './dashboard-widget-container'
import { ChartPieDonut } from '../charts/ChartPieDonut'
import { Calendar } from 'lucide-react'
import { SelectComponent } from '@/components/ui/SelectComponent'

const ChartPieDonutWidget = () => {
  const [time, setTime] = useState<'All' | 'Purchases' | 'Emails'>('All')

  return (
    <DashboardWidgetContainer
      title="Sessions Device"
      successRate="76%"
      description="Deals successfully closed something is better than nothing"
      actionText="More details"
      summary
      select={<SelectComponent
        onValueChange={(value) => setTime(value as 'All' | 'Purchases' | 'Emails')}
        options={[
          { label: "Now", value: "Now" },
          { label: "Purchases", value: "Purchases" },
          { label: "Emails", value: "Emails" },
        ]}
        placeholder={time}
      />}
      className=''
    >
      <div className='flex justify-center  '>
        <ChartPieDonut />
      </div>
      <div className='mb-1'>
        <div className='flex  gap-2 w-full justify-center  items-center  py-2 text-xs font-semibold text-foreground/70 bg-foreground/10 rounded-sm'>
          <Calendar />
          <span className='w-33'> 01 January 2020 to 31 December 2020</span>
        </div>
      </div>
    </DashboardWidgetContainer>
  )
}

export default ChartPieDonutWidget








