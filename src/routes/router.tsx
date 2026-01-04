import { dashboardRoutes } from "@/feathures/dashboard/routes";
import AppLayout from "@/layouts/AppLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";
// import { dashboardRoutes } from "@/features/dashboard/routes";
// import { analyticsAppRoutes } from "@/features/apps/analytics/routes";
// import { cryptoAppRoutes } from "@/features/apps/crypto/routes";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            // default redirect when path is "/"
            { index: true, element: <Navigate to="/dashboard/analytics" replace /> },
            dashboardRoutes
            // dashboardRoutes,
            // analyticsAppRoutes,
            // cryptoAppRoutes,
        ],
    },
]);
