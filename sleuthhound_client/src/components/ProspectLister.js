import React, { Component } from 'react'
import { useSelector } from 'react-redux'

import Button from './Button'
import ClientFormHooks from './ClientFormHooks'

const ProspectLister = () => {

    const prospects = useSelector(state => state.prospects)
    
    return (
        <div>
            {prospects.map(prospect => 
                    prospect.photos[0] !== undefined  ? 
                        <div class="flex-container prospect-lister"> 
                            <img id="prospect-image" key={prospect.id} src={prospect.photos[0].medium} alt={prospect.name}/> 
                            <h3>{prospect.name}</h3>
                            <a href={prospect.url}>View on Petfinder</a> <br/>
                            <ClientFormHooks name={prospect.name} age={prospect.age} gender={prospect.gender} pic={prospect.photos[0].large} url={prospect.url} type={prospect.species} prospectfinder_id={prospect.id} /> 
                        </div> : console.log("fail"))}
        </div>
    );  
};

export default ProspectLister;
