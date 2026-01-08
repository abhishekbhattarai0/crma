import { type RouteObject, Navigate } from "react-router-dom";
import SalesPipeline from "./pages/SalesPipeline";
import Opportunities from "./pages/Opportunities";
import Quotations from "./pages/Quotations";
import SalesOrder from "./pages/SalesOrder";
import Invoices from "./pages/Invoices";
import Payments from "./pages/Payments";
import TargetsComissions from "./pages/TargetsComissions";

export const salesManagementRoute: RouteObject = {
  path: "sales-management",
  children: [
    { index: true, element: <Navigate to='/sales-management/sales-pipeline' replace /> },
    {
      path: "sales-pipeline",
      element: <SalesPipeline />
    },
    {
      path: "opportunities",
      element: <Opportunities />
    },
    {
      path: "quotations",
      element: <Quotations />
    },
    {
      path: "sales-orders",
      element: <SalesOrder />
    },
    {
      path: "invoices",
      element: <Invoices />
    },
    {
      path: "payments",
      element: <Payments />
    },
    {
      path: "targets-comissions",
      element: <TargetsComissions />
    },
  ],
};
