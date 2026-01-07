import { BadgeDollarSign, Banknote, BellDot, Box, CircleUser, Dot, Flag, Funnel, HandHelping, LayoutDashboard, ListTodo, type LucideIcon } from 'lucide-react';

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

// export const sidebarData: SidebarData = {
//   user: {
//     name: 'Metrica',
//     email: 'metrica@example.com',
//     avatar: '',
//   },
//   navGroup: [
//     {
//       label: 'Dashboard',
//       items: [
//         {
//           title: 'Analytics',
//           url: '/dashboard/analytics',
//           icon: LayoutDashboard,
//         },
//         {
//           title: 'Crypto',
//           url: '/dashboard/crypto',
//           icon: LayoutDashboard,
//         },
//         // {
//         //   title: "Project",
//         //   url: "/dashboard/project",
//         //   icon: LayoutDashboard,
//         // },
//         {
//           title: 'Project',
//           url: '/dashboard/project',
//           icon: LayoutDashboard,
//         },
//         {
//           title: 'Ecommerce',
//           url: '/dashboard/ecommerce',
//           icon: LayoutDashboard,
//         },
//         {
//           title: 'Helpdesk',
//           url: 'dashboard/helpdesk',
//           icon: LayoutDashboard,
//         },
//         {
//           title: 'Hospital',
//           url: 'dashboard/hospital',
//           icon: LayoutDashboard,
//         },
//       ],
//     },
//     {
//       label: 'Apps',
//       items: [
//         {
//           title: 'Analytics',
//           url: 'apps/analytics',
//           icon: LayoutDashboard,
//           items: [
//             {
//               title: 'Customers',
//               url: 'apps/analytics/customers',
//               icon: Dot,
//             },
//             {
//               title: 'Reports',
//               url: 'apps/analytics/reports',
//               icon: Dot,
//             },
//           ],
//         },
//         {
//           title: 'CRM',
//           // url: "apps/crm/contacts",
//           icon: LayoutDashboard,
//           items: [
//             {
//               title: 'Contacts',
//               url: 'apps/crm/contacts',
//               icon: Dot,
//             },
//             {
//               title: 'Opportunities',
//               url: 'apps/crm/opportunities',
//               icon: Dot,
//             },
//             {
//               title: 'Leads',
//               url: 'apps/crm/leads',
//               icon: Dot,
//             },
//             {
//               title: 'Customers',
//               url: 'apps/crm/customers',
//               icon: Dot,
//             },
//           ],
//         },
//         {
//           title: 'Projects',
//           url: 'apps/projects',
//           icon: LayoutDashboard,
//         },
//         {
//           title: 'Chat',
//           url: 'apps/chat',
//           icon: LayoutDashboard,
//         },
//       ],
//     },
//     // {
//     //   label: "Dashboard",
//     //   items: [
//     //     {
//     //       title: "Analytics",
//     //       url: "/dashboard/analytics",
//     //       icon: LayoutDashboard,

//     //     },
//     //     {
//     //       title: "Crypto",
//     //       url: "/dashboard/crypto",
//     //       icon: LayoutDashboard,
//     //     },
//     //     {
//     //       title: "CRM",
//     //       url: "/dashboard/crm",
//     //       icon: LayoutDashboard,
//     //     },
//     //     {
//     //       title: "Project",
//     //       url: "/dashboard/project",
//     //       icon: LayoutDashboard,
//     //     },
//     //     {
//     //       title: "Ecommerce",
//     //       url: "/dashboard/ecommerce",
//     //       icon: LayoutDashboard,
//     //     },
//     //     {
//     //       title: "Helpdesk",
//     //       url: "dashboard/helpdesk",
//     //       icon: LayoutDashboard,
//     //     },
//     //     {
//     //       title: "Hospital",
//     //       url: "dashboard/hospital",
//     //       icon: LayoutDashboard,
//     //     },
//     //   ]
//     // },
//   ],
// };

// // import type { SidebarItem } from "@/components/sidebar/types";
// import {
//   Home,
//   LayoutDashboard,
//   type LucideIcon,
// } from "lucide-react";

// export type SidebarItem = {
//   id: string;
//   label: string;
//   icon?: LucideIcon
//   path?: string
//   children?: SidebarItem[]
// }

// export const sidebarConfig: SidebarItem[] = [

//   {
//     id: "dashboard",
//     label: "Dashboard",
//     icon: Home,
//     // path: "/dashboard",
//     children: [
//       {
//         id: "dashboard-analytics",
//         label: "Analytics",
//         path: "/dashboard/analytics",
//       },
//       {
//         id: "dashboard-crypto",
//         label: "Crypto",
//         path: "/dashboard/crypto",
//       },
//       {
//         id: "dashboard-project",
//         label: "Project",
//         path: "/dashboard/project",
//       },
//       {
//         id: "dashboard-ecommerce",
//         label: "Ecommerce",
//         path: "/dashboard/ecommerce",
//       },
//       {
//         id: "dashboard-helpdesk",
//         label: "Helpdesk",
//         path: "/dashboard/helpdesk",
//       },
//       {
//         id: "dashboard-hospital",
//         label: "Hospital",
//         path: "/dashboard/hospital",
//       },
//     ],
//   },
//   {
//     id: "Apps",
//     label: "Apps",
//     icon: LayoutDashboard,
//     // path: "/dashboard",
//     children: [
//       {
//         id: "apps-analytics",
//         label: "Analytics",
//         // path: "/apps/analytics",
//         children: [
//           {
//             id: "dashboard-analytics",
//             label: "customers",
//             path: "/apps/analytics/customers",

//           },
//           {
//             id: "dashboard-crypto",
//             label: "Reports",
//             path: "/apps/analytics/reports",
//           },
//         ],

//       },
//       {
//         id: "dashboard-crypto",
//         label: "Crypto",
//         // path: "/dashboard/crypto",
//         children: [
//           {
//             id: "dashboard-analytics",
//             label: "Exchange",
//             path: "/apps/crypto/exchange",

//           },
//           {
//             id: "dashboard-analytics",
//             label: "Wallet",
//             path: "/apps/crypto/wallet",

//           },
//           {
//             id: "dashboard-analytics",
//             label: "Crypto News",
//             path: "/apps/crypto/news",

//           },
//           {
//             id: "dashboard-analytics",
//             label: "ICO List",
//             path: "/apps/crypto/icolist",

//           },
//           {
//             id: "dashboard-analytics",
//             label: "Settings",
//             path: "/apps/crypto/settings",

//           },
//         ],
//       },
//       {
//         id: "dashboard-helpdesk",
//         label: "Helpdesk",
//         path: "/dashboard/helpdesk",
//       },
//       {
//         id: "dashboard-hospital",
//         label: "Hospital",
//         path: "/dashboard/hospital",
//       },
//     ],
//   },
// ];



export const sidebarData: SidebarData = {
  user: {
    name: 'Metrica',
    email: 'metrica@example.com',
    avatar: '',
  },
  navGroup: [
    {
      label: 'FrontDesk',
      items: [
        {
          title: 'Leads',
          url: '/dashboard/analytics',
          icon: Funnel,
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
          title: 'Accounts',
          url: '/dashboard/crypto',
          icon: CircleUser,
          items: [
            { title: 'Companies', url: 'apps/projects', icon: Dot },
            { title: 'Contacts', url: 'apps/chat', icon: Dot },
            { title: 'Branches', url: 'apps/projects', icon: Dot },
            { title: 'Departments', url: 'apps/chat', icon: Dot },
            { title: 'Relationship Map', url: 'apps/projects', icon: Dot },
          ],
        },
        {
          title: 'Sales Management',
          url: '/dashboard/project',
          icon: LayoutDashboard,
          items: [
            { title: 'Sales Pipeline', url: 'apps/projects', icon: Dot },
            { title: 'Opportunities', url: 'apps/chat', icon: Dot },
            { title: 'Quotations', url: 'apps/projects', icon: Dot },
            { title: 'Sales Orders', url: 'apps/chat', icon: Dot },
            { title: 'Invoices', url: 'apps/projects', icon: Dot },
            { title: 'Payments', url: 'apps/chat', icon: Dot },
            { title: 'Targets & Commissions', url: 'apps/projects', icon: Dot },
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















