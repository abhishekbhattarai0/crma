import { Button } from '@/components/ui/button'
import { RefreshCw } from 'lucide-react'
import { useState } from 'react'
import Organization from './Organization'
import OrganizationBranch from './OrganizationBranch'

const Organization1 = () => {
    const [tab, setTab] = useState('organization')
  return (
    <div className=" flex flex-col gap-2">
      <div className="flex gap-2 ">
        <Button
          variant={tab === 'organization' ? "default" : "outline"}
        //   onClick={handleLoginHistory}
        onClick={()=>setTab('organization')}
        > Organization </Button>
        <Button
          variant={tab === 'branch' ? "default" : "outline"}
        //   onClick={handleActiveSession}
        onClick={()=>setTab('branch')}
        > Branch </Button>
        <Button
        //   onClick={handleRefresh}
        // onClick={()=>setTab('organization')}
          variant={'outline'}
          size={'icon'}
        >
          <RefreshCw size={16} />
        </Button>
      </div>
      <div>
        {tab === 'organization' && (
            <Organization />
        )}
        {tab === 'branch' && (
            <OrganizationBranch />
        )}

      </div>
    </div >
  )
}

export default Organization1