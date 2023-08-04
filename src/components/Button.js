import './Button.css';

function Button(props){
    return(
        <a href={props.link}><button class="btn-56">{props.name}</button></a>
    );
}

export default Button;
