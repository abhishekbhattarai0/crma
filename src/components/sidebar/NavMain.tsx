
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { ChevronRight, type LucideIcon } from "lucide-react"
import { Link, useLocation } from 'react-router';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import type { NavItem as NavItemProp } from "@/dummydata/sidebar";

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
                    className="text-foreground/85"
                >
                    {subitem.icon && <subitem.icon />}
                    <span className="text-foreground">{subitem.title}</span>
                </Link>
            </SidebarMenuSubButton>
        </SidebarMenuSubItem>
    );
};

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
                                <span className="text-foreground text-sm">{item.title}</span>
                                <ChevronRight className="ml-auto text-foreground transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
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
                            <Link to={item.url as string} className="text-foreground/85">
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

const NavMain = ({
    label,
    items
}: {
    label: string
    items: NavItemProp[]
}) => {

    const location = useLocation()



    return (
        <SidebarGroup>
            <SidebarGroupLabel className="text-xs tracking-wide text-foreground/70 font-semibold ">{label}</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <NavItem key={item.title} item={item} location={location} />
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}

export default NavMain