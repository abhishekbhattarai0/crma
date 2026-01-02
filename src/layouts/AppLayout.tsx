import useScreenSize from "@/hooks/useScreenSize"
import { useSidebar } from "@/hooks/useSidebar"
import Sidebar from "@components/sidebar/Sidebar"
import { Menu } from "lucide-react"

const AppLayout = () => {

  const { toggleSidebar, toggleSidebarCategory } = useSidebar();
  const isMobile = useScreenSize()

  const handleSidebar = () => {
    if (isMobile) {
      toggleSidebar()
    } else {
      toggleSidebarCategory()
    }
  }
  return (
    <div className='flex h-screen '>
      <Sidebar />


      <div className="flex-1 flex   bg-purple-300">
        <div onClick={() => handleSidebar()}>

          <Menu />
        </div>

      </div>
    </div>

  )
}

export default AppLayout
