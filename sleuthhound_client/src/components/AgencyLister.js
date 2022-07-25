import React, { Component } from 'react'
import { useSelector } from 'react-redux'



const AgencyLister = () => {

    const agency = useSelector(state => state.agency)
  
    return (
        <div>
            {agency.map( client => <div class="flex-container prospect-lister">
                <img id="prospect-image" key={client.id} src={client.pic} alt={client.name}/>
                <p>name: {client.name}</p> 
                <a href={client.url}>View on Petfinder</a><br /></div>) }
                
        </div>
    );  
};

export default AgencyLister;
