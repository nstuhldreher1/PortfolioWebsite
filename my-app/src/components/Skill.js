import './Skill.css';

function Skill(prop){
    return(
        <div id= "one-skill">
            {console.log(prop.image)}
            <img src= {prop.image} alt= "" id= "images"></img><p id="name">{prop.name}</p>
        </div>
    );
}

export default Skill;