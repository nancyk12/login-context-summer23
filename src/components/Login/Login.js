import React, { useState, useContext } from 'react'
import {ThemeContext} from '../../context/ThemeContext'
import {LoginContext, LoginDispatchContext} from '../../context/LoginContext'
import './Login.css'

const Login = () => {
  //consume theme context  
  const {theme} = useContext(ThemeContext)

  //consume the login contexts
  const login = useContext(LoginContext)
  const dispatch = useContext(LoginDispatchContext)

  const [input, setInput] = useState({
    username: '',
    password: ''
  })
    
  const onChangeHandler = (e) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value 
    })
  }

  return (
    <div id='login' className={theme}>
        {/* <h1>Please Login:</h1>  */}
        <h2>{login.message}</h2> 
        {/* isAuth = false -> 'User not Authorized'
        isAuth = true -> 'Welcome username' */}
        
        {
            login.isAuth ? 
            <>
                <br></br>
                {/* Logout Button */}
            <   button onClick={
                    () => {
                    dispatch({type: 'LOGOUT'})
                    setInput({username: '',password: ''})
                    }
            }
            >
                Logout
            </button>
            </>
            :
            <>
                <label htmlFor='username'>Username: </label>
                <input 
                    type='text'
                    name='username'
                    value={input.username}
                    onChange={onChangeHandler}
                    /><br />
                    <label htmlFor='password'>Password: </label>
                    <input 
                    type='password'
                    name='password'
                    value={input.password}
                    onChange={onChangeHandler}
                    /><br />
                    <button>Register</button>
                    <button onClick={ 
                        () => dispatch({
                        type: 'LOGIN',
                        data: input
                    })  
                    }>Login</button>
            </>           
        }
               
        </div>
  )
}

export default Login