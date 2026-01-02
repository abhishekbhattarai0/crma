import { sidebarConfig } from "@/dummydata/sidebar"
import { Avatar, AvatarImage } from "../ui/Avatar"
// import { SidebarCategoryItem } from "./Sidebar"
import user from '@/assets/user.jpg'
import logo from '@/assets/logo.png'
import { cn } from "@/utils/cn"
import { useSidebar } from "@/hooks/useSidebar"

// Sidebar Left Category Panel
export const SidebarCategoryPanel = ({ className }: { className?: string }) => {
    return (
        <div className={cn(
            'bg-sidebar-primary flex flex-col justify-between py-3 px-2',
            className
        )}>
            {/* header */}
            <div>
                <Avatar>
                    <AvatarImage src={logo} alt="logo" />
                </Avatar>
            </div>

            {/* category items */}
            <div className="flex flex-1 mt-22 flex-col gap-8 items-center overflow-y-auto overflow-x-hidden">
                {sidebarConfig.map((item, i) =>
                    <SidebarCategoryItem key={i} label={item.label} icon={item.icon} />
                )}
            </div>

            {/* footer */}
            <div>
                <Avatar>
                    <AvatarImage src={user} alt="user" />
                </Avatar>
            </div>
        </div>
    )
}

// Single Category Item
export const SidebarCategoryItem = ({ label, icon: Icon, iconStyle, className, ...props }: {
    label: string
    className?: string
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    iconStyle?: string
}) => {
    const { updateCategory, activeCategory } = useSidebar()
    return (
        <div
            {...props}
            className={cn(
                "p-2 bg-sidebar-accent group relative cursor-pointer",
                className
            )}
            onClick={() => updateCategory(label)}
        >
            {Icon && <Icon className={`size-5 ${activeCategory === label ? 'text-sidebar-foreground' : 'text-sidebar-foreground/70'} ${iconStyle}`} />}
            <div className="absolute top-2 left-12 hidden rounded px-1.5 py-0.5 text-xs font-medium group-hover:block text-sidebar-foreground bg-sidebar-primary whitespace-nowrap">
                {label}
            </div>
        </div>
    )
}
