import React from "react";
import "../styling/BodyHome.css"
import NavBar from "./NavBar.jsx"
import FootBar from "./FootBar.jsx"

class Feature extends React.Component{
    render(){
        return (
                <div className="featurediv">
                    <div className="featureimgdiv">
                        <img src={this.props.img} className="featureimg"/>
                    </div>
                    <div className="featuredescdiv">
                        <h3 className="featurehead">{this.props.feature}</h3>
                        <p className="featuredesc">{this.props.desc}</p>
                    </div>
                </div>
        )
    }
}

export class FeatureList extends React.Component{
    render(){
        return(
            <div>
                <center><h1 id="first">Our Features</h1></center>
                <Feature img="../../public/faster.png" feature="Faster" desc="Convert the languages on the go."/>
                <Feature img="../../public/smooth.png" feature="Smoother" desc="Experience smooth animations
while navigating through the website."/>
                <Feature img="../../public/portable.png" feature="Portable" desc="Convert the languages regardless of device you are using."/>
            </div>
        )
    }
}

function Home(){
    return(
        <div id="mainbody">
            <header>
                <NavBar/>
            </header>
            <main>
                <div id="backgroundhome"></div>
                <FeatureList />
            </main>
            <footer>
                <FootBar />
            </footer>
        </div>
    )
}

export default Home;