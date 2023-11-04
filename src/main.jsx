import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './App.jsx'
import './styling/Header.css'
import './styling/Footer.css'
import './styling/mainbody.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
)
