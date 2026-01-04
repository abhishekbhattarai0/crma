import { type RouteObject } from "react-router-dom";
import Analytics from "./pages/Analytics";

export const dashboardRoutes: RouteObject = {
    path: "dashboard",
    children: [
        {
            path: "analytics",
           element: <Analytics/>,
        },
    ],
};