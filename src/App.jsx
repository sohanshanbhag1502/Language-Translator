import { useState } from 'react'
import React from 'react'
import Intro from './scripts/Intro.jsx'
import PostIntro from './scripts/HomePage.jsx'

function Home(){
    const [startIntro, setIntro]=useState(true);
    setTimeout(()=>{setIntro(false)}, 10000)
    return (
        startIntro?<Intro />:<PostIntro />
    )
}

export default Home
