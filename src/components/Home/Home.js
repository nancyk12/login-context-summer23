import React, {useContext} from 'react'
import './Home.css'

import {ThemeContext} from '../../context/ThemeContext'


const Home = () => {
    const { theme, setTheme, changeTheme } = useContext(ThemeContext)

    // const changeTheme = () => {
    //   theme === 'light' ? setTheme('dark') : setTheme('light')
    // }
  return (
    <div className={theme}>
        Home
        <h3>{theme}</h3>
        <button onClick={changeTheme}> Change Theme </button>
    </div>

  )
}

export default Home