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
          title: 'FrontDesk',
          url: 'frontdesk',
          icon: Building2,
          items: [
            { title: 'Organization', url: 'frontdesk/organization', icon: Dot },
            { title: 'Postal Dispatch', url: 'frontdesk/postal-dispatch', icon: Dot },
            { title: 'Postal Recieve', url: 'frontdesk/postal-recieve', icon: Dot },
            { title: 'Fiscal Year', url: 'frontdesk/fiscal-year', icon: Dot },
            { title: 'Follow-ups', url: 'frontdesk/follow-ups', icon: Dot },
          ],
        },
        {
          title: 'Leads',
          url: 'leads',
          icon: Funnel,
          items: [
            { title: 'Leads', url: 'leads/leads', icon: Dot },
            { title: 'Lead Sources', url: 'leads/lead-sources', icon: Dot },
            { title: 'Lead Assignment', url: 'leads/lead-assignment', icon: Dot },
            { title: 'Customers', url: 'leads/customers', icon: Dot },
            { title: 'Customer Groups', url: 'leads/customer-groups', icon: Dot },
            { title: 'Customer Activity', url: 'leads/customers-activity', icon: Dot },
          ],
        },
        {
          title: 'Accounts',
          url: 'accounts',
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
          url: 'sales-management',
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
          url: 'marketing',
          icon: BadgeDollarSign,
          items: [
            { title: 'Campaigns', url: 'marketing/campaigns', icon: Dot },
            { title: 'Email Marketing', url: 'marketing/email', icon: Dot },
            { title: 'SMS Marketing', url: 'marketing/sms', icon: Dot },
            { title: 'WhatsApp Marketing', url: 'marketing/whatsapp', icon: Dot },
            { title: 'Marketing Automation', url: 'marketing/automation', icon: Dot },
            { title: 'Promotions & Offers', url: 'marketing/promotion-offer', icon: Dot },
          ],
        },
        {
          title: 'Support & Service',
          url: 'support-service',
          icon: HandHelping,
          items: [
            { title: 'Tickets', url: 'support-service/tickets', icon: Dot },
            { title: 'Ticket Categories', url: 'support-service/ticket-category', icon: Dot },
            { title: 'SLA Management', url: 'support-service/sla', icon: Dot },
            { title: 'Knowledge Base', url: 'support-service/knowledge-base', icon: Dot },
            { title: 'Customer Feedback', url: 'support-service/feedback', icon: Dot },
          ],
        },
        {
          title: 'Tasks & Activities',
          url: 'task-activities',
          icon: ListTodo,
        },
        {
          title: 'Products & Services',
          url: 'product-services',
          icon: Box,
        },
        {
          title: 'Finance & Accounting',
          url: 'finance-accounting',
          icon: Banknote,
        },
        {
          title: 'Notifications',
          url: 'notifications',
          icon: BellDot,
        },
        //will use map
        {
          title: 'Analytics',
          url: 'analytics',
          icon: Flag,
          items: [
            { title: 'Active Customer', url: 'analytics/customers', icon: Dot },
          ]
        },
        {
          title: 'User Management',
          url: 'user-management',
          icon: UserRoundCog,
          items: [
            { title: 'Users', url: 'user-management/users', icon: Dot },
            { title: 'Access Control', url: 'user-management/access-control', icon: Dot },
            { title: 'Activity Logs', url: 'user-management/activity-logs', icon: Dot },
            { title: 'Login History', url: 'user-management/login-history', icon: Dot },
            { title: 'Password & Security', url: 'user-management/password-security', icon: Dot },


          ]
        },
        {
          title: 'Settings',
          url: '/settings',
          icon: ListTodo,
        },
      ],
    },
  ],
};
