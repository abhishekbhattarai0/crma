import { Button } from "../ui/button"
import { Eye, Pencil } from "lucide-react"

const ActionRow = () => {

  return (
    <div
      // className="text-sm text-primary/60 cursor-pointer py-1 flex items-center justify-center hover:bg-primary/20 rounded-full "
      className="flex gap-2"

    >
      <Button
        size={'icon-sm'}
        variant={'outline'}
        className="rounded-full"
      >
        <Eye />
      </Button>

      <Button
        size={'icon-sm'}
        variant={'outline'}
        className="rounded-full"
      >
        <Pencil />
      </Button>
    </div>
  )
}

export default ActionRow
