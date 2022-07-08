import React from 'react';

import PetsContainer from './PetsContainer'
import pic from '../images/sleuthhound.png'
import pic2 from '../images/sleuthhound_logo.png'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Button from './Button'
import AgencyContainer from './AgencyContainer'

const Home = () => {

    return (
        <div>
            <div id='logo'>
                <img src={pic}></img>
                <img src={pic2}></img>
            </div>
            <div class="container">
                <Button url={"/petsform"} text="Dogs" type="dog"/>
                <Button url={"/petsform"} text="Cat" type="cat" />
                <Button url={"/signup"} text="Signup - Become a Sleuthound" />
                <Button url={"/agency"} text="View your Agency" />
            </div>
        </div>
    );
};

export default Home;
 
