import Skill from "./Skill.js";
import './SkillBlock.css';

function SkillBlock(props){
    return(
        <div id= "skill-block">
            <h1 id="skill-name">{props.name}</h1>
            
            <div id="skills-">
            {/*Display the skills */}
                {props.skills.map(skill =>{
                    return(
                        <Skill image = {skill[0]} name={skill[1]}></Skill>
                    );
                })}
            </div>

        </div>
    );
}

export default SkillBlock;