import React, { useEffect } from "react";
import { Outlet,Link } from "react-router-dom";
import "../styling/NavBar.css"

class LogoIcon extends React.Component{
    render(){
        return <img src="./favicon.png" id="logoicon" style={this.props.style}></img>
    }
}

class LogoBox extends React.Component{
    render(){
        return (
            <div id="logotext" style={this.props.divstyle}>
                <h1 id="logotext1" style={this.props.hstyle}>
                    Language Translator
                </h1>
                <p id="logotext2" style={this.props.pstyle}>
                    Translating languages. Transforming connections.
                </p>
            </div>
        )
    }
}

export class Logo extends React.Component{
    render(){
        return (
            <div id="mainlogo" style={this.props.maindivstyle}>
                <LogoIcon {...this.props}/>
                <LogoBox {...this.props}/>
            </div>
        )
    }
}

class Options extends React.Component{
    render(){
        return (
            <>
                <nav id="opconcontainer">
                    <ul id="opcon">
                        <li className="pad">
                            <Link className="links" id="links" to="/home">Home</Link>
                        </li>
                        <li className="pad">
                            <Link className="links" id="links" to="/about">About</Link>
                        </li>
                        <li className="pad">
                            <Link className="links" id="links" to="/login">Translate</Link>
                        </li>
                        <li>
                            <Link id="loginbut" className="options" to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </>
        )
    }
    componentDidMount(){
        var arr=document.getElementsByClassName("links")
        if (String(window.location.href).endsWith('/home')){
            arr[0].id='active'
            arr[1].id='links'
            arr[2].id='links'
        }
        else if (String(window.location.href).endsWith('/about')){
            arr[1].id='active'
            arr[0].id='links'
            arr[2].id='links'
        }
        else if (String(window.location.href).endsWith('/translatepage')){
            arr[2].id='active'
            arr[1].id='links'
            arr[0].id='links'
        }
    }
}

class NavBar extends React.Component{
    render(){
        return (
            <div id="nav">
                <Logo maindivstyle={{}} divstyle={{}} hstyle={{}} pstyle={{}} style={{}}/>
                <Options set={this.props.set}/>
            </div>
        )
    }
}

export default NavBar;