import React,{useState} from "react";
import "../styling/LoginPage.css"
import { Link, Outlet } from "react-router-dom";
import { Logo } from "./NavBar";

class SignUpBox extends React.Component{
    render(){
        return (
            <div style={{display:"flex", flexDirection:"column"}}>
                <Logo 
                        style={{width:"10%", marginTop:"3px"}}
                        maindivstyle={{width:"100%", marginLeft:"28%", marginBottom:"-8%"}}
                        divstyle={{marginTop:"13px", marginLeft:"10px"}}
                        hstyle={{color:"white", marginLeft:"4px"}}
                        pstyle={{color:"white"}}
                    />
                <center><div className="form-container">
                    <center><h2 style={{color:"white"}}>Sign Up</h2></center>
                    <div className="form-group">
                        <label className="inplabel">
                            <input
                                className="inps"
                                type="text"
                                required
                            />
                            <span className="placeholder">Name</span>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="inplabel">
                            <input
                                className="inps"
                                type="email"
                                required
                            />
                            <span className="placeholder">E-mail</span>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="inplabel">
                            <input
                                className="inps"
                                type="text"
                                required
                            />
                            <span className="placeholder">Username</span>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="inplabel">
                            <input
                                className="inps"
                                type="password"
                                required
                            />
                            <span className="placeholder">Password</span>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="inplabel">
                            <input
                                className="inps"
                                type="password"
                                required
                            />
                            <span className="placeholder">Confirm Password</span>
                        </label>
                    </div>
                    <div id="buttonholder">
                        <Link className="signbuttons" to="/login">Create Account</Link>
                    </div>
                    <Outlet />
                </div></center>
            </div>
            )
    }
}

class ForgotPasswordBox extends React.Component{
    render(){
        return (<div style={{display:"flex", flexDirection:"column"}}>
                    <center><Logo 
                        style={{width:"130px", marginTop:"3px"}}
                        maindivstyle={{width:"100%", marginLeft:"28%", marginBottom:"-8%"}}
                        divstyle={{marginTop:"13px", marginLeft:"10px"}}
                        hstyle={{color:"white",textAlign:"left"}}
                        pstyle={{color:"white"}}
                    /></center>
                    <center><div className="form-container">
                        <h2 style={{color:"white"}}>Forgot Password</h2>
                        <p style={{color:"white", fontSize:"20px"}}>Enter the code sent in
                        your mail below:</p>
                        <div className="form-group">
                            <label className="inplabel">
                                <input
                                    className="inps"
                                    type="text"
                                    required
                                />
                                <span className="placeholder">Code</span>
                            </label>
                        </div>
                        <div id="buttonholder">
                            <Link className="loginbuttons" to="/changepwd">Change Password</Link>
                        </div>
                        <Outlet />
                    </div></center>
                </div>)
    }
}

class PasswdChange extends React.Component{
    render(){
        return (<div style={{display:"flex", flexDirection:"column"}}>
                    <center><Logo 
                        style={{width:"130px", marginTop:"3px"}}
                        maindivstyle={{width:"100%", marginLeft:"28%", marginBottom:"-8%"}}
                        divstyle={{marginTop:"13px", marginLeft:"10px"}}
                        hstyle={{color:"white",textAlign:"left"}}
                        pstyle={{color:"white"}}
                    /></center>
                    <center><div className="form-container">
                        <h2 style={{color:"white"}}>Change Password</h2>
                        <div className="form-group">
                            <label className="inplabel">
                                <input
                                    className="inps"
                                    type="password"
                                    required
                                />
                                <span className="placeholder">New Password</span>
                            </label>
                        </div>
                        <div className="form-group">
                            <label className="inplabel">
                                <input
                                    className="inps"
                                    type="password"
                                    required
                                />
                                <span className="placeholder">Confirm New Password</span>
                            </label>
                        </div>
                        <div id="buttonholder">
                            <Link className="loginbuttons" to="/login">Change Password</Link>
                        </div>
                        <Outlet />
                    </div></center>
                </div>)
    }
}

class LoginBox extends React.Component{
    render(){
        return (<div style={{display:"flex", flexDirection:"column"}}>
                    <center><Logo 
                        style={{width:"130px", marginTop:"3px"}}
                        maindivstyle={{width:"100%", marginLeft:"28%", marginBottom:"-8%"}}
                        divstyle={{marginTop:"13px", marginLeft:"10px"}}
                        hstyle={{color:"white",textAlign:"left"}}
                        pstyle={{color:"white"}}
                    /></center>
                    <center><div className="form-container">
                        <h2 style={{color:"white"}}>Login</h2>
                        <div className="form-group">
                            <label className="inplabel">
                                <input
                                    className="inps"
                                    type="text"
                                    required
                                />
                                <span className="placeholder">Username</span>
                            </label>
                        </div>
                        <div className="form-group">
                            <label className="inplabel">
                                <input
                                    className="inps"
                                    type="password"
                                    required
                                />
                                <span className="placeholder">Password</span>
                            </label>
                        </div>
                        <div className="forgot-password">
                            <a href="/forgotpwd" id="link">Forgot Password</a>
                        </div>
                        <div id="buttonholder">
                            <Link className="loginbuttons" to="/translatepage">Login</Link>
                            <Link className="loginbuttons" to="/signup">Sign Up</Link>
                        </div>
                        <Outlet />
                    </div></center>
                </div>)
    }
}

export function LoginPage() {
    return (
        <div className="mainform">
            <div id="background"></div>
            <LoginBox />
        </div>
    );
}

export function SignUpPage() {
    return (
        <div className="mainform">
            <div id="background"></div>
            <SignUpBox />
        </div>
    );
}

export function ForgotPasswdPage(){
    return (
        <div className="mainform">
            <div id="background"></div>
            <ForgotPasswordBox />
        </div>
    );
}

export function PasswdChangePage(){
    return (
        <div className="mainform">
            <div id="background"></div>
            <PasswdChange />
        </div>
    );
}