import { Avatar, AvatarImage } from './ui/avatar'
import user from '@/assets/user.jpg'
// import { Button } from './ui/button'
import {  LogOut, Settings } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from './ui/dropdown-menu'
import { CgProfile } from 'react-icons/cg'
import { cn } from '@/utils/cn'


const UserProfileCard = ({className}:{className: string}) => {
    return (
        <div
         className={cn(
            '',
            className
         )}
         >
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="flex gap-2  px-2 py-1 items-center cursor-pointer hover:bg-primary/20 rounded-md ">
                        <Avatar className="size-9">
                            <AvatarImage src={user} alt="user" />
                        </Avatar>
                        <div className="flex flex-col text-start">
                            <div className="text-xs text-foreground/70">Admin</div>
                            <div className="text-xs tracking-wide font-semibold text-foreground/80 flex gap-1">
                                <span className='shrink-0'>Maria Gibson</span>
                                {/* <ChevronDown size={16} /> */}
                            </div>

                        </div>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup className='text-gray-700'>
                        <DropdownMenuItem >
                            Profile
                            <DropdownMenuShortcut><CgProfile /></DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Setting
                            <DropdownMenuShortcut><Settings /></DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            Logout
                            <DropdownMenuShortcut><LogOut /></DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default UserProfileCard