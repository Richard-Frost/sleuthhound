import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import dogpic from '../images/skatedog.png'
import catpic from '../images/catguitar.png'
import signup from '../images/friends.png'
import view from '../images/view.png'

const Button = props => {
    switch(props.type){
        case 'dog':
            return  <div class="btn">
                    <Link to={props.url}>
                        <button className={`button-item ${props.button_type}`} onClick={props.onClick}>
                            <img id="btn-img" src={dogpic}>
                            </img>{props.text}
                        </button>
                    </Link>
                    </div>
        case 'cat':
            return  <div class="btn">
                        <Link to={props.url}>
                        <button className={`button-item ${props.button_type}`} onClick={props.onClick}>
                            <img id="btn-img" src={catpic}>
                            </img>{props.text}
                        </button>
                        </Link>
                    </div>
        case 'signup':
            return  <div class="btn">
                        <Link to={props.url}>
                        <button className={`button-item ${props.button_type}`} onClick={props.onClick}>
                            <img id="btn-img" src={signup}>
                            </img>{props.text}
                        </button>
                        </Link>
                    </div>
        case 'agency':
            return  <div class="btn">
                        <Link to={props.url}>
                        <button className={`button-item ${props.button_type}`} onClick={props.onClick}>
                            <img id="btn-img" src={view}>
                            </img>{props.text}
                                    </button>
                                    </Link>
                                </div>
        default: 
            return <div class="btn">
                        <Link to={props.url}>
                            <button className={`button-item ${props.button_type}`} onClick={props.onClick}>
                                {props.text}
                            </button>
                        </Link>
                    </div>
    }
}
export default Button; 