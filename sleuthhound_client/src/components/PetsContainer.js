import { Component } from 'react';
//import React from 'react '
import { connect } from 'react-redux'

import PetsForm from './PetsForm'
import PetsLister  from './PetsLister'
import { fetchPets } from '../actions/petsActions'


import pic from '../images/sleuthhound.png'
import pic2 from '../images/sleuthhound_logo.png'



class PetsContainer extends Component {

    render() {
        return(
        <div>
             <div id='logo'>
                <img src={pic}></img>
                <img src={pic2}></img>
            </div>
            <div id='pets-container'>
                <PetsForm />
            </div>
            <div id="pets-lister">
                <PetsLister />
            </div>
        </div>
        );
    }
}

export default PetsContainer;