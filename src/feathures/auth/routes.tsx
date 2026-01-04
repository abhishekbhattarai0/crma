import { type RouteObject, } from "react-router-dom";
import Login from "./pages/Login";

export const loginRoutes: RouteObject = {
    path: "login",
    element: <Login />
    // children: [
    //     // { index: true, element: <Navigate to='/dashboard/analytics' replace /> },
    //     {
    //         path: "login",
    //         element: <Login />,
    //     },
    // ],
};