import {React, useState} from "react"
import First from "../App.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutPage from "./AboutPage.jsx"
import TranslatePage from "./TranslatePage.jsx"
import ErrorPage from "./ErrorPage.jsx"
import Home from "./Home.jsx"
import {LoginPage, SignUpPage} from "./Login_Page.jsx"

function Main(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<First />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/translatepage" element={<TranslatePage />}/>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/*" element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Main