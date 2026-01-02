import { cn } from "@/utils/cn"
import { Avatar, AvatarImage } from "../ui/Avatar"
import logo from '@/assets/logo.png'
import user from '@/assets/user.jpg'
import { sidebarConfig, type SidebarItem } from "@/dummydata/sidebar"
import { ChevronRight, DotIcon, type LucideIcon, } from "lucide-react"
import useScreenSize from "@/hooks/useScreenSize"
import { useSidebar } from "@/hooks/useSidebar"
import { useState } from "react"

const Sidebar = () => {
  const isMobile = useScreenSize()
  const { sidebar, isSidebarCategoryVisible } = useSidebar()
  return (

    <div>
      <div className="flex h-screen">
        {sidebar && (
          <>
            <CategorySidebar className="w-13.5 " />
            {
              (isSidebarCategoryVisible || isMobile) && <SubCategorySidebar className=" bg-secondary" />
            }
          </>
        )
        }
      </div>
    </div>

  )
}

export default Sidebar


export const CategorySidebar = ({ className }: {
  className?: string
}) => {
  return (
    <div className={cn(
      ' bg-sidebar-primary  flex flex-col justify-between py-3 px-2 ',
      className
    )}>
      {/* header */}
      <div>
        <Avatar className="" >
          <AvatarImage src={logo} alt="logo" />
          {/* <AvatarImageFallback text="he" /> */}
        </Avatar>
      </div>

      {/* body */}
      <div className="flex flex-1 mt-22 flex-col gap-8 items-center overflow-y-auto overflow-x-hidden">
        {sidebarConfig.map((item, i) =>
          // <>
          <CategoryItem key={i} label={item.label} icon={item.icon} />

          // </>
        )}
      </div>

      {/* footer */}
      <div>
        <Avatar >
          <AvatarImage src={user} alt="logo" />
        </Avatar>
      </div>
    </div >
  )
}



export const CategoryItem = ({ label, icon: Icon, iconStyle, className, ...props }: {
  label: string
  className?: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconStyle?: string
}) => {
  const { updateCategory, activeCategory } = useSidebar()
  return (
    <div {...props} className={cn(
      " p-2 bg-sidebar-accent   group relative cursor-pointer",
      className
    )}
      onClick={() => updateCategory(label)}
    >

      {Icon && <Icon className={`size-5 ${activeCategory === label ? 'text-sidebar-foreground' : 'text-sidebar-foreground/70'} ${iconStyle}`} />
      }
      <div className={"absolute top-2 left-12 hidden rounded px-1.5 py-0.5 text-xs font-medium  group-hover:block text-sidebar-foreground bg-sidebar-primary whitespace-nowrap "}>
        {label}
      </div>

    </div>
  )
}

export const SubCategorySidebar = ({ className }: {
  className?: string;
}) => {
  const { activeCategory } = useSidebar()


  return (
    <div
      className={cn(
        'w-50 h-full flex flex-col',
        className
      )}
    >
      {/* heading */}
      <div className="h-11 mt-1.5 pl-4 flex items-center text-foreground/90 border-b border-b-gray-300">
        <h1 className="font-semibold ">Metrica</h1>
      </div>

      {/* scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col ml-4">
          {sidebarConfig
            .filter((categoriedItem) => categoriedItem.label === activeCategory)
            .map((items, idx) => (
              <SubCategoryMain key={idx} items={items} />
            ))}
        </div>
      </div>
    </div>
  )
}


export const SubCategoryMain = ({ className, items, ...props }: {
  className?: string
  items: SidebarItem;
}) => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  return (
    <div {...props} className={cn("flex flex-col gap-1", className)}>
      {/* <div>{items.label}</div> */}
      <div className="text-sm font-mono font-bold mt-6 text-foreground/90">
        {items.label}
      </div>

      <div className="">
        {
          items.children?.map((item, idx) => (
            <SubCategoryItem key={idx} item={item} isOpen={openItemId === item.id} onToggle={(id) => setOpenItemId(openItemId === id ? null : id)} />
          ))
        }
      </div>
    </div>
  )

}

const SubCategoryItem = ({ item, isOpen, onToggle }: {
  item: {
    id: string;
    label: string;
    icon?: LucideIcon | undefined;
    path?: string;
    children?: SidebarItem[];
  }
  isOpen: boolean;
  onToggle: (id: string) => void
}
) => {
  return (
    <div
      key={item.label}
      className="text-[13px] font-mono font-medium  text-foreground/90  "
    >
      <div className="ml-3 mt-4 text-xs font-medium text-gray-700  pr-4 ">
        {item.children?.length ? (
          <>
            {/* sidebar items having subitems */}
            <div className="flex justify-between w-full cursor-pointer  " onClick={() => onToggle(item.id)}>
              {item.icon && <item.icon />}
              <span className="">{item.label}</span>
              <ChevronRight size={16} className={cn(
                "transition-all duration-300",
                isOpen ? "rotate-90" : ""
              )} />
            </div>
            <div >
              {/* subitems inside div */}
              <div >
                <div>
                  {isOpen && item.children.map((subitem) => (
                    <SubItem key={subitem.label} subitem={subitem} />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* items which do not have subitems */}
            <div className="cursor-pointer  " >
              {item.path && (
                <NavLink to={item.path} className={({ isActive }) =>
                  cn(
                    "my-4",
                    isActive ? "text-blue-600 font-medium" : "text-gray-700"
                  )
                }>
                  {item.icon && <item.icon />}
                  <div>{item.label}</div>
                </NavLink>
              )}
            </div>
          </>
        )}
      </div>
    </div>

  )
}


import { NavLink } from "react-router"

const SubItem = ({ subitem }: { subitem: SidebarItem }) => {
  return (
    <>
      {subitem.path && <NavLink
        to={subitem.path}
        className={({ isActive }) =>
          cn(
            "flex items-center text-xs mt-1 p-1",
            isActive ? "text-blue-600 font-medium" : "text-gray-700"
          )
        }
      >
        <DotIcon />
        <span>{subitem.label}</span>
      </NavLink>
      }
    </>
  )
}
