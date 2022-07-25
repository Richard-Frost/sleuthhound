import { Component } from 'react';
//import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import ProspectForm from './ProspectForm'
import ProspectLister  from './ProspectLister'
import ProspectFormHooks from './ProspectFormHooks'

 

import dog from '../images/sleuthhound.png'
import cat from '../images/catlogo.png'



const ProspectContainer = () =>  {

    const location = useLocation() 
    const type = new URLSearchParams(location.search).get("type")
    
    return(
            <div classsName="flex-container">
                <img id="logo" src={type === 'dog' ? dog : cat}></img>
                    <ProspectFormHooks prospectType={type} />
                    <ProspectLister />
            </div>
        );
}

export default ProspectContainer;