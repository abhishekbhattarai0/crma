import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type User = {
    id: string
    username: string
    role: string
}

type RolePermission = {
    id: string
    role: string,
    permission: string[]

} | null

type AuthState = {
    isAuthenticated: boolean,
    user: User | null,
    rolePermission: RolePermission
}


const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    rolePermission: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (
            state,
            action: PayloadAction<{
                user: User
                rolePermission: RolePermission
            }>
        ) => {
            state.user = action.payload.user
            state.isAuthenticated = true
            state.rolePermission = action.payload.rolePermission
        },
        logout: (state) => {
            state.isAuthenticated = false
            state.user = null;

        },
        setUser: (
            state,
            action: PayloadAction<{
                user: User
                rolePermission: RolePermission
            }>
        ) => {
            state.user = action.payload.user
            state.rolePermission = action.payload.rolePermission
        }
    },
})

export const { setCredentials, logout, setUser } = authSlice.actions
export default authSlice.reducer
