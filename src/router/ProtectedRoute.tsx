import Loader from "@/components/common/Loader"
import { useAuth } from "@/hooks/useAuth"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useAuth()

    if (isLoading) return null
    if (isAuthenticated === null) return <Loader/>

    return isAuthenticated
        ? <Outlet />
        : <Navigate to="/auth/login" replace />
}

export default ProtectedRoute




