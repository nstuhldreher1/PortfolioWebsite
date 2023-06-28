import './AboutMe.css';
import Button from './Button.js';

let buttons = [
    {name: "GitHub"},
    {name: "LinkedIn"},
    {name: "Resume"}
];

function AboutMe(){
    return(
        <section id = "aboutMe">
            <div id="body" class="inline-block">
                <h1 id="aboutTitle">About Me</h1>
                <p id = "aboutDescription">Bonerem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            
            <div id="links" class="inline-block">
                <Button name= {buttons[0].name}></Button>
                <Button name = {buttons[1].name}></Button>
                <Button name = {buttons[2].name}></Button>
            </div>
            

        </section>
    );
}

export default AboutMe;