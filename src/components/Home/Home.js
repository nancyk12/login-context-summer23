import React, {useContext, useEffect} from 'react'
import './Home.css'

import {ThemeContext} from '../../context/ThemeContext'
import {LoginContext} from '../../context/LoginContext'
import {AuthContext} from '../../context/AuthContext'

import {checkAuthToken} from '../../lib/checkAuthToken'

const Home = () => {

    // useEffect(() => {
    //   checkAuthToken()
    
    // }, [])
    


    const { theme, setTheme, changeTheme } = useContext(ThemeContext)

    const login = useContext(LoginContext) 
    const auth = useContext(AuthContext)

    // const changeTheme = () => {
    //   theme === 'light' ? setTheme('dark') : setTheme('light')
    // }
  return (
    <div id='home' className={theme}>
      {
        auth.isAuth ?
        <>
            Welcome to Home: {login.username}
        </>
        :
        <> 
           No user logged in!
        </>
       
      }
        

        <h4> Theme: {theme} </h4>
        <button onClick={changeTheme}> Change Theme </button>
    </div>

  )
}

export default Home