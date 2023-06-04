'use client';

import { createContext } from "react"

export interface IUser {
    firstName: string,
    email: string
}

interface ContextProps {
    isLoggedIn: boolean
    user?: IUser


    loginUser: (email: string, password: string) => Promise<boolean>
    logout: () => void
    registerUser: (firstName: string, lastName: string, email: string, password: string) => Promise<boolean>
}


const AuthContext = createContext({} as ContextProps)

export default AuthContext