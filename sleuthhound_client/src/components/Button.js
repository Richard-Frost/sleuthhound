import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'

const Button = props => (
        <div class="btn">
            <Link to={props.url}>
                <button onClick={props.onClick}>
                    {props.text}
                </button>
            </Link>
        </div>
)
export default Button; 