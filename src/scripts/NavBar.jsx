import React from "react";

class LogoIcon extends React.Component{
    render(){
        return <img src="./favicon.png" id="logoicon"></img>
    }
}

class LogoBox extends React.Component{
    render(){
        return (
            <div id="logotext">
                <h1 id="logotext1">Language Translator</h1>
                <p id="logotext2">Translating languages. Transforming connections.</p>
            </div>
        )
    }
}

class Logo extends React.Component{
    render(){
        return (
            <div id="mainlogo">
                <LogoIcon />
                <LogoBox />
            </div>
        )
    }
}

class Options extends React.Component{
    render(){
        return (
            <div id="opconcontainer">
                <ul id="opcon">
                    <li className="pad"><a className="options">Home</a></li>
                    <li className="pad"><a className="options">About</a></li>
                    <li className="pad"><a className="options">Translate</a></li>
                    <li><button id="loginbut" className="options">Login</button></li>
                </ul>
            </div>
        )
    }
}

class NavBar extends React.Component{
    render(){
        return (
            <div id="nav">
                <Logo />
                <Options />
            </div>
        )
    }
}

export default NavBar;