'use client';

import React, {useReducer, useState} from 'react';
import { createContext } from 'react';
import AuthContext, { IUser } from './AuthContext';
import { authReducer } from './authReducer';
import { useRouter } from 'next/navigation';

export interface AuthState{
    isLoggedIn: boolean
    user?: IUser
}

const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined
}

interface Props{
    children: React.ReactNode
}

export const AuthProvider = ({children}:Props) =>{

    const [state, dispatch ] = useReducer(authReducer, AUTH_INITIAL_STATE);

    const router = useRouter()

    const loginUser =  async (email: string, password: string):Promise<boolean> => {
        try {
            const response = await fetch('http://localhost:8080/api/user/login', {
                method: 'POST',
                body: JSON.stringify({email, password}),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            const {status, payload} = await response.json()
            if(status == "Success"){
                const {email, firstName} = payload

                dispatch( {type: '[AUTH] - Login', payload: {firstName, email}})

                router.push('http://localhost:3000/dashboard')
                return true
            }else{
                return false
            }

        } catch (error) {
            return false
        }
    }

    const registerUser = async( name: string, email: string, password: string): Promise<boolean> =>{
        try {
            return true
        } catch (error) {
            return false
        }
    }

    const logout = async () =>{
        dispatch({type: '[AUTH] - Logout'})
        return router.replace('http://localhost:3000')
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            loginUser,
            registerUser,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
