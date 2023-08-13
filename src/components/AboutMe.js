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
                <p id = "aboutDescription">I'm currently a computer science student at the University of Central Florida. Here I've gained a variety of skills some including machine learning, database design, web development, mobile app development, and a strong foundation of data structures and algorithms. I've also worked on a variety of projects in my free time from websites to rockets where I've gained more practical knowledge. When I'm not in school or working on projects I enjoy being with friends, watching movies, and playing guitar.  </p>
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