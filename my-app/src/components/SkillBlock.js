import Skill from "./Skill.js";
import './SkillBlock.css';
import React, {useEffect} from 'react';


function SkillBlock(props){
    
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    entry.target.classList.add('show');
                }
                else{
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el)=> observer.observe(el));
    }, []);
    
    return(
        <section class="skill-block hidden">
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
        </section>
    );
}


export default SkillBlock;