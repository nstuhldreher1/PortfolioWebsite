import './ProjectCard.css';

function ProjectCard(props){
    return (
        <div className="card">
            <p title="gameTitle" id="cardGameTitle">{props.name}</p>
            <img id="cardImage" src={props.cover} alt="Game cover art."></img>
            
        </div>
    );
}

export default ProjectCard;