'use client';

import React, {useEffect, useReducer, useState} from 'react';
import { createContext } from 'react';
import AuthContext, { IUser } from './AuthContext';
import { authReducer } from './authReducer';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie'

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

    useEffect(() => {
        validationCookie()
    }, [])
    

    const validationCookie = async ()=>{
        try {
            const user = Cookies.get('token')
    
            if(!user) router.replace('http://localhost:3000')

            dispatch( {type: '[AUTH] - Login', payload: user as any})

            return true
        } catch (error) {
            Cookies.remove('token')
        }


    }
    

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
                const {user, token} = payload

                dispatch( {type: '[AUTH] - Login', payload: user})

                Cookies.set('token', user)

                router.push('http://localhost:3000/dashboard')
                return true
            }else{
                return false
            }

        } catch (error) {
            return false
        }
    }

    const registerUser = async( firstName: string, lastName: string, email: string, password: string): Promise<boolean> =>{
        try {
            const response = await fetch('http://localhost:8080/api/user/login', {
                method: 'POST',
                body: JSON.stringify({firstName, lastName,email, password}),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const {status, payload} = await response.json()

            return true
        } catch (error) {
            return false
        }
    }

    const logout = async () =>{
        Cookies.remove('token')
        dispatch({type: '[AUTH] - Logout'})
        return router.replace('http://localhost:3000')
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            loginUser,
            registerUser,
            logout,
            validationCookie
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
