import './AboutMe.css';
import Orbit from './Orbit.js';

function AboutMe(){
    return(
        <section id = "aboutMe">
            <div id="body">
                <h1 id="aboutTitle">About Me</h1>
                <p id = "aboutDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class = "orbit">
                <Orbit/>
            </div>
            
        </section>
    );
}

export default AboutMe;