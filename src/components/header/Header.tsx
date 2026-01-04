import useScreenSize from "@/hooks/useScreenSize";
import { useSidebar } from "@/hooks/useSidebar";
import { BellIcon, Menu, MessageSquareTextIcon, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/Avatar";
import user from '@/assets/user.jpg'
import UserProfileCard from "../user-profile-card";

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
    <div className="flex h-13 border-b border-b-gray-200 text-foreground/90 b-secondary items-center justify-between px-3">
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

        <div className="relative w-60 hidden mx-2 md:mx-auto sm:flex">
          <input
            className="border  border-gray-200 rounded-md  pl-6 text-xs text-gray-600   outline-primary/40 outline-px ring-none  w-full "
            placeholder="Type text...."
          />
          <div className="absolute left-2 top-3  ">
            <Search size={12} color="gray" strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex items-center gap-3">

        <div className="flex items-center gap-4">
          <Avatar className="size-7">
            <AvatarImage src={user} alt="user" />
          </Avatar>

          <div className="relative">
            <div className="absolute w-2 h-2 rounded-full bg-red-600 top-1.5 right-1.5   "></div>
            <Button
              size={'icon'}
              className="p-1 bg-gray-100 rounded-full border  size-8  cursor-pointer"
            >
              <MessageSquareTextIcon className="text-gray-700" size={28} />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute w-2 h-2 rounded-full bg-red-600 top-1.5 right-1.5   "></div>
            <Button
              size={'icon'}
              className="p-1 bg-gray-100 rounded-full border  size-8  cursor-pointer"
            >
              <BellIcon className="text-gray-700" size={28} />
            </Button>
          </div>
        </div>

        <UserProfileCard />
      </div>

    </div>
  )
}

export default Navbar
