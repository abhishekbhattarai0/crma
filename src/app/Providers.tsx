import { ThemeProvider } from "@/components/theme-provider"
import { router } from "@/routes/router"
import SidebarProvider from "@/store/SidebarProvider"
import { RouterProvider } from "react-router-dom"

const Providers = () => {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default Providers
