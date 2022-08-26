import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import dogpic from '../images/skatedog.png'
import catpic from '../images/catguitar.png'
import signup from '../images/friends.png'
import view from '../images/view.png'

const icon = (pic) => {
    if (pic === "button-dog") {
        return dogpic
    } else if (pic === "button-cat") {
        return catpic
    } else if (pic === "signup") {
        return signup
    } else if (pic === "agency") {
        return view
    }
}

const Button = props => {
            return  <div class="btn">
                    <Link to={props.url}>
                        <button className={`button-item ${props.button_type}`} onClick={props.onClick}>
                            <img id="btn-img" src={icon(props.button_type)}>
                            </img>{props.text}
                        </button>
                    </Link>
                    </div>
}
export default Button; 