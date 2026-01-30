import { useGetCurrentUserQuery } from "@/feathures/auth/authstore/authApi"
import { Navigate, Outlet } from "react-router-dom"


export const PublicRoute = () => {
  const { data: user, isLoading } = useGetCurrentUserQuery()

  // Optional: show loader while checking authentication
  if (isLoading) return <div>Loading...</div>

  // If user is logged in, redirect to protected page (dashboard, home, etc.)
  if (user) return <Navigate to="/dashboard" replace />

  return <Outlet />
}


