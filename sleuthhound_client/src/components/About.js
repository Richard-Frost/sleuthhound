import React from 'react';


import pic from '../images/sleuthhound.png'
import pic2 from '../images/sleuthhound_logo.png'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Button from './Button'

const About = () => {

    return (
        <div className="flex-container container-plain">
            
            <img id="logo" src={pic}></img>
                <h3>Welcome to Sleuthhound!</h3><br/>
                <p>This is a place to become a pet detective and help find furever homes for dogs and cats. Browse through available dogs and cats in your blah blah blah blah blah blah blah blah blah blah blah blah blah blah </p>
                <Button url={"/home"} text="Enter" type="enter"/>
        </div>
    );
};

export default About;