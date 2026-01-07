import { SidebarGroup, SidebarGroupLabel, SidebarMenu, } from "@/components/ui/sidebar"
import { useLocation } from 'react-router';
import type { NavItem as NavItemProp } from "@/dummydata/sidebar";
import NavItem from "./NavItem";

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