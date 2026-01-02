import { SidebarContext } from "@/store/SidebarContext";
import { useContext } from "react";

const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error(
      'useSidebarContext must be used within a SidebarProvider'
    )
  }

  return context;
}

export { useSidebar }
