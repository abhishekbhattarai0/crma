
// context provider
import { createContext } from 'react'

// interface SidebarContextProps {
//   toggleSidebarCategory: (value?: boolean) => void;
//   isSidebarCategoryVisible: boolean;
//   activeCategory: string;
//   updateCategory: (value: string) => void;
//   activeSubCategory: string;
//   updateActiveSubCategory: (value: string) => void;
// }

interface SidebarContextProps {
 
  activeCategory: string;
  updateCategory: (value: string) => void;
  activeSubCategory: string;
  updateActiveSubCategory: (value: string) => void;

  sidebar: boolean;
  toggleSidebar: () => void
 toggleSidebarCategory: (value?: boolean) => void;
  isSidebarCategoryVisible: boolean;

}

export const SidebarContext = createContext<SidebarContextProps | undefined>(undefined)


// import { createContext } from 'react'

// interface SidebarContextProps {
//   collapsed: boolean;
//   toggleSidebar: () => void
// }

// export const SidebarContext = createContext<SidebarContextProps | undefined>(undefined)
