import React from "react";
import NavBar from "./NavBar";
import FootBar from "./FootBar.jsx"
import "../styling/TranslatePage.css"
import {BsFillClipboardFill} from 'react-icons/bs'
import {MdOutlineDocumentScanner} from 'react-icons/md'
import {GiHorizontalFlip} from 'react-icons/gi'

class ButtonContainer extends React.Component{
    render(){
        if (this.props.givelens)
            return(
                <div id="butcontainer">
                    <button className="tbuttons"><BsFillClipboardFill /></button>
                    <button className="tbuttons"><MdOutlineDocumentScanner /></button>
                </div>
            )
        else
            return(
                <div id="butcontainer">
                    <button className="tbuttons"><BsFillClipboardFill /></button>
                </div>
            )
    }
}

class TranslateBox extends React.Component{
    render(){
        return(
            <div className={"translateformbox"+" "+this.props.class}>
                <ButtonContainer {...this.props}/>
                <select className="formcontents">
                    <option>Detect Language</option>
                </select>
                <textarea className="formcontents text" 
                placeholder={this.props.holder}></textarea>
            </div>
        )
    }
}

class TranslateMain extends React.Component{
    render(){
        return (
            <div id="translatewidgetscontainer">
                <form id="translateinner">
                    <div id="backgroundhome"></div>
                    <TranslateBox class="first" givelens={true} holder={"From Text..."}/>
                    <button id="intbutton"><GiHorizontalFlip /></button>
                    <TranslateBox class="\b" givelens={false} holder={"To Text..."}/>
                </form>
            </div>
        )
    }
}

class TranslatePage extends React.Component{
    render(){
        return (
            <div id="translate">
                <header>
                    <NavBar />
                </header>
                <main>
                    <TranslateMain />
                </main>
                <footer>
                    <FootBar />
                </footer>
            </div>
        )
    }
}

export default TranslatePage;