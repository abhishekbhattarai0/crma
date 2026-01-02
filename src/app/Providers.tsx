import SidebarProvider from "@/store/SidebarProvider"
import type React from "react"
import { BrowserRouter } from "react-router"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <SidebarProvider>
        {children}
      </SidebarProvider>
    </BrowserRouter>
  )
}

export default Providers
