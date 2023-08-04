import './ProjectCard.css';

function ProjectCard(props){
    return (
        <div className="card">
            
            <img id="cardImage" src={props.cover} alt="Game cover art."></img>
            <p title="gameTitle" id="cardGameTitle">{props.name}</p>
            
        </div>
    );
}

export default ProjectCard;