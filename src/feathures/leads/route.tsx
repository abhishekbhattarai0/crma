import { type RouteObject, Navigate } from "react-router-dom";
import AnalyticsCustomer from "./pages/AnalyticsCustomer";
import AnalyticsReport from "./pages/AnalyticsReport";

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
            element: <AnalyticsReport />
        }
    ],
};