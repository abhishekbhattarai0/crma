import PageNotFound from "@/components/common/page-not-found";
import { appsRoutes } from "@/feathures/leads/route";
import { loginRoutes } from "@/feathures/auth/routes";
import { dashboardRoutes } from "@/feathures/dashboard/routes";
import AppLayout from "@/layouts/AppLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "@/router/ProtectedRoute";
import { PublicRoute } from "@/router/PublicRoute";
import { accountsRoute } from "@/feathures/accounts/route";
import { salesManagementRoute } from "@/feathures/sales-management/route";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      // default redirect when path is "/"
      { index: true, element: <Navigate to="/dashboard/analytics" replace /> },
      {
        element: <ProtectedRoute />,
        children: [
          dashboardRoutes,
          appsRoutes,
          accountsRoute,
          salesManagementRoute
        ]
      }
    ],
  },
  {
    path: '/auth',
    element: <PublicRoute />,
    children: [
      loginRoutes
    ]
  },
  {
    path: '*',
    element: <PageNotFound />
  }
]);
