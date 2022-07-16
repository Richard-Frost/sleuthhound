import React from 'react';

import ProspectContainer from './ProspectContainer'
import pic from '../images/sleuthhound.png'
import pic2 from '../images/sleuthhound_logo.png'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Button from './Button'
import AgencyContainer from './AgencyContainer'

const Home = () => {

    return (
        <div className="flex-container">
            <div classsName="flex-container">
                <img id="logo" src={pic}></img>
                    <div class="container">
                        <Button url={"/prospectform"} button_type={"button-dog"} text="Search for Dogs" type="dog"/>
                        <Button url={"/prospectform"} button_type={"button-cat"} text="Search for Cats" type="cat" />
                        <Button url={"/signup"} type="signup" text="Signup"/>
                        <Button url={"/agency"} text="View your Agency" />
                    </div>
                </div>
            </div>
    );
};

export default Home;
 
