import React from "react";
import { IconContext } from "react-icons";
import { FaGithub } from 'react-icons/fa';

function redirect(){
    window.open('https://github.com/sohanshanbhag1502/webtechproject', '_blank')
}

class CopyRight extends React.Component{
    render(){
        return (
            <div>
                <p id="copyr">Copyright &#169; Language Translator. All Rights Reserved</p>
            </div>
        )
    }
}

const RepoIcon=()=>{
        return (
            <IconContext.Provider value={{size:'3em', color:'white'}}>
                <a><FaGithub /></a>
            </IconContext.Provider>
        )
}

const RepoText=()=>{
    return (
        <p id="repopara">View Source Code<br /> on Github</p>
    )
}

class Repo extends React.Component{
    render(){
        return (
            <button id="Repobut" className="btn btn-dark" onClick={redirect}>
                <RepoIcon />
                <RepoText />
            </button>
        )
    }
}

class FootBar extends React.Component{
    render(){
        return(
            <div id="footelement">
                <CopyRight />
                <Repo />
            </div>
        )
    }
}

export default FootBar;