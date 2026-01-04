import useScreenSize from "@/hooks/useScreenSize";
import { useSidebar } from "@/hooks/useSidebar";
import { Menu } from "lucide-react";
import { Button } from "../ui/Button";
import { Avatar, AvatarImage } from "../ui/Avatar";
import user from '@/assets/user.jpg'

const Navbar = () => {
  const { toggleSidebar, toggleSidebarCategory } = useSidebar();
  const isMobile = useScreenSize()

  const handleSidebar = () => {
    if (isMobile) {
      toggleSidebar()
    } else {
      toggleSidebarCategory()
    }
  }
  return (
    <div className="flex h-12 border-b border-b-gray-200 text-foreground/90 b-secondary items-center justify-between px-3">
      {/* left */}
      <div className="flex gap-4">
        <Button
          onClick={handleSidebar}
          // variant={''}
          size={'icon'}
          className="p-1.5 bg-gray-100 rounded-full "
        >
          <Menu color="black" size={20} />
        </Button>

        <input
          className="border  border-gray-200 rounded-md px-2 text-xs text-gray-600   outline-primary/40 outline-px ring-none w-sm "
          placeholder="Type text...."
        />
      </div>

      {/* right */}
      <div className="">
        {/* <div className="flex">
          <Avatar className="size-8">
            <AvatarImage src={user} alt="user" />
          </Avatar>
          <div className="">Admin</div>
        </div> */}
      </div>

    </div>
  )
}

export default Navbar
