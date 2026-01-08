import { BadgeDollarSign, Banknote, BellDot, Box, Building2, CircleUser, Dot, Flag, Funnel, HandHelping, LayoutDashboard, ListTodo, type LucideIcon } from 'lucide-react';

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
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

interface SidebarData {
  user: User;
  navGroup: NavGroup[];
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
          title: 'Organization',
          url: '/dashboard/analytics',
          icon: Building2,
          items: [
            { title: 'Leads', url: 'leads/leads', icon: Dot },
            { title: 'Lead Sources', url: 'leads/lead-sources', icon: Dot },
            { title: 'Lead Assignment', url: 'apps/analytics/reports', icon: Dot },
            { title: 'Customers', url: 'apps/crm/contacts', icon: Dot },
            { title: 'Customer Groups', url: 'apps/crm/opportunities', icon: Dot },
            { title: 'Customer Activity', url: 'apps/crm/leads', icon: Dot },
            { title: 'Follow-ups', url: 'apps/crm/customers', icon: Dot },
          ],
        },
        {
          title: 'Leads',
          url: '/dashboard/analytics',
          icon: Funnel,
          items: [
            { title: 'Leads', url: 'leads/leads', icon: Dot },
            { title: 'Lead Sources', url: 'leads/lead-sources', icon: Dot },
            { title: 'Lead Assignment', url: 'leads/lead-assignment', icon: Dot },
            { title: 'Customers', url: 'leads/customers', icon: Dot },
            { title: 'Customer Groups', url: 'leads/customer-groups', icon: Dot },
            { title: 'Customer Activity', url: 'leads/customers-activity', icon: Dot },
            { title: 'Follow-ups', url: 'leads/follow-ups', icon: Dot },
          ],
        },
        {
          title: 'Accounts',
          url: '/dashboard/crypto',
          icon: CircleUser,
          items: [
            { title: 'Companies', url: 'accounts/companies', icon: Dot },
            { title: 'Contacts', url: 'accounts/contacts', icon: Dot },
            { title: 'Branches', url: 'accounts/branches', icon: Dot },
            { title: 'Departments', url: 'accounts/departments', icon: Dot },
            { title: 'Relationship Map', url: 'accounts/relationship-map', icon: Dot },
          ],
        },
        {
          title: 'Sales Management',
          url: '/dashboard/project',
          icon: LayoutDashboard,
          items: [
            { title: 'Sales Pipeline', url: 'sales-management/sales-pipeline', icon: Dot },
            { title: 'Opportunities', url: 'sales-management/opportunities', icon: Dot },
            { title: 'Quotations', url: 'sales-management/quotations', icon: Dot },
            { title: 'Sales Orders', url: 'sales-management/sales-orders', icon: Dot },
            { title: 'Invoices', url: 'sales-management/invoices', icon: Dot },
            { title: 'Payments', url: 'sales-management/payments', icon: Dot },
            { title: 'Targets ', url: 'sales-management/targets-comissions', icon: Dot },
          ],
        },
        {
          title: 'Marketing',
          url: '/dashboard/ecommerce',
          icon: BadgeDollarSign,
          items: [
            { title: 'Campaigns', url: 'apps/projects', icon: Dot },
            { title: 'Email Marketing', url: 'apps/chat', icon: Dot },
            { title: 'SMS Marketing', url: 'apps/projects', icon: Dot },
            { title: 'WhatsApp Marketing', url: 'apps/chat', icon: Dot },
            { title: 'Marketing Automation', url: 'apps/projects', icon: Dot },
            { title: 'Promotions & Offers', url: 'apps/chat', icon: Dot },
          ],
        },
        {
          title: 'Support & Service',
          url: 'dashboard/helpdesk',
          icon: HandHelping,
          items: [
            { title: 'Tickets', url: 'apps/projects', icon: Dot },
            { title: 'Ticket Categories', url: 'apps/chat', icon: Dot },
            { title: 'SLA Management', url: 'apps/projects', icon: Dot },
            { title: 'Knowledge Base', url: 'apps/chat', icon: Dot },
            { title: 'Customer Feedback', url: 'apps/projects', icon: Dot },
          ],
        },
        {
          title: 'Tasks & Activities',
          url: 'dashboard/hospital',
          icon: ListTodo,
        },
        {
          title: 'Products & Services',
          url: '/dashboard/ecommerce',
          icon: Box,
        },
        {
          title: 'Finance & Accounting',
          url: 'dashboard/hospital',
          icon: Banknote,
        },
        {
          title: 'Notifications',
          url: 'apps/chat',
          icon: BellDot,
        },
        {
          title: 'Reports & Analytics',
          url: '/dashboard/analytics',
          icon: Flag,
        },
      ],
    },
  ],
};















