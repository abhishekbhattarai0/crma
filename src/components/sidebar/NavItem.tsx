import { ChevronRight, type LucideIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
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
        items?: {
            title: string
            url?: string
            icon?: LucideIcon
        }[]
    },
    location: ReturnType<typeof useLocation>
}) => {

    const path = location.pathname.split('/')
    const activeItem = path[path.length - 2]

    return (
        <Collapsible
            key={item.title}
            asChild
        >
            <SidebarMenuItem className="pr-2">
                {item.items?.length ? (
                    <>
                        {/* sidebar items having subitems */}
                        <CollapsibleTrigger
                            asChild
                            className=" text-foreground/85 cursor-pointer "
                            onClick={() => { console.log(activeItem, item.title.toLocaleLowerCase()) }}
                        >
                            <SidebarMenuButton tooltip={item.title} className={cn(
                                " text-foreground/85 flex justify-between ",
                                activeItem === item.title.toLocaleLowerCase() && 'bg-sidebar-accent text-white'
                            )}>
                                <div className="flex justify-baseline items-center w-full group/item ">
                                    <div className="flex items-center  gap-2 ">
                                        {item.icon && <item.icon size={16} />}
                                        <p className="pt-px"> {item.title}</p>
                                    </div>
                                    <ChevronRight className={cn(
                                        "group-hover/item:text-white ml-auto text-foreground/85  group-data-[state=open]/collapsible:rotate-90  ",
                                        activeItem === item.title.toLowerCase() && 'text-white'
                                    )} />
                                </div>
                            </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            {/* subitems inside collapsible */}
                            <SidebarMenuSub >
                                {item.items.map((subitem) => (
                                    <SubItem className="pt-0.5" key={subitem.title} subitem={subitem} location={location} parentTitle={item.title} />
                                ))}
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </>
                ) : (
                    <>
                        {/* items which do not have subitems */}
                        <SidebarMenuButton asChild
                            tooltip={item.title}
                            isActive={location.pathname === item.url}
                            className={cn(
                                "hover:text-white",
                            )}
                        >
                            <Link to={item.url as string}
                                className={cn(
                                    "text-foreground/85",
                                    location.pathname === item.url && 'text-foreground/85'
                                )}
                            >
                                {item.icon && <item.icon />}
                                {item.title}
                            </Link>
                        </SidebarMenuButton>
                    </>
                )}
            </SidebarMenuItem>
        </Collapsible>
    );
};

export default NavItem;