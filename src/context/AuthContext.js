import {createContext, useReducer, useEffect} from 'react'
import { checkAuthToken } from '../lib/checkAuthToken'

export const AuthContext = createContext(null)
export const AuthDispatchContext = createContext(null)

const initialState = {
    isAuth: false
}

export const AuthProvider = ({children}) => {
    const [auth, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        //check if there is a token
        let authy = checkAuthToken()
        // returns true or false
        //dispatch to set state
        authy ? 
            dispatch({ type: "AUTH_SUCCESS"})
        :
            dispatch({ type: "AUTH_FAILURE"})
    }, [])

    return (
        <AuthContext.Provider value={auth}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthContext.Provider>
    )
}

const authReducer = (auth, action) => {
    switch (action.type) {
        case 'AUTH_SUCCESS':
            return {
                isAuth: true
            }
        case 'AUTH_FAILURE':
            return {
                isAuth: false
            }
         
        default:
            //if something is broken default to not authorized
            return {
                isAuth: false
            };
    }
}