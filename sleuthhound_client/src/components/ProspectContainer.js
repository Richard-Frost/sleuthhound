import React from 'react';
import { useLocation } from 'react-router-dom'
import ProspectLister  from './ProspectLister'
import ProspectFormHooks from './ProspectFormHooks'

 

import dog from '../images/sleuthhound.png'
import cat from '../images/catlogo.png'



const ProspectContainer = () =>  {

    const location = useLocation() 
    const type = new URLSearchParams(location.search).get("type")
    
    return(
            <div className="flex-container">
                <div classsName="flex-container">
                    <img id="logo" src={type === 'dog' ? dog : cat}></img>
                </div>
            <div classsName="flex-container">
                <ProspectFormHooks prospectType={type} />
                <ProspectLister />
            </div>
            
        </div>
    );
}

export default ProspectContainer;