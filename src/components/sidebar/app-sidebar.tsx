import { Sidebar, SidebarContent } from '../ui/sidebar'
import NavMain from './NavMain'
import { sidebarData } from '@/dummydata/sidebar'

const AppSidebar = () => {
  return (
    <Sidebar >
      <div className=" font-semibold text-foreground/90 pl-2 border-b h-13 flex items-center text-xl">
        Metrica
      </div>

      <SidebarContent>
        {sidebarData?.navGroup.map((group) =>
          <NavMain key={group.label} label={group.label} items={group.items} />
        )}
      </SidebarContent>

    </Sidebar>
  )
}

export default AppSidebar
