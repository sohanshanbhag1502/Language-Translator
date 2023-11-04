import NavBar from './scripts/NavBar'
import React from 'react'
import FootBar from './scripts/FootBar'
import Intro from './scripts/Intro.jsx'
import { useState } from 'react'


class PostIntro extends React.Component{
    render(){
        return(
            <div id="mainbody">
                <header>
                    <NavBar />
                </header>
                <main>
                </main>
                <footer>
                    <FootBar />
                </footer>
            </div>
        )
    }
}

function Home(){
    const [startIntro, setIntro]=useState(true);
    setTimeout(()=>{setIntro(false)}, 10000)
    return (
        startIntro?<Intro />:<PostIntro />
    )
}

export default Home
