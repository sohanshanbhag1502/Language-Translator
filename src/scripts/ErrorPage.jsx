import React from "react";
import { Logo } from "./Logo";
import "../styling/ErrorPage.css"

class ErrorPage extends React.Component{
    render(){
        return (
            <center>
                <div>
                    <Logo logoid="logoerr"/>
                    <center><h1 id="errorhead">
                        ERROR 404!
                    </h1></center>
                    <img src="../../public/robot.jpg" id="robotimg"/>
                    <p id="errortext">
                        Sorry the page you are looking for does not exist!
                    </p>
                </div>
            </center>
        )
    }
}

export default ErrorPage;