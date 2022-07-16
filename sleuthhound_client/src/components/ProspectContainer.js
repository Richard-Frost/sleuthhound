import { Component } from 'react';
//import { connect } from 'react-redux'

import ProspectForm from './ProspectForm'
import ProspectLister  from './ProspectLister'
//import { fetchProspect } from '../actions/ProspectActions'
 

import pic from '../images/sleuthhound.png'
import pic2 from '../images/sleuthhound_logo.png'



class ProspectContainer extends Component {

    render() {
        return(
            <div classsName="flex-container">
                <img id="logo" src={pic}></img>
                   
                        <ProspectForm />
                        <ProspectLister />
                  
                
            
        </div>
        );
    }
}

export default ProspectContainer;