import type { LucideIcon } from "lucide-react";


export type SidebarPermission = string;
export type SidebarRole = "admin" | "manager" | "sales" | "support";

export type SidebarItem = {
  id: string;

  label: string;

  icon: LucideIcon;
  // icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;

  /** absolute route path */
  path?: string;

  /** feature flags / permissions */
  // permissions?: SidebarPermission[];

  /** role-level access */
  // roles?: SidebarRole[];

  /** nested children */
  children?: SidebarItem[];

  /** UI behavior */
  collapsible?: boolean;
};
