import React from 'react'
import Intro from './scripts/Intro.jsx'
import { useNavigate } from 'react-router-dom'

function First(){
    const navigate=useNavigate()
    setTimeout(()=>{navigate('/home')}, 10000)
    return (
        <Intro />
    )
}

export default First