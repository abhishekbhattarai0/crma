import { Avatar, AvatarImage } from './ui/avatar'
import user from '@/assets/user.jpg'
// import { Button } from './ui/button'
import { LogOut, Settings } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from './ui/dropdown-menu'
import { CgProfile } from 'react-icons/cg'
import { cn } from '@/utils/cn'
import { useAuth } from '@/hooks/useAuth'
import { useNavigate } from 'react-router-dom'


const UserProfileCard = ({ className }: { className: string }) => {
    const { logout } = useAuth();
    const navigate = useNavigate()
    return (
        <div
            className={cn(
                '',
                className
            )}
        >
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="flex gap-2 hidden md:flex  px-2 py-1 items-center cursor-pointer hover:bg-primary/20 rounded-md ">
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
                    <Avatar className="size-9 md:hidden flex">
                        <AvatarImage src={user} alt="user" />
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup className='text-foreground/80'>
                        <DropdownMenuItem >
                            Profile
                            <DropdownMenuShortcut><CgProfile /></DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Setting
                            <DropdownMenuShortcut><Settings /></DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => {
                            logout();
                            navigate('/auth/login', {
                                replace: true
                            })
                        }}>
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