import type { LucideIcon } from "lucide-react";
import { Link, type useLocation } from "react-router-dom";
import { SidebarMenuSubButton, SidebarMenuSubItem } from "../ui/sidebar";
import { cn } from "@/lib/utils";

const SubItem = ({
    subitem,
    location,
    parentTitle
}: {
    subitem: {
        title: string
        url?: string
        isActive?: boolean,
        icon?: LucideIcon
    },
    location: ReturnType<typeof useLocation>,
    parentTitle: string
}) => {
    const target = (parentTitle === "Auth Pages" || parentTitle === "Errors") ? "_blank" : undefined;
    const rel = target ? "noopener noreferrer" : undefined;

    const isItemActive = location.pathname === `/${subitem.url}`;
    return (
        <SidebarMenuSubItem key={subitem.title} >
            <SidebarMenuSubButton asChild
                className={cn(
                    "text-foreground/85 hover:text-white cursor-pointer ",
                    isItemActive ? 'w-full  bg-sidebar-accent text-white' : 'text-foreground/85'
                )}
                // className="cursor-pointer " 
                isActive={location.pathname === subitem.url}

            >
                <Link
                    to={subitem.url as string}
                    target={target}
                    rel={rel}
                >
                    <div className="hover:text-white">
                        {subitem.icon && <subitem.icon />}
                    </div>
                    {subitem.title}
                </Link>
            </SidebarMenuSubButton>
        </SidebarMenuSubItem>
    );
};

export default SubItem;
