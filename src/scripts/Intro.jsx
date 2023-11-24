import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../styling/Intro.css'

class Logo extends React.Component{
    constructor(props){
        super(props)
        this.state={"marginleft":'17vw'}
        this.ref=React.createRef()
    }
    componentDidMount(){
        this.slide=()=>{this.setState({"marginleft":'0vw'})}
        setTimeout(this.slide, 10)
    }
    render(){
        return (
            <div id="logodiv" style={{marginLeft:this.state.marginleft}} ref={this.ref}>
                <img src="./favicon.png" ref={this.ref}></img>
            </div>
        )
    }
}

class Text extends React.Component{
    constructor(props){
        super(props)  
        this.state={"display":"none"}
        this.ref=React.createRef()
    }
    componentDidMount(){
        this.slide=()=>{this.setState({"display":"initial"})}
        setTimeout(this.slide, 3000)
        setTimeout(()=>{window.startLoad(true)}, 3700)
    }
    render(){
        return (
            <div id="textdiv" style={{marginLeft:this.state.marginleft, 
            display:this.state.display}} ref={this.ref}>
                <h1 id="text1">Language Translator</h1>
                <p id="text2"><b>Translating Languages. Transforming Connections.</b></p>
            </div>
        )
    }
}

function Loader(){
        const [loading, startLoad]=useState(false)
        window.startLoad=startLoad
        return(
            loading?
            <div className="spinner-border text-primary loadclass" role="status"></div>:
            <div></div>
        )
    }

class Intro extends React.Component{
    render(){
        return (
            <div id="introdiv">
                <div id="innerdiv">
                    <div id="trandiv">
                        <Logo />
                        <Text />
                    </div>
                    <Loader />
                </div>
            </div>
        )
    }
}

export default Intro;
