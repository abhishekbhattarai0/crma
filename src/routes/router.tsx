import { dashboardRoutes } from "@/feathures/dashboard/routes";
import AppLayout from "@/layouts/AppLayout";
import { createBrowserRouter } from "react-router-dom";
// import { dashboardRoutes } from "@/features/dashboard/routes";
// import { analyticsAppRoutes } from "@/features/apps/analytics/routes";
// import { cryptoAppRoutes } from "@/features/apps/crypto/routes";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            dashboardRoutes
            // dashboardRoutes,
            // analyticsAppRoutes,
            // cryptoAppRoutes,
        ],
    },
]);
