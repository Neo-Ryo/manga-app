import React, { useState } from 'react'
import './App.css'
import MyRouter from './components/Router'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <MyRouter />
        </div>
    )
}

export default App
