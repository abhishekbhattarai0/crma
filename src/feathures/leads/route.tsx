import { type RouteObject, Navigate } from "react-router-dom";
import AnalyticsCustomer from "./pages/AnalyticsCustomer";
import LeadSources from "./pages/LeadSources";
import LeadAssignment from "./pages/LeadAssignment";
import Customers from "./pages/Customers";
import CustomerActivity from "./pages/CustomerActivity";
import FollowUps from "./pages/FollowUps";
import CustomerGroups from "./pages/CustomerGroups";

export const appsRoutes: RouteObject = {
  path: "leads",
  children: [
    { index: true, element: <Navigate to='/leads/leads' replace /> },
    {
      path: "leads",
      element: <AnalyticsCustomer />
      // children: [
      //     {
      //         path: "customers",
      //         element: <AnalyticsCustomer/>
      //     },
      //      {
      //         path: "reports",
      //         element: <AnalyticsReport/>
      //     },
      // ]
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
