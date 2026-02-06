import { type RouteObject, Navigate } from "react-router-dom";
import Organization from "./pages/Organization";
import Postaldispatch from "./pages/PostalDispatch";
import PostalRecieve from "./pages/PostalRecieve";
import PostalView from "./pages/PostalView";
import FiscalYear from "./pages/FiscalYear";

export const frontdeskRoute: RouteObject = {
  path: "frontdesk",
  children: [
    { index: true, element: <Navigate to='/leads/leads' replace /> },
    {
      path: "organization",
      element: <Organization />
    },
    {
      path: "postal-dispatch",
      element: <Postaldispatch />
    },
    {
      path: 'fiscal-year',
      element: <FiscalYear />
    },
    {
      path: "postal-recieve",
      element: <PostalRecieve />
    },
    {
      path: 'postal-details',
      element: <PostalView />
    }


  ],
};
