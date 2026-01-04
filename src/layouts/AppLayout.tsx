import Navbar from "@/components/header/Header"
import Sidebar from "@components/sidebar/Sidebar"





const AppLayout = () => {


  return (
    <div className='flex h-screen '>
      <Sidebar />


      <div className="flex-1 flex flex-col  ">
        <Navbar />
        <div className="flex justify-center items-center  mx-2">
          hello
        </div>
      </div>
    </div>

  )
}

export default AppLayout
