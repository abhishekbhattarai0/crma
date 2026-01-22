import type { RootState } from "@/store"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


export const PublicRoute = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )

  return isAuthenticated
    ? <Navigate to="/dashboard" replace />
    : <Outlet />
}


