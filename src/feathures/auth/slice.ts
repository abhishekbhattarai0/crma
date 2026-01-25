import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type User = {
    id: string
    username: string
    role: string
}

type AuthState = {
    accessToken: string | null
    refreshToken: string | null
    isAuthenticated: boolean,
    user: User | null
}


const initialState: AuthState = {
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
    user: null,
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
        },
        logout: (state) => {
            state.accessToken = null
            state.refreshToken = null
            state.isAuthenticated = false
            state.user = null;

        },
    },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
