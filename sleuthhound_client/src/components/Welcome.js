import React from 'react';

import pic from '../images/sleuthhound.png'
import pic2 from '../images/sleuthhound_logo.png'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Button from './Button'
import AgencyContainer from './AgencyContainer'

const Welcome = () => {

    return (
        <div class="flex-container">
                    <img id="logo" src={pic}></img>
                    <p>Is this your first visiting Sleuthhound?</p>
                    <Button url={"/about"} text="Yes tell me about Sleuthhound" type="yes"/><br/>
                    <Button url={"/home"} text="No Let Me In!" />
        </div>
    );
};

export default Welcome;