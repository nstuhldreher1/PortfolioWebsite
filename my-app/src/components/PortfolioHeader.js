import './PortfolioHeader.css';
import Orbit from './Orbit.js';
function PortfolioHeader(){
    return(
        <section id= "portheader">
            <div id="header">
                <h1 id="title">Hey, my name is Nick Stuhldreher.</h1>
                <p id="description"> Welcome to my portfolio website. I'm a computer science student with a passion for developing software applications. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div id = "orbit">
                <Orbit/>
            </div>
        </section>
    );
}

export default PortfolioHeader;