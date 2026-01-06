import type { LucideIcon } from "lucide-react";
import { Link, NavLink, type useLocation } from "react-router-dom";
import { SidebarMenuSubButton, SidebarMenuSubItem } from "../ui/sidebar";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

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
    useEffect(() => {
        console.log(subitem.url)
        console.log(location.pathname, 'path')
    }, [location.pathname])

    return (
        <SidebarMenuSubItem key={subitem.title} >
            <SidebarMenuSubButton asChild
                className="cursor-pointer " isActive={location.pathname === subitem.url}
            >
                <Link
                    to={subitem.url as string}
                    target={target}
                    rel={rel}
                    // className="hover:text-foreground/85 "
                    className={cn(
                        "hover:text-foreground/85 ",
                        location.pathname === `/${subitem.url}` ? 'w-full bg-primary/40' : 'text-foreground/85'
                    )}

                >
                    {subitem.icon && <subitem.icon />}
                    <span
                        className="text-foreground/85 "

                    >{subitem.title}
                    </span>
                </Link>
            </SidebarMenuSubButton>
        </SidebarMenuSubItem>
    );
};

export default SubItem;
