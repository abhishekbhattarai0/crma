import type { RootState } from '@/store';
import { Sidebar, SidebarContent } from '../ui/sidebar'
import NavMain from './NavMain'
import { filterSidebarByPermission, sidebarData } from '@/dummydata/sidebar'
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';

// const userPermission: string[] = ["USER_MANAGE", "ROLE_MANAGE", "SYSTEM_SETTINGS", "CRM_VIEW", "CRM_EDIT", "CRM_DELETE", "LEAD_VIEW", "LEAD_ASSIGN", "LEAD_EDIT", "LEAD_DELETE", "CUSTOMER_VIEW", "CUSTOMER_EDIT", "SUPPORT_TICKET_VIEW", "SUPPORT_TICKET_REPLY", "SUPPORT_TICKET_CLOSE", "ACCOUNT_VIEW", "ACCOUNT_EDIT", "INVOICE_MANAGE", "PAYMENT_MANAGE", "MARKETING_VIEW", "MARKETING_EDIT", "CAMPAIGN_MANAGE", "REPORT_VIEW", "REPORT_EXPORT"]

// const allPermissions = [
//   "FRONTDESK_VIEW",
//   "LEAD_VIEW",
//   "LEAD_ASSIGN",
//   "CUSTOMER_VIEW",
//   "ACCOUNT_VIEW",
//   "SALES_VIEW",
//   "INVOICE_MANAGE",
//   "PAYMENT_MANAGE",
//   "MARKETING_VIEW",
//   "CAMPAIGN_MANAGE",
//   "SUPPORT_TICKET_VIEW",
//   "TASK_MANAGE",
//   "PRODUCT_VIEW",
//   "FINANCE_VIEW",
//   "REPORT_VIEW",
//   "USER_MANAGE",
//   "ROLE_MANAGE",
//   "SYSTEM_SETTINGS"
// ];

const AppSidebar = () => {
  const rolePermission = useSelector(
    (state: RootState) => state.auth.rolePermission
  )


  return (
    <Sidebar>
      <div className=" font-semibold text-foreground/90 pl-2 border-b h-13 flex items-center text-xl">
        Metrica
      </div>

      <SidebarContent>
        {filterSidebarByPermission(sidebarData,
          rolePermission?.permission ?? [],
        )?.navGroup.map((group) =>
          <NavMain key={group.label} label={group.label} items={group.items} />
        )}
      </SidebarContent>

    </Sidebar>
  )
}

export default AppSidebar
