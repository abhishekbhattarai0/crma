import { Sidebar, SidebarContent } from '../ui/sidebar'
import NavMain from './NavMain'
import { sidebarData } from '@/dummydata/sidebar'

const AppSidebar = () => {
  return (
    <Sidebar>
      <div className="text-lg font-semibold text-gray-800 pl-2">
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
