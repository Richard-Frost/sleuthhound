import React from 'react';
import { useNavigate } from 'react-router-dom'
import ProspectContainer from './ProspectContainer'
import pic from '../images/sleuthhound.png'
import pic2 from '../images/sleuthhound_logo.png'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Button from './Button'
import AgencyContainer from './AgencyContainer'

const Home = () => {

    const navigate = useNavigate()
    return (
        <div className="flex-container">
            <div >
                <img id="logo" src={pic}></img>
                    <div class="container">
                        <Button url={"/prospectform?type=dog"} button_type={"button-dog"} text="Search for Dogs" type="dog" species="dog"/>
                        <Button url={"/prospectform?type=cat"} button_type={"button-cat"} text="Search for Cats" type="cat" species="cat"/>
                        <Button url={"/signup"} type="signup" text="Signup"/>
                        <Button url={"/agency"} type="agency" text="View your Agency" />
                        <button onClick={() => navigate(-1)}>go back</button>
                    </div>
                </div>
            </div>
    );
};

export default Home;
 
