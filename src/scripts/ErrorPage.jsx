import React from "react";
import { Logo } from "./NavBar";

class ErrorPage extends React.Component{
    render(){
        return (
            <center>
                <div>
                    <Logo divstyle={{marginTop:"3.5%"}} pstyle={{marginLeft:"0%"}} 
                    hstyle={{marginLeft:"-12%"}} style={{}}/>
                    <center><h1 style={{fontFamily:"Arial", color:"red"}}>
                        ERROR 404!
                    </h1></center>
                    <img src="robot.jpg" style={{width:"28%"}} />
                    <p style={{fontFamily:"Arial", fontSize:"25px", color:"red"}}>
                        Sorry the page you are looking for does not exist!
                    </p>
                </div>
            </center>
        )
    }
}

export default ErrorPage;