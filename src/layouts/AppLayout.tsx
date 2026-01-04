import Navbar from "@/components/header/Header"
import Sidebar from "@components/sidebar/Sidebar"
import PageLayout from "./PageLayout"
import { Outlet } from "react-router-dom"





const AppLayout = () => {


  return (
    <div className='flex h-screen '>
      <Sidebar />
      <div className="flex-1 flex flex-col ">
        <Navbar />
        <div className="flex-1 overflow-auto">
          {/* <Breadcrumbs /> */}
          <PageLayout>
            <Outlet />
          </PageLayout>
        </div>
      </div>
    </div>

  )
}

export default AppLayout
