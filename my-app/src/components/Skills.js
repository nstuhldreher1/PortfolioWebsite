import SkillBlock from './SkillBlock';
import './Skills.css'

let props = [
    {
        name: "Languages",
        skills: [ ["image", "C"], ["image","Java"], ["image","Python"], ["image","C#"], ["image","C++"], ["image","JavaScript"], ["image", "CSS"], ["image", "HTML"], ["image", "Haskell"]]
    }
];
function Skills(){
    return(
        <div id="skills">
            <h1 id = "skill-title">Skills</h1>
            <SkillBlock name = {props[0].name} skills = {props[0].skills}></SkillBlock>
        </div>
    );
}

export default Skills;