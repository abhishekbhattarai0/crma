import type { LucideIcon } from "lucide-react";
import { Link, type useLocation } from "react-router-dom";
import { SidebarMenuSubButton, SidebarMenuSubItem } from "../ui/sidebar";
import { cn } from "@/lib/utils";

const SubItem = ({
    subitem,
    location,
    parentTitle,
    className
}: {
    subitem: {
        title: string
        url?: string
        isActive?: boolean,
        icon?: LucideIcon
    },
    location: ReturnType<typeof useLocation>,
    parentTitle: string,
    className?: string,
    // openItemId: string,
}) => {
    const target = (parentTitle === "Auth Pages" || parentTitle === "Errors") ? "_blank" : undefined;
    const rel = target ? "noopener noreferrer" : undefined;

    const isItemActive = location.pathname === `/${subitem.url}`;
    return (
        <SidebarMenuSubItem key={subitem.title} className={className} >
            <SidebarMenuSubButton asChild
                className={cn(
                    "text-foreground/85 hover:text-sidebar-accent dark:hover:text-slate-300 dark:hover:bg-slate-800 hover:bg-sidebar-accent/10 active:bg-sidebar-accent/20 active:text-sidebar-accent cursor-pointer ",
                    isItemActive ? 'w-full  bg-sidebar-accent/10 dark:bg-gray-800 text-sidebar-accent dark:text-foreground/85' : 'text-foreground/85'
                )}
                // className="cursor-pointer " 
                isActive={location.pathname === subitem.url}

            >
                <Link
                    to={subitem.url as string}
                    target={target}
                    rel={rel}
                >
                    <div className="hover:text-sidebar-accent">
                        {subitem.icon && <subitem.icon />}
                    </div>
                    {subitem.title}
                </Link>
            </SidebarMenuSubButton>
        </SidebarMenuSubItem>
    );
};

export default SubItem;
