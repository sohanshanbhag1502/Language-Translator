import React, { useState } from "react";
import "../styling/LoginPage.css"
import { Link, Outlet } from "react-router-dom";
import { Logo } from "./Logo.jsx";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function SignUpForm(){
    const navigate=useNavigate()
    const [username, setUsername]=useState()
    const [password, setPassword]=useState()
    const [cpassword, setCPassword]=useState()
    const [email, setEmail]=useState()
    const [name, setName]=useState()

    const handlesubmit=(e)=>{
        if (cpassword==password){
            e.preventDefault()
            axios.post("https://language-translator-backend.vercel.app/userdetails",{name, email, password, username})
            .then((result)=>{
                navigate('/login');
                alert("User account created successfully");
            })
            .catch(err=>console.log(err))
        }
        else{
            alert("Password and confirm password doesnt match")
        }
        return false
    }

    return(
        <form onSubmit={handlesubmit}>
            <center><h2 style={{color:"white"}}>Sign Up</h2></center>
            <div className="form-group">
                <label className="inplabel">
                    <input
                        className="inps"
                        type="text"
                        onChange={(e)=>{setName(e.target.value)}}
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
                        onChange={(e)=>{setEmail(e.target.value)}}
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
                        onChange={(e)=>{setUsername(e.target.value)}}
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
                        onChange={(e)=>{setPassword(e.target.value)}}
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
                        onChange={(e)=>{setCPassword(e.target.value)}}
                        required
                    />
                    <span className="placeholder">Confirm Password</span>
                </label>
            </div>
            <div id="buttonholder">
                <button className="signbuttons" type="submit">
                    Create Account
                </button>
            </div>
        </form>
    )
}

class SignUpBox extends React.Component{
    constructor(){
        super()
        this.state={"username":"","password":"","email":"","name":""}
    }
    render(){
        return (
            <div style={{display:"flex", flexDirection:"column"}}>
                <center><Logo/></center>
                <center><div className="form-container">
                    <SignUpForm />
                </div></center>
            </div>
            )
    }
}

function LoginBox(){
    const [username, setUsername]=useState()
    const [password, setPassword]=useState()
    const navigate=useNavigate()
    const login=(e)=>{
        e.preventDefault()
        axios.post("https://language-translator-backend.vercel.app/login",{username, password})
        .then((result)=>{
            if (result.data==="Success"){
                window.loggedin=true
                navigate('/translatepage');
            }
            else if (result.data==="the password is incorrect"){
                alert("The password entered is incorrect.")
            }
            else if (result.data==="No record existed"){
                alert("The username is incorrect.")
            }
        })
        .catch(err=>console.log(err))
    }
    return (<div style={{display:"flex", flexDirection:"column"}}>
                <center><Logo /></center>
                <center><div className="form-container">
                    <form onSubmit={login}>
                    <h2 style={{color:"white"}}>Login</h2>
                    <div className="form-group">
                        <label className="inplabel">
                            <input
                                className="inps"
                                type="text"
                                onChange={(e)=>{setUsername(e.target.value)}}
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
                                onChange={(e)=>{setPassword(e.target.value)}}
                                required
                            />
                            <span className="placeholder">Password</span>
                        </label>
                    </div>
                    <div id="buttonholder">
                        <button className="loginbuttons" type="submit">Login</button>
                        <Link className="loginbuttons" to="/signup">Sign Up</Link>
                    </div>
                    <Outlet />
                    </form>
                </div></center>
            </div>)
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
