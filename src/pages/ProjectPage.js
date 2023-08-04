import './ProjectPage.css';
import { useParams } from 'react-router-dom';

let projects = [
    {
        name: "Game Review"
    },
    {   
        name: "Contact Manager"
    },
    {
        name: "Portfolio Website"
    }
];
function ProjectPage(){

    const {name} = useParams();

    return(
        <div id="project-page">
            <h1>{projects[name].name}</h1>
        </div>
    );
}

export default ProjectPage;