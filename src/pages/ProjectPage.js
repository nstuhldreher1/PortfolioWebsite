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
import mysqlLogo from '../components/mysql-color.svg';
import phpLogo from '../components/php_24x24.png';
import portfolio from './portfolio.png';
import cppLogo from '../components/cpp_24x24.png';
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
        introduction: "Welcome to Contact Manager a web application for effortlessly managing your contacts with utmost convenience and efficiency. Whether you're a business professional, a social butterfly, or someone who simply values staying connected, Contact Manager is designed to streamline your contact management experience.",
        link: "https://github.com/miguelperson/COP4331Project1",
        technologies:[
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
            },
            {
                tech: "PHP",
                image: phpLogo
            },
            {
                tech: "MySQL",
                image: mysqlLogo
            }
        ],
        overview: [
            {
                feature: "User Registration and Authentication",
                description: "Users can signup by creating a username and password. Once they've created an account they will have the ability to login",
                image: null
            },
            {
                feature: "Create and Edit Contacts",
                description: "Users can create new contacts as well as update previously saved contacts.",
                image: null
            },
            {
                feature: "Delete Contacts",
                description: "Users can delete contacts from their contact list where they will then be prompted to confirm deletion.",
                image: null
            },
            {
                feature: "Search and Filtering",
                description: "Users can search for contacts in their contact book by name.",
                image: null
            },
            {
                feature: "User Friendly Dashboard",
                description: "The dashboard provides an overview of the user's contact list and relevant actions. Icons, buttons, and labels are designed to be intuitive and easy to understand."
            }
        ]

    },
    {
        name: "Portfolio Website",
        introduction: "This portfolio is a curated showcase of my journey through the landscape of software development, highlighting my skills, projects, and accomplishments.",
        link: "https://github.com/nstuhldreher1/PortfolioWebsite",
        technologies: [
            {
                tech: "React",
                image: reactLogo
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
        overview:[
            {
                feature: "Project Showcase",
                description: "A showcase of all the projects I've worked on that gives an introduction, shows the technologies used, and gives an overview of the project. Provides a link to the code on github.",
                image: null
            },
            {
                feature: "User Friendly Dashboard",
                description: "Easy to navigate the website with a user friendly user interface.",
                image: portfolio
            },
            {
                feature: "Skills and Expertise",
                description: "Showcases languages and software that I am proficient in.",
                image: null
            }
        ]
    },

    {
        name:"GLEE",
        introduction: "A ChipSat associated with radio club for the Great Lunar Expedition for Everyone. GLEE is a mission involving many teams from across the globe. As one of those teams we developed a LunaSat which will be deployed to the moon in 2023. A technology initially developed by a team at Cornell University to drastically cutdown the costs of spaceflight and exploration. The LunaSat will collect data from the moon with a variety of different sensors including temperature, magnetic field, and inertial measurements. That data will then be sent back to earth.",
        link: "https://github.com/nstuhldreher1/GLEE-UCF",
        technologies:[
            {
                tech:"C++",
                image: cppLogo
            }
        ],
        overview:[
            {
                feature: "Temperature Sensor",
                description: "A sensor to measure temperature on the moons surface.",
                image: null
            },
            {
                feature: "Accelerometer",
                description: "An accelerometer to measure motion or potential moonquakes on the moons surface",
                image: null
            },
            {
                feature: "Capacitive Sensor",
                description: "A capacitive sensor to measure the dielectric constant of lunar regolith.",
                image: null
            },
            {
                feature: "Thermopile",
                description: "A thermopile to measure temperature with infared.",
                image: null
            },
            {
                feature: "Magnetometer",
                description: "A magnetometer to measure magnetic field on the moons surface.",
                image: null
            },
            {
                feature: "Radio Frequency System",
                description: "A radio frequency system that allows the LunaSat to send data remotely",
                image: null
            }
        ]

    }
];
function ProjectPage(){

    const {name} = useParams();

    return(
        <div id="project-page">
            <div id="project-header"><p id="project-title">{projects[name].name}</p><Link to ='/' style={{ textDecoration: 'none' }}><p id="home-button">&lt;  Back to home</p></Link></div>

            <hr/>
            <div id="intro-header"><p class="project-section">Introduction</p><a href={projects[name].link} id="github-link" target="_blank" rel="noreferrer noopener">Github Link</a></div>
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