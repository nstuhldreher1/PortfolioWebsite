import './ProjectPage.css';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import gamepage from './gamepage.png';
import login from './login.png';
import gamecreation from './gamecreation.png';
import userprofile from './userprofile.png';
import gamesearch from './gamesearch.png';
import reactLogo from '../components/react-color.svg';
import mongoLogo from '../components/mongodb-color.svg';
import expressLogo from '../components/express-color.svg';
import nodeLogo from '../components/nodedotjs-color.svg';
import jsLogo from '../components/javascript_24x24.png';
import htmlLogo from '../components/html_24x24.png';
import cssLogo from '../components/css_24x24.png';
let projects = [
    {
        name: "Game Review",
        introduction:"In the dynamic world of video games, where every title holds a unique story and experience, there's a constant desire to share opinions, insights, and recommendations with fellow gamers. Introducing GameReview, a web and mobile application designed exclusively for gaming aficionados. Whether you're a casual player, a dedicated e-sports competitor, or simply someone who appreciates interactive storytelling, GameReview is your one-stop platform for creating, exploring, and engaging with video game reviews.",
        link:"https://github.com/nstuhldreher1/GameReview",
        technologies: [
            {
                tech: "React",
                image: reactLogo
            },
            {
                tech: "MongoDB",
                image: mongoLogo
            },
            {
                tech: "ExpressJS",
                image: expressLogo
            },
            {
                tech: "NodeJS",
                image: nodeLogo
            },
            {
                tech: "JavaScript",
                image: jsLogo
            },
            {
                tech: "HTML",
                image: htmlLogo
            },
            {
                tech: "CSS",
                image: cssLogo
            }
        ],
        overview: [
            {
                feature: "User Registration and Authentication",
                description: "Users can easily sign up with their email addresses, and verify their email. Also includes secure authentication for when the user logs in.",
                image: login

            },
            {
                feature: "Game Review Creation",
                description: "Users can write detailed game reviews for other users to see.",
                image: gamecreation
            },
            {
                feature: "Game Review Exploration",
                description: "Users can browse through a wide variety of reviews that have been created by the community.",
                image: null
            },
            {  
                feature: "User Profile",
                description: "Every user has their own profile which displays their name, profile picture, and reviews they have written.",
                image: userprofile
            },
            {
                feature: "Game Page",
                description: "Every game has its own page including a game cover, title, description, average rating, and a list of reviews users have made",
                image: gamepage
            },
            {
                feature: "Delete and Edit",
                description: "Users can delete and edit reviews they have made.",
                image: null
            },
            {
                feature: "Search and Filter",
                description: "Users can search for specific games and users, and from there they can navigate to user profiles and game pages.",
                image: gamesearch
            }
            
        ]
    },
    {   
        name: "Contact Manager",
        introduction: "A contact manager web application",
        overview: ""

    },
    {
        name: "Portfolio Website",
        introduction: "My portfolio website",
        overview:""
    }
];
function ProjectPage(){

    const {name} = useParams();

    return(
        <div id="project-page">
            <div id="project-header"><p id="project-title">{projects[name].name}</p><Link to ='/' style={{ textDecoration: 'none' }}><p id="home-button">&lt;  Back to home</p></Link></div>

            <hr/>
            <div id="intro-header"><p class="project-section">Introduction</p><a href={projects[name].link} id="github-link">Github Link</a></div>
            <p id="introduction">{projects[name].introduction}</p>
            <hr/>
            <div id="technology-section">
                <p className="project-section">Technologies/Languages Used</p>
                <div id= "project-tech">
                {
                    projects[name].technologies.map(tech =>{
                            return(
                                <p className="tech-name">
                                    {tech.image === null ? <div></div> : <img className = "tech-image" src={tech.image} alt="" onerror="this.style.display='none'"></img>}
                                    {tech.tech}
                                </p>
                            );
                    })
                }
                </div>
            </div>
            <hr/>
            <p class="project-section">Project Overview</p>
            <ul>
            {
                projects[name].overview.map(feature =>{
                    return(
                        <div className= "feature">
                            <li>
                                <div className='feature-title'>{feature.feature}</div>
                                <div className ='feature-description'>{feature.description}</div>
                                {feature.image === null ? <div></div> : <div><img className = "feature-image" src={feature.image} alt="" onerror="this.style.display='none'"></img><br/></div>}
                                <br/>
                            </li>
                                
                            
                                
                            
                        </div>
                    );
                })
            }
            </ul>
            


        </div>
    );
}

export default ProjectPage;