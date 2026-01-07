import PageNotFound from "@/components/common/page-not-found";
import { appsRoutes } from "@/feathures/leads/route";
import { loginRoutes } from "@/feathures/auth/routes";
import { dashboardRoutes } from "@/feathures/dashboard/routes";
import AppLayout from "@/layouts/AppLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            // default redirect when path is "/"
            { index: true, element: <Navigate to="/dashboard/analytics" replace /> },
            dashboardRoutes,
            appsRoutes
        ],
    },
    {
        path: '/auth',
        children: [
            loginRoutes
        ]
    },
    {
        path: '*',
        element: <PageNotFound />
    }
]);
