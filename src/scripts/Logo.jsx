import React from "react";
import "../styling/Logo.css"

class LogoIcon extends React.Component{
    render(){
        return <img src="./favicon.png" id="icon"></img>
    }
}

class LogoBox extends React.Component{
    render(){
        return (
            <div id="logotextbox">
                <h1 id="head">
                    Language Translator
                </h1>
                <p id="moto">
                    Translating languages. Transforming connections.
                </p>
            </div>
        )
    }
}

export class Logo extends React.Component{
    render(){
        return (
            <div id="logo">
                <LogoIcon/>
                <LogoBox/>
            </div>
        )
    }
}