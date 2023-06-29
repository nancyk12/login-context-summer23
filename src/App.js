import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

import { ThemeContext } from './context/ThemeContext'
// import {LoginContext, LoginDispatchContext} from './context/LoginContext'
import { LoginProvider } from './context/LoginContext'
import {AuthProvider} from './context/AuthContext'

import Home from './components/Home/Home'
import Login from './components/Login/Login'


function App() {
  const [theme, setTheme] = useState('light')

  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <div className="App">
   
      <ThemeContext.Provider value={
        {theme, setTheme, changeTheme}
      }>
        <AuthProvider>
          <LoginProvider>
              <Home />
              <Login />
          </LoginProvider>
        </AuthProvider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;