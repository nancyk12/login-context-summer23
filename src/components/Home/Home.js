import React, {useContext} from 'react'
import './Home.css'

import {ThemeContext} from '../../context/ThemeContext'
import {LoginContext} from '../../context/LoginContext'


const Home = () => {
    const { theme, setTheme, changeTheme } = useContext(ThemeContext)

    const login = useContext(LoginContext) 

    // const changeTheme = () => {
    //   theme === 'light' ? setTheme('dark') : setTheme('light')
    // }
  return (
    <div id='home' className={theme}>
      {
        login.isAuth ?
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