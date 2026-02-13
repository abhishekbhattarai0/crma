import { type RouteObject, Navigate } from "react-router-dom";
import User from "./pages/users/User";
import ActivityLog from "./pages/activity-logs/ActivityLogs";
import UserDetails from "./pages/users/UserDetails";
import AccessControl from "./pages/access-control/AccessControl";
import LoginHistory from "./pages/login-history/LoginHistory";
import PasswordSecurity from "./pages/password-security/PasswordSecurity";
import AccessControlDetails from "./pages/access-control/AccessControlDetails";
import LoginHistoryByUser from "./pages/login-history/LoginHistoryByUser";
import ActiveSessionById from "./pages/login-history/ActiveSessionById";

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
      path: "user/login-history/:username",
      element: <LoginHistoryByUser />
    },
    {
      path: "active-session/:username",
      element: <ActiveSessionById />
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
      path: 'access-control/:roleName',
      element: <AccessControlDetails />
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
