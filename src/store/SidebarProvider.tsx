import { useEffect, useState } from "react"
import { SidebarContext } from './SidebarContext'
import useScreenSize from "@/hooks/useScreenSize"
const SidebarProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const isMobile = useScreenSize()
  const [isSidebarCategoryVisible, setIsSidebarCategoryVisible] = useState(true)
  const [activeCategory, setActiveCategory] = useState('Dashboard')
  const [activeSubCategory, setActiveSubCategory] = useState('second')
  const [sidebar, setSidebar] = useState(!isMobile);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSidebar(!isMobile)
  }, [isMobile])
  const toggleSidebar = () => {
    setSidebar(prev => !prev)
  }
  // const toggleSidebarCategory = (value?:boolean) => {
  //     setIsSidebarCategoryVisible(prev => !prev)
  // }

  const toggleSidebarCategory = (value?: boolean) => {
    if (typeof value === "boolean") {
      setIsSidebarCategoryVisible(value)
      return
    }

    setIsSidebarCategoryVisible(prev => !prev)
  }

  const updateCategory = (value: string) => {
    setActiveCategory(value)
  }

  const updateActiveSubCategory = (value: string) => {
    setActiveSubCategory(value)
  }


  return (
    <SidebarContext.Provider value={{
      isSidebarCategoryVisible,
      toggleSidebarCategory,
      activeCategory,
      updateCategory,
      activeSubCategory,
      updateActiveSubCategory,

      sidebar,
      toggleSidebar
    }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
