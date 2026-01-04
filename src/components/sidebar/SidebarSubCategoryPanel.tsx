import { sidebarConfig, type SidebarItem } from "@/dummydata/sidebar";
import { useSidebar } from "@/hooks/useSidebar";
import { cn } from "@/utils/cn";
import { ChevronRight, DotIcon, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";




// Sidebar Right SubCategory Panel
export const SidebarSubCategoryPanel = ({ className }: { className?: string }) => {
    const { activeCategory } = useSidebar()

    return (
        <div className={cn('w-50 h-full flex flex-col border-r border-r-gray-200', className)}>
            {/* header */}
            <div className="h-12  pl-4 flex items-center text-foreground/90 ">
                <h1 className="font-semibold">Metrica</h1>
            </div>

            {/* subcategory items */}
            <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col ml-4">
                    {sidebarConfig
                        .filter((categoryItem) => categoryItem.label === activeCategory)
                        .map((categoryItems, idx) => (
                            <SubCategoryGroup key={idx} items={categoryItems} />
                        ))}
                </div>
            </div>
        </div>
    )
}

// SubCategory Group (Main Level)
export const SubCategoryGroup = ({ className, items, ...props }: { className?: string, items: SidebarItem }) => {
    const [openItemId, setOpenItemId] = useState<string | null>(null);

    return (
        <div {...props} className={cn("flex flex-col gap-1", className)}>
            <div className="text-sm font-mono font-bold mt-6 text-foreground/70">
                {items.label}
            </div>

            <div>
                {items.children?.map((item, idx) => (
                    <SubCategoryItem key={idx} item={item} isOpen={openItemId === item.id} onToggle={(id) => setOpenItemId(openItemId === id ? null : id)} />
                ))}
            </div>
        </div>
    )
}

// Single SubCategory Item
const SubCategoryItem = ({ item, isOpen, onToggle }: {
    item: { id: string; label: string; icon?: LucideIcon; path?: string; children?: SidebarItem[] }
    isOpen: boolean
    onToggle: (id: string) => void
}) => {
    return (
        <div className="text-[13px] font-mono font-medium text-foreground/90">
            <div className="ml-3 mt-4 text-xs font-medium text-gray-700 pr-4">
                {item.children?.length ? (
                    <>
                        <div className="flex justify-between w-full cursor-pointer" onClick={() => onToggle(item.id)}>
                            {item.icon && <item.icon />}
                            <span>{item.label}</span>
                            <ChevronRight size={16} className={cn("transition-all duration-200", isOpen ? "rotate-90" : "")} />
                        </div>
                        {isOpen && item.children.map((subitem) => (
                            <SidebarSubItem key={subitem.label} subitem={subitem} />
                        ))}
                    </>
                ) : (
                    item.path && (
                        <NavLink to={item.path} className={({ isActive }) =>
                            cn("my-4", isActive ? "text-blue-600 font-medium" : "text-gray-700")
                        }>
                            {item.icon && <item.icon />}
                            <div>{item.label}</div>
                        </NavLink>
                    )
                )}
            </div>
        </div>
    )
}

// Single SubItem (Leaf Node)
const SidebarSubItem = ({ subitem }: { subitem: SidebarItem }) => {
    return (
        <>
            {subitem.path && (
                <NavLink to={subitem.path} className={({ isActive }) =>
                    cn("flex items-center text-xs mt-1 p-1", isActive ? "text-blue-600 font-medium" : "text-gray-700")
                }>
                    <DotIcon />
                    <span>{subitem.label}</span>
                </NavLink>
            )}
        </>
    )
}