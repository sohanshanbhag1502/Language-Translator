import React from "react";
import NavBar from "./NavBar";
import FootBar from "./FootBar.jsx"
import "../styling/TranslatePage.css"
import {BsFillClipboardFill} from 'react-icons/bs'
import {GiHorizontalFlip} from 'react-icons/gi'
import {translate, languages} from '../translateapi/translate.js'

class TranslateBox extends React.Component{
    constructor(){
        super()
        this.state={text:""}
    }
    render(){
        return(
            <div className={"translateformbox"+" "+this.props.class}>
                <div id="butcontainer">
                    <button id={this.props.copyid} className="tbuttons"><BsFillClipboardFill /></button>
                    {this.props.givetran?<button id="tranbut" className="tbuttons">Translate</button>:<></>}
                </div>
                <select id={this.props.id1} className="formcontents optionssel"></select>
                <textarea id={this.props.id2} className="formcontents text" 
                placeholder={this.props.holder} readOnly={this.props.readonly}></textarea>
            </div>
        )
    }
    componentDidMount(){
        let cp2=document.getElementById("copy2")
        let intbu=document.getElementById("intbutton")
        intbu.onclick=(e)=>{
            e.preventDefault()
            let temp=document.getElementById('firstsel').value
            document.getElementById('firstsel').value=document.getElementById('secondsel')
            .value
            document.getElementById('secondsel').value=temp
        
            temp=document.getElementById('firsttext').value
            document.getElementById('firsttext').value=document.getElementById('secondtext')
            .value
            document.getElementById('secondtext').value=temp
        }
        let sel=document.querySelectorAll('.optionssel')
        sel.forEach((tag, id) => {
            for (let lang_code in languages) {
                let selected =
                id == 0
                    ? lang_code == "en"
                    ? "selected"
                    : ""
                    : lang_code == "kn"
                    ? "selected"
                    : "";
                let option = `<option ${selected} value="${lang_code}">\
${languages[lang_code]}</option>`;
                tag.insertAdjacentHTML("beforeend", option);
            }
        });
        if (this.props.id2==='firsttext'){
            document.getElementById('tranbut').onclick=(e)=>{
                e.preventDefault()
                translate(document.getElementById('firstsel').value, 
                document.getElementById('secondsel').value, 
                document.getElementById('firsttext')
                .value, this.state).then(
                    (res)=>{
                        console.log(res)
                        document.getElementById('secondtext').value=res
                    }
                )
                .catch((err)=>{
                    console.log(err)
                })}
            }
        document.getElementById('secondtext').value=this.state.text;
        cp2.onclick=(e)=>{
            e.preventDefault()
            document.getElementById('secondtext').select()
            document.execCommand('copy')
            window.getSelection().removeAllRanges()
        }
    }
}

class TranslateMain extends React.Component{
    render(){
        return (
            <div id="translatewidgetscontainer">
                <form id="translateinner">
                    <div id="backgroundhome"></div>
                    <TranslateBox copyid=null readonly={false} id1="firstsel" id2="firsttext" class="first" givetran={true} holder={"From Text..."}/>
                    <button id="intbutton"><GiHorizontalFlip /></button>
                    <TranslateBox copyid="copy2" readonly={true} id1="secondsel" id2="secondtext" class="\b" givetran={false} holder={"To Text..."}/>
                </form>
            </div>
        )
    }
}

class TranslatePage extends React.Component{
    render(){
        if (window.loggedin)
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
        else
            return (<center><h1>User not logged in</h1></center>)
    }
}

export default TranslatePage;
