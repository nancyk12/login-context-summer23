import {createContext, useReducer} from 'react'

// if using .Provider here in this file no expor is needed
// if you want to use .Provider insead of LoginProvider, you would need the export
export const LoginContext = createContext(null)
export const LoginDispatchContext = createContext(null)

const initialState = {
    username: '',
    isAuth: false,
    message: 'Please Login'
}
export const LoginProvider = ({children}) => {
    const [login, dispatch] = useReducer(loginReducer, initialState)

    return (
        <LoginContext.Provider value={login}>
            <LoginDispatchContext.Provider value={dispatch}>
                {children}
            </LoginDispatchContext.Provider>
        </LoginContext.Provider>
    )
}

// reducer used in same file, no export
const loginReducer = (login, action) => {
    switch (action.type) {
        case 'LOGIN':
            //console.log(action.data)
            if (action.data.password === 'abc'){
                return {
                    username: action.data.username,
                    isAuth: true, 
                    message: `Welcome ${action.data.username}`
                }
            }
            return {
                ...login, 
                message: "User not Authorized"
            }

            //logout case
            //should clear, empty string, username and password
            // set is auth to false
            // and deliver a log out message = "Logged out"
            case 'LOGOUT':
                return {
                    username: '',
                    password: '',
                    isAuth: false,
                    message: 'Logged out'    
                }
        default:
            return login
    }
}