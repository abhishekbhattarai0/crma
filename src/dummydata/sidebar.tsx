import { BadgeDollarSign, Banknote, BellDot, Box, Building2, CircleUser, Dot, Flag, Funnel, HandHelping, LayoutDashboard, ListTodo, UserRoundCog, type LucideIcon } from 'lucide-react';

interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface NavItem {
  title: string;
  url?: string;
  icon: LucideIcon;
  items?: NavItem[];
  permission?: string[];
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

interface SidebarData {
  user: User;
  navGroup: NavGroup[];
}



export function filterSidebarByPermission(data: SidebarData, userPermissions: string[], isSuperAdmin: boolean): SidebarData {
  const permissionSet = new Set(userPermissions);

  console.log(String(isSuperAdmin))
  if (isSuperAdmin) {
    return sidebarData;
  }
  const filterItems = (items: NavItem[]): NavItem[] => {
    return items
      .map(item => {
        // 1. Check permission for the item itself
        const hasPermission =
          !item.permission ||
          item.permission.length === 0 ||
          item.permission.some(perm => permissionSet.has(perm));

        if (!hasPermission) return null;

        // 2. Recursively filter children
        const filteredChildren = item.items ? filterItems(item.items) : undefined;

        // 3. Logic Fix: Decide whether to keep this item
        // If it has children defined but all were filtered out:
        if (item.items && filteredChildren?.length === 0) {
          // If the parent ITSELF has a direct URL (it's a page), keep it but remove children.
          // If the parent is just a label/group wrapper (no URL or '#'), remove it entirely.
          if (item.url && item.url !== '#') {
            return { ...item, items: [] };
          }
          return null;
        }

        // Return the item with filtered children
        return {
          ...item,
          items: filteredChildren,
        };
      })
      .filter(Boolean) as NavItem[]; // Remove nulls
  };

  return {
    ...data,
    navGroup: data.navGroup.map(group => ({
      ...group,
      items: filterItems(group.items),
    })),
  };
}

export const sidebarData: SidebarData = {
  user: {
    name: 'Metrica',
    email: 'metrica@example.com',
    avatar: '',
  },
  navGroup: [
    {
      label: 'Main',
      items: [
        {
          title: 'FrontDesk',
          url: 'frontdesk',
          icon: Building2,
          permission: ['FRONTDESK_VIEW',],
          items: [
            { title: 'Organization', url: 'frontdesk/organization', icon: Dot, permission: ['FRONTDESK_VIEW', 'LEAD_VIEW'] },
            { title: 'Postal Dispatch', url: 'frontdesk/postal-dispatch', icon: Dot, permission: ['FRONTDESK_VIEW'] },
            { title: 'Postal Recieve', url: 'frontdesk/postal-recieve', icon: Dot, permission: ['FRONTDESK_VIEW'] },
            { title: 'Fiscal Year', url: 'frontdesk/fiscal-year', icon: Dot, permission: ['FRONTDESK_VIEW'] },
            { title: 'Follow-ups', url: 'frontdesk/follow-ups', icon: Dot, permission: ['FRONTDESK_VIEW'] },
          ],
        },
        {
          title: 'Leads',
          url: 'leads',
          icon: Funnel,
          permission: ['LEAD_VIEW'],
          items: [
            { title: 'Leads', url: 'leads/leads', icon: Dot, permission: ['LEAD_VIEW'] },
            { title: 'Lead Sources', url: 'leads/lead-sources', icon: Dot, permission: ['LEAD_VIEW'] },
            { title: 'Lead Assignment', url: 'leads/lead-assignment', icon: Dot, permission: ['LEAD_ASSIGN'] },
            { title: 'Customers', url: 'leads/customers', icon: Dot, permission: ['CUSTOMER_VIEW'] },
            { title: 'Customer Groups', url: 'leads/customer-groups', icon: Dot, permission: ['CUSTOMER_VIEW'] },
            { title: 'Customer Activity', url: 'leads/customers-activity', icon: Dot, permission: ['CUSTOMER_VIEW'] },
          ],
        },
        {
          title: 'Accounts',
          url: 'accounts',
          icon: CircleUser,
          permission: ['ACCOUNT_VIEW'],
          items: [
            { title: 'Companies', url: 'accounts/companies', icon: Dot, permission: ['ACCOUNT_VIEW'] },
            { title: 'Contacts', url: 'accounts/contacts', icon: Dot, permission: ['ACCOUNT_VIEW'] },
            { title: 'Branches', url: 'accounts/branches', icon: Dot, permission: ['ACCOUNT_VIEW'] },
            { title: 'Departments', url: 'accounts/departments', icon: Dot, permission: ['ACCOUNT_VIEW'] },
            { title: 'Relationship Map', url: 'accounts/relationship-map', icon: Dot, permission: ['ACCOUNT_VIEW'] },
          ],
        },
        {
          title: 'Sales Management',
          url: 'sales-management',
          icon: LayoutDashboard,
          permission: ['SALES_VIEW'],
          items: [
            { title: 'Sales Pipeline', url: 'sales-management/sales-pipeline', icon: Dot, permission: ['SALES_VIEW'] },
            { title: 'Opportunities', url: 'sales-management/opportunities', icon: Dot, permission: ['SALES_VIEW'] },
            { title: 'Quotations', url: 'sales-management/quotations', icon: Dot, permission: ['SALES_VIEW'] },
            { title: 'Sales Orders', url: 'sales-management/sales-orders', icon: Dot, permission: ['SALES_VIEW'] },
            { title: 'Invoices', url: 'sales-management/invoices', icon: Dot, permission: ['INVOICE_MANAGE'] },
            { title: 'Payments', url: 'sales-management/payments', icon: Dot, permission: ['PAYMENT_MANAGE'] },
            { title: 'Targets ', url: 'sales-management/targets-comissions', icon: Dot, permission: ['SALES_VIEW'] },
          ],
        },
        {
          title: 'Marketing',
          url: 'marketing',
          icon: BadgeDollarSign,
          permission: ['MARKETING_VIEW'],
          items: [
            { title: 'Campaigns', url: 'marketing/campaigns', icon: Dot, permission: ['CAMPAIGN_MANAGE'] },
            { title: 'Email Marketing', url: 'marketing/email', icon: Dot, permission: ['MARKETING_VIEW'] },
            { title: 'SMS Marketing', url: 'marketing/sms', icon: Dot, permission: ['MARKETING_VIEW'] },
            { title: 'WhatsApp Marketing', url: 'marketing/whatsapp', icon: Dot, permission: ['MARKETING_VIEW'] },
            { title: 'Marketing Automation', url: 'marketing/automation', icon: Dot, permission: ['MARKETING_VIEW'] },
            { title: 'Promotions & Offers', url: 'marketing/promotion-offer', icon: Dot, permission: ['MARKETING_VIEW'] },
          ],
        },
        {
          title: 'Support & Service',
          url: 'support-service',
          icon: HandHelping,
          permission: ['SUPPORT_TICKET_VIEW'],
          items: [
            { title: 'Tickets', url: 'support-service/tickets', icon: Dot, permission: ['SUPPORT_TICKET_VIEW'] },
            { title: 'Ticket Categories', url: 'support-service/ticket-category', icon: Dot, permission: ['SUPPORT_TICKET_VIEW'] },
            { title: 'SLA Management', url: 'support-service/sla', icon: Dot, permission: ['SUPPORT_TICKET_VIEW'] },
            { title: 'Knowledge Base', url: 'support-service/knowledge-base', icon: Dot, permission: ['SUPPORT_TICKET_VIEW'] },
            { title: 'Customer Feedback', url: 'support-service/feedback', icon: Dot, permission: ['CUSTOMER_VIEW'] },
          ],
        },
        {
          title: 'Tasks & Activities',
          url: 'task-activities',
          icon: ListTodo,
          permission: ['TASK_MANAGE'],
        },
        {
          title: 'Products & Services',
          url: 'product-services',
          icon: Box,
          permission: ['PRODUCT_VIEW'],
        },
        {
          title: 'Finance & Accounting',
          url: 'finance-accounting',
          icon: Banknote,
          permission: ['FINANCE_VIEW'],
        },
        {
          title: 'Notifications',
          url: 'notifications',
          icon: BellDot,
          permission: [],
        },
        //will use map
        {
          title: 'Analytics',
          url: 'analytics',
          icon: Flag,
          permission: ['REPORT_VIEW'],
          items: [
            { title: 'Active Customer', url: 'analytics/customers', icon: Dot, permission: ['REPORT_VIEW'] },
          ]
        },
        {
          title: 'User Management',
          url: 'user-management',
          icon: UserRoundCog,
          permission: ['USER_MANAGE'],
          items: [
            { title: 'Users', url: 'user-management/users', icon: Dot, permission: ['USER_MANAGE'] },
            { title: 'Access Control', url: 'user-management/access-control', icon: Dot, permission: ['ROLE_MANAGE'] },
            { title: 'Activity Logs', url: 'user-management/activity-logs', icon: Dot, permission: ['USER_MANAGE'] },
            { title: 'Login History', url: 'user-management/login-history', icon: Dot, permission: ['USER_MANAGE'] },
            { title: 'Password & Security', url: 'user-management/password-security', icon: Dot, permission: ['USER_MANAGE'] },
          ]
        },
        {
          title: 'Settings',
          url: '/settings',
          icon: ListTodo,
          permission: ['SYSTEM_SETTINGS'],
        },
      ],
    },
  ],
};