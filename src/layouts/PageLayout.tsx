import Breadcrumbs from '@/components/ui/breadcrumbs'
import React from 'react'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col mx-4'>
            <Breadcrumbs className='my-4'/>

            {children}
        </div>
    )
}

export default PageLayout