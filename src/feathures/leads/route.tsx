import { type RouteObject, Navigate } from "react-router-dom";
import LeadSources from "./pages/LeadSources";
import LeadAssignment from "./pages/LeadAssignment";
import Customers from "./pages/Customers";
import CustomerActivity from "./pages/CustomerActivity";
import FollowUps from "./pages/FollowUps";
import CustomerGroups from "./pages/CustomerGroups";
import Leads from "./pages/Leads";

export const appsRoutes: RouteObject = {
  path: "leads",
  children: [
    { index: true, element: <Navigate to='/leads/leads' replace /> },
    {
      path: "leads",
      element: <Leads />
    },
    {
      path: "lead-sources",
      element: <LeadSources />
    },
    {
      path: "lead-assignment",
      element: <LeadAssignment />
    },
    {
      path: "customers",
      element: <Customers />
    },
    {
      path: "customer-groups",
      element: <CustomerGroups />
    },
    {
      path: "customers-activity",
      element: <CustomerActivity />
    },
    {
      path: "follow-ups",
      element: <FollowUps />
    },
  ],
};
