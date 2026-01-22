import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"
import { router } from "@/router/router"
import { store } from "@/store"
import ModalProvider from "@/context/modal/ModalProvider"
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"

const AppProvider = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ModalProvider>
          <SidebarProvider>
            <Toaster />
            <RouterProvider router={router} />
          </SidebarProvider>
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default AppProvider 
