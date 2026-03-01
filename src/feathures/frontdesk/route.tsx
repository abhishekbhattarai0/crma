import { type RouteObject, Navigate } from "react-router-dom";
// import Organization from "./pages/organization/Organization";
import Postaldispatch from "./pages/PostalDispatch";
import PostalRecieve from "./pages/PostalRecieve";
import PostalView from "./pages/PostalView";
import FiscalYear from "./pages/FiscalYear";
import OrganizationList from "./pages/organization/OrganizationList";
import Organization1 from "./pages/organization/Organization1";
import OrganizationBranchDetails from "./pages/organization/OrganizationBranchDetails";

export const frontdeskRoute: RouteObject = {
  path: "frontdesk",
  children: [
    { index: true, element: <Navigate to='/leads/leads' replace /> },
    {
      path: "organization",
      element: <OrganizationList />
    },
    {
      path: "organization/:organizationId",
      element: <Organization1 />
    },
    {
      path: "organization/:organizationId/branches/:branchId",
      element: <OrganizationBranchDetails />
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
    },



  ],
};
