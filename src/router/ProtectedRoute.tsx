// import type { RootState } from "@/store"
// import { useSelector } from "react-redux"
// import { Navigate, Outlet } from "react-router-dom"

// const ProtectedRoute = () => {
//     // const { isAuthenticated, isLoading } = useAuth()
//     const isAuthenticated = useSelector(
//         (state: RootState) => state.auth.isAuthenticated
//     )

//     // if (isLoading) return null
//     // if (isAuthenticated === null) return <Loader />

//     return isAuthenticated
//         ? <Outlet />
//         : <Navigate to="/auth/login" replace />
// }

// export default ProtectedRoute




import { useGetCurrentUserQuery } from "@/feathures/auth/authstore/authApi"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    // Fetch current user using RTK Query
    const { data: user, isLoading, isError } = useGetCurrentUserQuery()

    // if (isError || !user || isAuthenticated) return <Navigate to="/auth/login" replace />

    // Show nothing / loader while fetching
    if (isLoading) return <div>Loading...</div>

    // If error or no user → redirect to login
    if (isError || !user) return <Navigate to="/auth/login" replace />


    // User authenticated → render protected route
    return <Outlet />
}

export default ProtectedRoute
