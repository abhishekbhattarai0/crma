import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"
import { router } from "@/router/router"
import { AuthProvider } from "@/store/auth/AuthProvider"
import ModalProvider from "@/store/modal/ModalProvider"
import { RouterProvider } from "react-router-dom"

const Providers = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ModalProvider>
          <SidebarProvider>
            <Toaster />
            <RouterProvider router={router} />
          </SidebarProvider>
        </ModalProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default Providers
