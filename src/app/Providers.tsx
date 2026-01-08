import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { router } from "@/router/router"
import { AuthProvider } from "@/store/auth/AuthProvider"
import { RouterProvider } from "react-router-dom"

const Providers = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <SidebarProvider>
          <RouterProvider router={router} />
        </SidebarProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default Providers
