import PortfolioHeader from '../components/PortfolioHeader';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

function HomePage(){
    return (
        <div id="home-page">
            <PortfolioHeader/>
            <AboutMe/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default HomePage;