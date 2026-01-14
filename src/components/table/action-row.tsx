import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { Eye, Pencil } from "lucide-react"

const ActionRow = () => {

  const navigate = useNavigate()
  return (
    <div
      // className="text-sm text-primary/60 cursor-pointer py-1 flex items-center justify-center hover:bg-primary/20 rounded-full "
      className="flex gap-2"

    >
      <Button
        size={'icon-sm'}
        variant={'outline'}
        className="rounded-full"
        onClick={() => {
          console.log('clicked eye')
          navigate('/frontdesk/postal-view')
        }}
      >
        <Eye />
      </Button>

      <Button
        size={'icon-sm'}
        variant={'outline'}
        className="rounded-full"
        onClick={() => {
          console.log('pencil eye')
        }}
      >
        <Pencil />
      </Button>
    </div>
  )
}

export default ActionRow
