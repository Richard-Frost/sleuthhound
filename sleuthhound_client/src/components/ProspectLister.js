import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import ClientForm from './ClientForm'

const ProspectLister = ( {prospects} ) => {
   
    return (
        <div>
            {prospects.map(prospect => 
                    prospect.photos[0] !== undefined  ? 
                        <div class="flex-container prospect-lister"> 
                            <img id="prospect-image" key={prospect.id} src={prospect.photos[0].large} alt={prospect.name}/> 
                            <h3>{prospect.name}</h3>
                            <a href={prospect.url}>View on Petfinder</a> <br/>
                            <ClientForm name={prospect.name} age={prospect.age} gender={prospect.gender} pic={prospect.photos[0].large} url={prospect.url} type={prospect.species} prospectfinder_id={prospect.id} /> 
                        </div> : console.log("fail"))}
        </div>
    );  
};

const mapStateToProps = state => {
    return { prospects: state.prospects }
}

export default connect(mapStateToProps)(ProspectLister)
