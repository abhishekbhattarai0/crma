import Header from "@/components/header/Header"
import AppSidebar from "@/components/sidebar/app-sidebar"
import PageLayout from "./PageLayout"
import { Outlet } from "react-router-dom"






const AppLayout = () => {

  return (
    <div className='flex h-screen bg-white w-screen'>
      <AppSidebar />
      <div className="flex-1">
        <Header />
        <div>
          <PageLayout>
            <Outlet />
          </PageLayout>
        </div>
      </div>
    </div>

  )
}

export default AppLayout



// const AppLayout = () => {


//   return (
//     <div className='flex h-screen bg-white '>
//       <AppSidebar />
//       <div className="flex-1 flex flex-col ">
//         <Header />
//         <div className="flex-1 overflow-auto">
//           {/* <Breadcrumbs /> */}
//           <PageLayout>
//             <Outlet />
//           </PageLayout>
//         </div>
//       </div>
//     </div>

//   )
// }

// export default AppLayout

