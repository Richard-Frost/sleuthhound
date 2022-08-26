import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
    const location = useLocation();
    console.log("l",location)

    if (location.pathname !== '/') {
        return (
            <div id='footer'>
                <footer><button onClick={() => navigate(-1)}>go back</button></footer>
            </div>
        );}
    };

export default Footer;