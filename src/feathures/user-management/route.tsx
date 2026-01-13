import { type RouteObject, Navigate } from "react-router-dom";
import RelationshipMap from "./pages/RelationshipMap";
import User from "./pages/User";
import EmailMarketing from "./pages/EmailMarketing";
import SMSMarketing from "./pages/SmsMarketing";

export const userManagementMap: RouteObject = {
  path: "user-management",
  children: [
    { index: true, element: <Navigate to='/accounts/companies' replace /> },
    {
      path: "users",
      element: <User />
    },
    {
      path: "email-marketing",
      element: <EmailMarketing />
    },
    {
      path: "relationship-map",
      element: < RelationshipMap />
    },
    {
      path: "sms-marketing",
      element: <SMSMarketing />
    },
    {
      path: "relationship-map",
      element: <RelationshipMap />
    },
  ],
};
