import './ProjectPage.css';
import { useParams } from 'react-router-dom';

let projects = [
    {
        name: "Game Review",
        introduction:"In the dynamic world of video games, where every title holds a unique story and experience, there's a constant desire to share opinions, insights, and recommendations with fellow gamers. Introducing GameReview, a web and mobile application designed exclusively for gaming aficionados. Whether you're a casual player, a dedicated e-sports competitor, or simply someone who appreciates interactive storytelling, GameReview is your one-stop platform for creating, exploring, and engaging with video game reviews.",
        overview: [
            {
                feature: "User Registration and Authentication",
                description: "Users can easily sign up with their email addresses, and verify their email. Also includes secure authentication for when the user logs in."
            },
            {
                feature: "Game Review Creation",
                description: "Users can write detailed game reviews for other users to see."
            },
            {
                feature: "Game Review Exploration",
                description: "Users can browse through a wide variety of reviews that have been created by the community."
            },
            {  
                feature: "User Profile",
                description: "Every user has their own profile which displays their name, profile picture, and reviews they have written."
            },
            {
                feature: "Game Page",
                description: "Every game has its own page including a game cover, title, description, average rating, and a list of reviews users have made"
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
            <p id="project-title">{projects[name].name}</p>
            <hr/>
            <p class="project-section">Introduction</p>
            <p id="introduction">{projects[name].introduction}</p>
            <hr/>
            <p class="project-section">Project Overview</p>
            <ul>
            {
                projects[name].overview.map(feature =>{
                    return(
                        <li>
                            <div className='feature-title'>{feature.feature}</div>
                            <div className ='feature-description'>{feature.description}</div>
                            <br/>
                        </li>
                    );
                })
            }
            </ul>
            <hr/>
            <p class="project-section">Technologies Used</p>


        </div>
    );
}

export default ProjectPage;