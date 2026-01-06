import { ChevronRight, type LucideIcon } from "lucide-react";
import { Link, type useLocation } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub } from "../ui/sidebar";
import SubItem from "./SubItem";
import { cn } from "@/lib/utils";

const NavItem = ({
    item,
    location
}: {
    item: {
        title: string
        url?: string
        icon?: LucideIcon
        // isActive?: boolean
        items?: {
            title: string
            url?: string
            // isActive?: boolean,
            icon?: LucideIcon
        }[]
    },
    location: ReturnType<typeof useLocation>
}) => {
    const shouldBeOpen = item.items?.some(subItem => location.pathname === subItem.url) || false;

    return (
        <Collapsible
            key={item.title}
            asChild
            defaultOpen={shouldBeOpen}
        >
            <SidebarMenuItem className="pr-2">
                {item.items?.length ? (
                    <>
                        {/* sidebar items having subitems */}
                        <CollapsibleTrigger asChild>
                            <SidebarMenuButton tooltip={item.title} className="ml-2 text-foreground/85 ">
                                {item.icon && <item.icon />}
                                <span className="text-foreground/85 text-sm">{item.title}</span>
                                <ChevronRight className="ml-auto text-foreground/85 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            {/* subitems inside collapsible */}
                            <SidebarMenuSub >
                                {item.items.map((subitem) => (
                                    <SubItem key={subitem.title} subitem={subitem} location={location} parentTitle={item.title} />
                                ))}
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </>
                ) : (
                    <>
                        {/* items which do not have subitems */}
                        <SidebarMenuButton asChild tooltip={item.title} className="cursor-pointer ml-2" isActive={location.pathname === item.url}>
                            <Link to={item.url as string} className={cn(
                                "text-foreground/85",
                                location.pathname === item.url && 'text-foreground/85'
                            )}>
                                {item.icon && <item.icon />}
                                <span className="text-foreground/85 text-sm font-medium">{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </>
                )}
            </SidebarMenuItem>
        </Collapsible>
    );
};

export default NavItem;