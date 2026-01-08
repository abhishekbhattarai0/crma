// import { useState, type ReactNode } from "react";
// import { AuthContext } from "./AuthContext";

import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"



export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const token = localStorage.getItem("token")
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsAuthenticated(!!token)
        setIsLoading(false)
    }, [])

    const login = (username: string, password: string) => {
        if (username === 'admin' && password === 'admin1') {
            setIsAuthenticated(true)
        } else {
            return false;
        }
        localStorage.setItem("token", "jwt-token-here")
        setIsAuthenticated(true)
        return true;
    }

    const logout = () => {
        localStorage.removeItem("token")
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}