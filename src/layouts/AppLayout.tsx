import Navbar from "@/components/header/Header"
import Breadcrumbs from "@/components/ui/BreadCrum"
import Sidebar from "@components/sidebar/Sidebar"





const AppLayout = () => {


  return (
    <div className='flex h-screen '>
      <Sidebar />


      <div className="flex-1 flex flex-col ">
        <Navbar />
        <div className="flex justify-center items-center  mx-3 mt-2">
          <div className="w-full">
            <Breadcrumbs />
          </div>
        </div>
      </div>
    </div>

  )
}

export default AppLayout
