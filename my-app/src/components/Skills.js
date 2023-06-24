import SkillBlock from './SkillBlock';
import './Skills.css';
import cLogo from './c_24x24.png';
import cppLogo from './cpp_24x24.png';
import javaLogo from './java_24x24.png';
import pythonLogo from './python_24x24.png';
import jsLogo from './javascript_24x24.png';
import htmlLogo from './html_24x24.png';
import cssLogo from './css_24x24.png';
import reactLogo from './react-color.svg';
import mongoLogo from './mongodb-color.svg';
import expressLogo from './express-color.svg';
import vscodeLogo from './visualstudiocode-color.svg';
import intellijLogo from './intellijidea-color.svg';
import pycharmLogo from './pycharm-color.svg';
import mysqlLogo from './mysql-color.svg';
import excelLogo from './microsoftexcel-color.svg';
import ppLogo from './microsoftpowerpoint-color.svg';
import photoshopLogo from './adobephotoshop-color.svg';
import indesignLogo from './adobeindesign-color.svg';
import illustratorLogo from './adobeillustrator-color.svg';
import figmaLogo from './figma-color.svg';
import gitLogo from './git-color.svg';

let blocks = [
    {
        name: "Languages",
        skills: [ [cLogo, "C"], [javaLogo,"Java"], [pythonLogo,"Python"], [cppLogo,"C++"], [jsLogo,"JavaScript"], [cssLogo, "CSS"], [htmlLogo, "HTML"]]
    },
    {
        name: "Technologies",
        skills:[[reactLogo,"React"], [mongoLogo, "MongoDB"], [expressLogo, "ExpressJS"], [vscodeLogo, "Visual Studio Code"], [intellijLogo, "IntelliJ"], [pycharmLogo, "PyCharm"], [mysqlLogo, "MySQL"]]
    },
    {
        name: "Additional Software",
        skills: [[excelLogo, "Excel"], [ppLogo, "Powerpoint"], [photoshopLogo, "Photoshop"], [indesignLogo, "Indesign"], [illustratorLogo, "Illustrator"], [figmaLogo, "Figma"], [gitLogo, "Git"]]
    }
];
function Skills(){
    return(
        <div id="skills">
            <SkillBlock name = {blocks[0].name} skills = {blocks[0].skills}></SkillBlock>
            <SkillBlock name = {blocks[1].name} skills = {blocks[1].skills}></SkillBlock> 
            <SkillBlock name = {blocks[2].name} skills = {blocks[2].skills}></SkillBlock>
        </div>
    );
}

export default Skills;