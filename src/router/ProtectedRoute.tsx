import Loader from "@/components/common/Loader"
import { useGetCurrentUserQuery } from "@/feathures/auth/authstore/authApi"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    // Fetch current user using RTK Query
    const { data: user, isLoading, isError } = useGetCurrentUserQuery()

    // if (isError || !user || isAuthenticated) return <Navigate to="/auth/login" replace />

    // Show nothing / loader while fetching
    if (isLoading) return <Loader />

    // If error or no user → redirect to login
    if (isError || !user) return <Navigate to="/auth/login" replace />


    // User authenticated → render protected route
    return <Outlet />
}

export default ProtectedRoute
