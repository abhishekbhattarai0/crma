
// import type { SidebarItem } from "@/components/sidebar/types";
import {
  Home,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

export type SidebarItem = {
  id: string;
  label: string;
  icon?: LucideIcon
  path?: string
  children?: SidebarItem[]
}

export const sidebarConfig: SidebarItem[] = [

  {
    id: "dashboard",
    label: "Dashboard",
    icon: Home,
    // path: "/dashboard",
    children: [
      {
        id: "dashboard-analytics",
        label: "Analytics",
        path: "/dashboard/analytics",
      },
      {
        id: "dashboard-crypto",
        label: "Crypto",
        path: "/dashboard/crypto",
      },
      {
        id: "dashboard-project",
        label: "Project",
        path: "/dashboard/project",
      },
      {
        id: "dashboard-ecommerce",
        label: "Ecommerce",
        path: "/dashboard/ecommerce",
      },
      {
        id: "dashboard-helpdesk",
        label: "Helpdesk",
        path: "/dashboard/helpdesk",
      },
      {
        id: "dashboard-hospital",
        label: "Hospital",
        path: "/dashboard/hospital",
      },
    ],
  },
  {
    id: "Apps",
    label: "Apps",
    icon: LayoutDashboard,
    // path: "/dashboard",
    children: [
      {
        id: "apps-analytics",
        label: "Analytics",
        // path: "/apps/analytics",
        children: [
          {
            id: "dashboard-analytics",
            label: "customers",
            path: "/apps/analytics/customers",

          },
          {
            id: "dashboard-crypto",
            label: "Reports",
            path: "/apps/analytics/reports",
          },
        ],

      },
      {
        id: "dashboard-crypto",
        label: "Crypto",
        // path: "/dashboard/crypto",
        children: [
          {
            id: "dashboard-analytics",
            label: "Exchange",
            path: "/apps/crypto/exchange",

          },
          {
            id: "dashboard-analytics",
            label: "Wallet",
            path: "/apps/crypto/wallet",

          },
          {
            id: "dashboard-analytics",
            label: "Crypto News",
            path: "/apps/crypto/news",

          },
          {
            id: "dashboard-analytics",
            label: "ICO List",
            path: "/apps/crypto/icolist",

          },
          {
            id: "dashboard-analytics",
            label: "Settings",
            path: "/apps/crypto/settings",

          },
        ],
      },
      {
        id: "dashboard-helpdesk",
        label: "Helpdesk",
        path: "/dashboard/helpdesk",
      },
      {
        id: "dashboard-hospital",
        label: "Hospital",
        path: "/dashboard/hospital",
      },
    ],
  },
];
