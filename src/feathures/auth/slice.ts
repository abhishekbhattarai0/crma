import { clearAuth, getAuth, saveAuth } from "@/lib/authStorage"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type User = {
    id: string
    username: string
    role: string
}

const persistedAuth = getAuth();

type AuthState = {
    accessToken: string | null
    refreshToken: string | null
    isAuthenticated: boolean,
    user: User | null
}


const initialState: AuthState = {
    accessToken: persistedAuth?.accessToken ?? null,
    refreshToken: persistedAuth?.refreshToken ?? null,
    isAuthenticated: Boolean(persistedAuth?.accessToken),
    user: persistedAuth?.user ?? null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (
            state,
            action: PayloadAction<{
                accessToken: string;
                refreshToken: string;
                user: User
            }>
        ) => {
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
            state.user = action.payload.user
            state.isAuthenticated = true

            // persist auth data
            saveAuth({
                accessToken: action.payload.accessToken,
                user: action.payload.user
            })
        },
        logout: (state) => {
            state.accessToken = null
            state.refreshToken = null
            state.isAuthenticated = false
            state.user = null;

            clearAuth()
        },
    },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
