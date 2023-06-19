import SkillBlock from './SkillBlock';
import './Skills.css'

let props = [
    {
        name: "Languages",
        skills: [ ["image", "C"], ["image","Java"], ["image","Python"], ["image","C#"], ["image","C++"], ["image","JavaScript"], ["image", "CSS"], ["image", "HTML"], ["image", "Haskell"]]
    },
    {
        name: "Technologies",
        skills:[["image","React"], ["image", "MongoDB"], ["image", "ExpressJS"]]
    }
];
function Skills(){
    return(
        <div id="skills">
            <SkillBlock name = {props[0].name} skills = {props[0].skills}></SkillBlock>
            <SkillBlock name = {props[1].name} skills = {props[1].skills}></SkillBlock> 
        </div>
    );
}

export default Skills;