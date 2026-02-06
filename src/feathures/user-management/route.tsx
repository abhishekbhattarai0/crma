import { type RouteObject, Navigate } from "react-router-dom";
import User from "./pages/User";
import ActivityLog from "./pages/ActivityLogs";
import UserDetails from "./pages/UserDetails";
import AccessControl from "./pages/AccessControl";
import LoginHistory from "./pages/LoginHistory";
import PasswordSecurity from "./pages/PasswordSecurity";

export const userManagementMap: RouteObject = {
  path: "user-management",
  children: [
    { index: true, element: <Navigate to='/accounts/companies' replace /> },
    {
      path: "users",
      element: <User />
    },
    {
      path: "activity-logs",
      element: <ActivityLog />
    },
    {
      path: "login-history",
      element: <LoginHistory />
    },
    {
      path: "password-security",
      element: <PasswordSecurity />
    },
    // {
    //   path: "users/profile",
    //   element: <UserDetails />
    // },
    {
      path: 'access-control',
      element: <AccessControl />
    },
    {
      path: 'user-details/:userId',
      element: <UserDetails />
    },
    {
      path: 'user-details',
      element: <Navigate to='/user-management/users' replace />
    }
  ],
};
