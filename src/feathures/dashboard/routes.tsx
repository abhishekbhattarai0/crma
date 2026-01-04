import { type RouteObject, Navigate } from "react-router-dom";
import Analytics from "./pages/Analytics";

export const dashboardRoutes: RouteObject = {
    path: "dashboard",
    children: [
        { index: true, element: <Navigate to='/dashboard/analytics' replace /> },
        {
            path: "analytics",
            element: <Analytics />,
        },
    ],
};