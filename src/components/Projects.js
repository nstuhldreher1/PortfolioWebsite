import ProjectCard from './ProjectCard';
import './Projects.css';
import TrollFace from './Trollface.png';

const projectList = [
    {
        name : "Project",
        image : TrollFace
    }
]

function Projects(){
    return(
        <div id="projects">
            <h1 id="project-title">Projects</h1>
            <div>
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