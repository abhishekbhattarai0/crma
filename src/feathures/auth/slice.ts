import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type AuthState = {
    accessToken: string | null
    isAuthenticated: boolean
}

const initialState: AuthState = {
    accessToken: localStorage.getItem("token"),
    isAuthenticated: Boolean(localStorage.getItem("token")),
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload
            state.isAuthenticated = true
            localStorage.setItem("token", action.payload)
        },
        logout: (state) => {
            state.accessToken = null
            state.isAuthenticated = false
            localStorage.removeItem("token")
        },
    },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
