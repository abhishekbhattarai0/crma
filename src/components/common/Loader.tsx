import { Loader2Icon } from 'lucide-react'

const Loader = () => {
  return (
    <div className='text-foreground text-2xl h-screen w-screen flex justify-center items-center spin-in'>
      <Loader2Icon className='animate-spin' />
    </div>
  )
}

export default Loader