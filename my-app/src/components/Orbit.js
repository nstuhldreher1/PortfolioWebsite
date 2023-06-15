import './Orbit.css';

function Orbit(){
    return(
        <div id="circle-orbit-container">
            <div class = "inner-circle"></div>
            <div id="inner-orbit">
                <div class="inner-orbit-cirlces"></div>
            </div>
            <div id="middle-orbit">
                <div class="middle-orbit-cirlces"></div>
            </div>
            <div id="outer-orbit">
                <div class="outer-orbit-cirlces"></div>
            </div>
        </div>
    );
}

export default Orbit;