import { BellIcon, MenuIcon, MessageSquareTextIcon, Search } from "lucide-react";
import { Button } from "../ui/button";
import UserProfileCard from "../user-profile-card";
import { ModeToggle } from "../mode-toggle";
import { Avatar, AvatarImage } from "../ui/avatar";
import user from '@/assets/user.jpg'
import { useSidebar } from "../ui/sidebar";

const Navbar = () => {
  const { toggleSidebar } = useSidebar();

  const handleSidebar = () => {
    toggleSidebar()
  }
  return (
    <div className="flex h-13 bg-secondary border-b  text-foreground/90 b-secondary items-center justify-between px-3">
      {/* left */}
      <div className="flex gap-4">
        <Button
          variant={'outline'}
          size={'icon'}
          onClick={handleSidebar}

          className="p-1  rounded-full border    cursor-pointer "
        >
          <MenuIcon className="text-foreground/80" size={28} />
        </Button>

        <div className="relative w-60 hidden mx-2 md:mx-auto sm:flex">
          <input
            className="border   rounded-sm  pl-6 text-xs text-foreground/90   outline-primary/40 outline-px ring-none  w-full  bg-background/80"
            placeholder="Type text...."
          />
          <div className="absolute left-2 top-3  ">
            <Search size={12} color="gray" strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex items-center gap-3">

        <div className="flex items-center gap-4 ">

          <ModeToggle />

          <div className="relative">
            <div className="absolute w-2 h-2 rounded-full bg-red-600 top-1.5 right-1.5   "></div>
            <Button
              variant={'outline'}
              size={'icon'}
              className="p-1  rounded-full border    cursor-pointer "
            >
              <MessageSquareTextIcon className="text-foreground/80" size={28} />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute w-2 h-2 rounded-full bg-red-600 top-1.5 right-1.5   "></div>
            <Button
              variant={'outline'}
              size={'icon'}
              className="p-1  rounded-full border    cursor-pointer "
            >
              <BellIcon className="text-foreground/80" size={28} />
            </Button>
          </div>

          {/* <div className="relative">
            <div className="absolute w-2 h-2 rounded-full bg-red-600 top-1.5 right-1.5   "></div>
            <Button
              size={'icon'}
              className="p-1 bg-gray-100 rounded-full border  size-8  cursor-pointer"
            >
              <BellIcon className="text-gray-700" size={28} />
            </Button>
          </div> */}
        </div>

        {/* profile card */}
        <div>
          <UserProfileCard className="hidden md:flex" />
          <Avatar className="size-9 md:hidden flex">
            <AvatarImage src={user} alt="user" />
          </Avatar>
        </div>
      </div>

    </div>
  )
}

export default Navbar
