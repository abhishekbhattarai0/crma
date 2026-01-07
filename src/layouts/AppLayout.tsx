import Header from "@/components/header/Header"
import AppSidebar from "@/components/sidebar/app-sidebar"
import PageLayout from "./PageLayout"
import { Outlet } from "react-router-dom"

const AppLayout = () => {

  return (
    <div className='flex h-screen bg-background w-screen'>
      <AppSidebar />
      <div className="flex-1 flex flex-col overflow-x-hidden">
        <Header />
        <div className="flex-1 overflow-auto overflow-x-hidden">
          <PageLayout>
            <Outlet />
          </PageLayout>
        </div>
      </div>
    </div>

  )
}

export default AppLayout