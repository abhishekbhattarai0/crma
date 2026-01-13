import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'
import useModal from '@/hooks/useModal'

type Props = {
    title?: string
    subheading?: string
    children: React.ReactNode
    defaultOpen?: boolean
}

const CustomModal = ({ title, subheading, children, defaultOpen }: Props) => {
    const { isOpen, setClose } = useModal()
    return (
        <Dialog
            open={isOpen || defaultOpen}
            onOpenChange={setClose}
            
        >
            <DialogContent className='overflow-scroll max-h-[calc(100vh-4rem)] md:h-fit h-screen  my-2 bg-card text-foreground/85' >
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