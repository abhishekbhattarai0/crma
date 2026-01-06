import { type RouteObject, Navigate } from "react-router-dom";
import AnalyticsCustomer from "./pages/AnalyticsCustomer";
import AnalyticsReport from "./pages/AnalyticsReport";

export const appsRoutes: RouteObject = {
    path: "apps",
    children: [
        { index: true, element: <Navigate to='/analytics/customers' replace /> },
        {
            path: "analytics",
            children: [
                {
                    path: "customers",
                    element: <AnalyticsCustomer/>
                },
                 {
                    path: "reports",
                    element: <AnalyticsReport/>
                },
            ]
        },
    ],
};