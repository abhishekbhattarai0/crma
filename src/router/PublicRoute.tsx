import Loader from "@/components/common/Loader"
import { useAuth } from "@/hooks/useAuth"
import { Navigate, Outlet } from "react-router-dom"


export const PublicRoute = () => {
  const { isAuthenticated, isLoading } = useAuth()

  
  if (isLoading) return null
     if (isAuthenticated === null) return <Loader/>


  return isAuthenticated
    ? <Navigate to="/dashboard" replace />
    : <Outlet />
}


