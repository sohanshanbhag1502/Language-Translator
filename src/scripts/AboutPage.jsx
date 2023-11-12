import React from "react";
import NavBar from "./NavBar";
import FootBar from "./FootBar";
import "../styling/AboutPage.css"

function AboutBody(){
    return(
        <div id="aboutcontent">
            <div id="bg"></div>
            <div id="innerabout">
                <center><h1 style={{color:"white"}}>ABOUT US</h1></center>
                <article style={{color:"white"}}>
                    Welcome to language translator which is a free and open source natural translating 
                    website built on react framework.
                    We harness the power of advanced API technology to seamlessly convert text from 
                    one language to another. Our goal is to make language translation a breeze for everyone.
                    <br />
                    <br />
                    At the heart of language translator website lies the sophisticated API which 
                    converts from one language to another seamlessly.
                    <br />
                    User-friendly and intuitive, our website ensures a hassle-free experience. 
                    Simply input your text, select your target language, and witness the magic unfold. 
                    The interface is designed for accessibility, making the translation process as 
                    smooth as a conversation with a friend.
                    <br />
                    Security is paramount.Our website takes minimal details to create an account 
                    to ensure user privacy during translation journey.
                    <br />
                    Whether you need to translate English to Spanish, French to Chinese, or any 
                    other language combination, we've got you covered. Our extensive language support spans a 
                    wide range, enabling you to connect with people from all corners of the globe.
                    <br />
                    <br />
                    <br />
                    Creators:
                    <br />
                    i) Sohan Shanbhag:
                    <br />
                    &nbsp;&nbsp;
                    Github Link:&nbsp;<a href="https://github.com/sohanshanbhag1502/"
                    target="_blank" className="links">
                        https://github.com/sohanshanbhag1502/
                    </a>
                    <br/>
                    ii) Soyel Gunnapur:
                    <br />
                    &nbsp;&nbsp;
                    Github Link:&nbsp;<a href="https://github.com/soyel1806/"
                    target="_blank" className="links">
                        https://github.com/soyel1806/
                    </a>

                    <br />
                    <br />
                    Github link for project source:
                    <br />
                    <a href="https://github.com/sohanshanbhag1502/webtechproject"
                    target="_blank" className="links">
                        https://github.com/sohanshanbhag1502/webtechproject
                    </a>

                    <br />
                    <br />
                    Feel free to view project source code and raise issue in Github 
                    if you find any bugs.
                    <br />
                    Thank you for visiting our website.
                </article>
            </div>
        </div>
    )
}

function AboutPage(){
    return (
        <div id="about">
            <header>
                <NavBar />
            </header>
            <main>
                <AboutBody />
            </main>
            <footer>
                <FootBar />
            </footer>
        </div>
    )
}

export default AboutPage;