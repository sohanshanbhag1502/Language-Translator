import React from "react";
import "../styling/BodyHome.css"
import NavBar from "./NavBar.jsx"
import FootBar from "./FootBar.jsx"

window.onscroll=()=>{scrollfunc()}

function scrollfunc(){
    var ele=document.getElementById("portable")
    if (ele.checkVisibility()==true){
        ele.setAttribute("class", "featurerightdescdiv featurediv featurerightdiv featurerightdescslidediv")
    }
}

class Feature extends React.Component{
    render(){
        if (this.props.dir==="left")
            if (this.props.feature=="Faster") 
                return (
                        <div className="featurerightdescslidediv featurerightdescdiv featurediv featurerightdiv">
                            <div className="featurerightimgdiv">
                                <img src={this.props.img} className="featureimg"/>
                            </div>
                            <div>
                                <h3 className="featurehead">{this.props.feature}</h3>
                                <p className="featuredesc">{this.props.desc}</p>
                            </div>
                        </div>
                )
            else
                return (
                    <div className="featurerightdescdiv featurediv featurerightdiv" id="portable">
                        <div className="featurerightimgdiv">
                            <img src={this.props.img} className="featureimg"/>
                        </div>
                        <div>
                            <h3 className="featurehead">{this.props.feature}</h3>
                            <p className="featuredesc">{this.props.desc}</p>
                        </div>
                    </div>
                )
        else
            return (
                <div className="featurediv">
                    <div className="featureleftdescslidediv featureleftdescdiv">
                        <p className="featurehead">{this.props.feature}</p>
                        <p className="featuredesc">{this.props.desc}</p>
                    </div>
                    <div className="featureleftimgdiv">
                        <img src={this.props.img} className="featureimg"/>
                    </div>
                </div>
            )
    }
}

export class FeatureList extends React.Component{
    render(){
        return(
            <div>
                <Feature dir="left" img="faster.png" feature="Faster" desc="Convert the languages on the go."/>
                <Feature dir="right" img="smooth.png" feature="Smoother" desc="Experience smooth animations
while navigating through the website."/>
                <Feature dir="left" img="portable.png" feature="Portable" desc="Convert the languages regardless of device you are using."/>
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