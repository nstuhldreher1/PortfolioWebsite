import ProjectCard from './ProjectCard';
import './Projects.css';
import GameReview from './GameReview.svg';
import ContactManager from './ContactManager.svg';
import PortfolioWebsite from './PortfolioWebsite.svg';
import {Link} from 'react-router-dom';

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