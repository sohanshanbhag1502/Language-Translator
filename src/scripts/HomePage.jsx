import React from "react"
import NavBar from "./NavBar"
import FootBar from "./FootBar"
import FeatureList from "./Body_Home"

class PostIntro extends React.Component{
    render(){
        return(
            <div id="mainbody">
                <header>
                    <NavBar />
                </header>
                <main>
                    <FeatureList />
                </main>
                <footer>
                    <FootBar />
                </footer>
            </div>
        )
    }
}

export default PostIntro