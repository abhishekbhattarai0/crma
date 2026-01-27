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

}

type AuthState = {
    accessToken: string | null
    refreshToken: string | null
    isAuthenticated: boolean,
    user: User | null,
    rolePermission: RolePermission | null
}


const initialState: AuthState = {
    accessToken: null,
    refreshToken: null,
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
                // accessToken: string;
                // refreshToken: string;
                user: User
                rolePermission: RolePermission
            }>
        ) => {
            // state.accessToken = action.payload.accessToken
            // state.refreshToken = action.payload.refreshToken
            state.user = action.payload.user
            state.isAuthenticated = true
            state.rolePermission = action.payload.rolePermission
        },
        logout: (state) => {
            state.accessToken = null
            state.refreshToken = null
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
