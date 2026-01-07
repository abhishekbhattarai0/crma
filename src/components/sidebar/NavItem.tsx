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
        items?: {
            title: string
            url?: string
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
                        <CollapsibleTrigger asChild className="hover:text-white text-foreground/85 cursor-pointer ">
                            <SidebarMenuButton tooltip={item.title} className="ml-2 text-foreground/85 flex justify-between ">
                                <div className="flex justify-baseline items-center w-full group">
                                    <div className="flex items-center  gap-2 ">
                                        {item.icon && <item.icon size={16} />}
                                        <p className="pt-px"> {item.title}</p>
                                    </div>
                                    {/* <div className="hover:text-white "> */}
                                    <ChevronRight className="ml-auto text-foreground/85 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 group-hover:text-white " />
                                    {/* </div> */}
                                </div>
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