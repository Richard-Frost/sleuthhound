import React from 'react';
import { useNavigate } from 'react-router-dom'
//import {BrowserRouter as Router, Link} from 'react-router-dom'
import pic from '../images/sleuthhound.png'
import pic2 from '../images/sleuthhound_logo.png'
import Button from './Button'

const Home = () => {

    const navigate = useNavigate()
    return (
        <div className="flex-container">
            <div >
                <img id="logo" src={pic}></img>
                <div class="container">
                    <Button url={"/prospectform?type=dog"} button_type={"button-dog"} text="Search for Dogs" type="dog" species="dog"/>
                    <Button url={"/prospectform?type=cat"} button_type={"button-cat"} text="Search for Cats" type="cat" species="cat"/>
                    <Button url={"/signup"} type="signup" button_type={"signup"} text="Signup"/>
                    <Button url={"/agency"} type="agency" button_type={"agency"} text="View your Agency" />
                </div>
            </div>
        </div>
    );
};

export default Home;
 
