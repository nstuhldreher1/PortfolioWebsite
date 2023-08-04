import ProjectCard from './ProjectCard';
import './Projects.css';
import GameReview from './GameReview.svg';
import ContactManager from './ContactManager.svg';
import PortfolioWebsite from './PortfolioWebsite.svg';
const projectList = [
    {
        name : "Game Review",
        image : GameReview
    },
    {
        name: "Contact Manager",
        image: ContactManager
    },
    {
        name:"Portfolio Website",
        image: PortfolioWebsite
    }
]

function Projects(){
    return(
        <div id="projects">
            <div id="projectList">
                {
                    projectList.map(project => {
                        return(
                            <ProjectCard name={project.name} cover={project.image}/>
                        );
                    })
                }
                
            </div>
        </div>
    );
}

export default Projects;