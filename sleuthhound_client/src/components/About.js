import React from 'react';
import pic from '../images/sleuthhound.png'
import Button from './Button'

const About = () => {

    return (
        <div className="flex-container ">
            <img id="logo" src={pic}></img>
            <h3>Welcome to Sleuthhound!</h3>
            <div className="container-plain">
                <p>Sleuthhound is a place where you become a pet dective searching for humans and furever homes for your furry clients. </p><br/>
                <Button url={"/home"} text="Enter" type="enter"/>
            </div>
        </div>
    );
};

export default About;