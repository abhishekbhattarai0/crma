import useScreenSize from "@/hooks/useScreenSize"
import { useSidebar } from "@/hooks/useSidebar"
import { SidebarCategoryPanel } from "./SidebarCategoryPanel"
import { SidebarSubCategoryPanel } from "./SidebarSubCategoryPanel"
import { useEffect, useRef } from "react";

const Sidebar = () => {
  const isMobile = useScreenSize()
  const { sidebar, isSidebarCategoryVisible, toggleSidebar } = useSidebar()

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isMobile || !sidebar) return;

    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(target)
      ) {
        toggleSidebar();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebar, toggleSidebar, isMobile]);
  return (

    <div ref={sidebarRef} className="relative">
      <div className="flex h-screen">
        {sidebar && (
          <>
            <SidebarCategoryPanel className="w-13.5 " />
            {
              (isSidebarCategoryVisible || isMobile)
              && <div className="sm:flex sm:static z-1000 absolute top-12 bottom-0 left-13.5 ">
                <SidebarSubCategoryPanel className=" bg-secondary" />
              </div>
            }
          </>
        )
        }
      </div>
    </div>

  )
}

export default Sidebar
