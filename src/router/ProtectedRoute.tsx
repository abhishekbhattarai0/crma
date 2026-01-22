import type { RootState } from "@/store"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    // const { isAuthenticated, isLoading } = useAuth()
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    )

    // if (isLoading) return null
    // if (isAuthenticated === null) return <Loader />

    return isAuthenticated
        ? <Outlet />
        : <Navigate to="/auth/login" replace />
}

export default ProtectedRoute




