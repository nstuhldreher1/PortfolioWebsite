import ProjectCard from './ProjectCard';
import './Projects.css';
import GameReview from './GameReview.svg';
import ContactManager from './ContactManager.svg';
import PortfolioWebsite from './Contact.svg';
import GLEE from './glee.svg';
import compiler from './compiler.svg';
import {Link} from 'react-router-dom';
import rocket from './rocket.svg';

const projectList = [
    {
        name : "Game Review",
        image : GameReview,
        id: 0
    },
    {
        name: "Contact Manager",
        image: ContactManager,
        id: 1
    },
    {
        name:"Portfolio Website",
        image: PortfolioWebsite,
        id: 2
    },
    {
        name:"GLEE",
        image: GLEE,
        id: 3
    },
    {
        name: "PL/0 Compiler",
        image: compiler,
        id: 4
    },
    {
        name: "Acanthis Rocket",
        image: rocket,
        id: 5
    }
    
]

function Projects(){
    
    return(
        <div id="projects">
            <div id="projectList">
                {
                    projectList.map(project => {
                        return(
                            <Link to={`/project/${project.id}`} style={{ textDecoration: 'none' }}>
                                <ProjectCard name={project.name} cover={project.image}/>
                            </Link>
                        );
                    })
                }
                
            </div>
        </div>
    );
}

export default Projects;