import { type RouteObject, Navigate } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Branches from "./pages/Branches";
import Departments from "./pages/Departments";
import RelationshipMap from "./pages/RelationshipMap";
import Companies from "./pages/Companies";

export const accountsRoute: RouteObject = {
  path: "accounts",
  children: [
    { index: true, element: <Navigate to='/accounts/companies' replace /> },
    {
      path: "companies",
      element: <Companies />
    },
    {
      path: "contacts",
      element: <Contacts />
    },
    {
      path: "branches",
      element: <Branches />
    },
    {
      path: "departments",
      element: <Departments />
    },
    {
      path: "relationship-map",
      element: <RelationshipMap />
    },
  ],
};
