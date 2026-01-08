import { createContext, } from "react"

type AuthContextType = {
    isAuthenticated: boolean
    login: (username: string, password: string) => boolean
    logout: () => void
    isLoading: boolean
}

export const AuthContext = createContext<AuthContextType | null>(null)




