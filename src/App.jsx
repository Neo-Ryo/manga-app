import React, { createContext, useEffect, useState } from 'react'
import './App.css'
import MyRouter from './components/Router'

export const ThemingApp = createContext('lightMode')

function App() {
    const [myTheme, setMyTheme] = useState('lightMode')
    useEffect(() => {
        console.log(myTheme)
    }, [])
    return (
        <ThemingApp.Provider value={{ setMyTheme, myTheme }}>
            <div className={myTheme}>
                <MyRouter />
            </div>
        </ThemingApp.Provider>
    )
}

export default App
