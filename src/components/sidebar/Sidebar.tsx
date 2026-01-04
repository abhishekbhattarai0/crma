import useScreenSize from "@/hooks/useScreenSize"
import { useSidebar } from "@/hooks/useSidebar"
import { SidebarCategoryPanel } from "./SidebarCategoryPanel"
import { SidebarSubCategoryPanel } from "./SidebarSubCategoryPanel"

const Sidebar = () => {
  const isMobile = useScreenSize()
  const { sidebar, isSidebarCategoryVisible } = useSidebar()
  return (

    <div>
      <div className="flex h-screen">
        {sidebar && (
          <>
            <SidebarCategoryPanel className="w-13.5 " />
            {
              (isSidebarCategoryVisible || isMobile) 
                && <SidebarSubCategoryPanel className=" bg-secondary" />
            }
          </>
        )
        }
      </div>
    </div>

  )
}

export default Sidebar
