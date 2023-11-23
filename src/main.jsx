import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './scripts/Main.jsx'
import './styling/mainbody.css'

window.loggedin=false

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>,
)
