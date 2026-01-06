import type { LucideIcon } from "lucide-react";
import { Link, type useLocation } from "react-router-dom";
import { SidebarMenuSubButton, SidebarMenuSubItem } from "../ui/sidebar";

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

    return (
        <SidebarMenuSubItem key={subitem.title} >
            <SidebarMenuSubButton asChild className="cursor-pointer" isActive={location.pathname === subitem.url}>
                <Link
                    to={subitem.url as string}
                    target={target}
                    rel={rel}
                    className="hover:text-foreground/85"

                >
                    {subitem.icon && <subitem.icon />}
                    <span className="text-foreground/85 ">{subitem.title}</span>
                </Link>
            </SidebarMenuSubButton>
        </SidebarMenuSubItem>
    );
};

export default SubItem;
