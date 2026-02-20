import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'
import useModal from '@/hooks/useModal'
import { cn } from '@/lib/utils'

type Props = {
    title?: string
    subheading?: string
    children: React.ReactNode
    defaultOpen?: boolean
    className?: string
}

const CustomModal = ({ title, subheading, children, defaultOpen, className }: Props) => {
    const { isOpen, setClose } = useModal()
    return (
        <Dialog
            open={isOpen || defaultOpen}
            onOpenChange={setClose}

        >
            <DialogContent className={cn(
                'overflow-scroll max-h-[calc(100vh-4rem)] md:h-fit h-screen  my-2 bg-card text-foreground/85   ',
                className
            )}>
                <DialogHeader className=' text-left'>
                    <DialogTitle className='text-lg font-bold'>
                        {title}
                    </DialogTitle>
                    <DialogDescription>{subheading}</DialogDescription>
                    {children}
                </DialogHeader>
            </DialogContent>

        </Dialog>
    )
}

export default CustomModal