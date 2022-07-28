import { Component } from 'react';
import AgencyFormHooks from './AgencyFormHooks'
import AgencyLister from './AgencyLister'
import pic from '../images/sleuthhound.png'

const AgencyContainer = () => {

    return(
        <div className="flex-container">
            <img id="logo" src={pic}></img>
                <AgencyFormHooks />
                <AgencyLister />
        </div>                      
    );
}

export default AgencyContainer;