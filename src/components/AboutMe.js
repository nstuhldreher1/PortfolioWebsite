import './AboutMe.css';
import Button from './Button.js';

let buttons = [
    {
        name: "GitHub",
        link: "https://github.com/nstuhldreher1"
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/nickstuhldreher/"
    },
    {
        name: "Resume",
        link: "Resume.pdf"
    }
];

function AboutMe(){
    return(
        <section id = "aboutMe">
            <div id="body" class="inline-block">
                <h1 id="aboutTitle">About Me</h1>
                <p id = "aboutDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            
            <div id="links" class="inline-block">
                <a href = {buttons[0].link} class="buttons" target="_blank" rel="noreferrer noopener" ><Button name= {buttons[0].name} ></Button></a>
                <a href = {buttons[1].link} class="buttons" target="_blank" rel="noreferrer noopener" ><Button name = {buttons[1].name} class= "buttons"></Button></a>
                <a href = {buttons[2].link}  class="buttons" target="_blank" rel="noreferrer noopener"><Button name = {buttons[2].name} class= "buttons"></Button></a>
            </div>
            

        </section>
    );
}

export default AboutMe;