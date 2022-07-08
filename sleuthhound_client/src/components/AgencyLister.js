import React, { Component } from 'react'
import { connect } from 'react-redux'



const AgencyLister = ( {agency} ) => {
  
    return (
        <div class="pets-container">
            <h1>helllo?</h1>
            {agency.map( client => <div id="pets"><p>name: {client.name}</p> <img key={client.id} src={client.pic} alt={client.name}/></div>) }
           
    
        </div>
    );  
};







const mapStateToProps = state => {
    //console.log(state.agency)
    return { agency: state.agency }
}

export default connect(mapStateToProps)(AgencyLister)


//{clients.map( client => 
//    client.photos[0] !== undefined  ? <div id="clients"> <img key={client.id} src={client.photos[0].large} alt={client.name}/> 
//        <h3>{console.log(client)}</h3><p>{client.id}</p><a href={client.url}>View on clientfinder</a>  <ClientForm name={client.name} age={client.age} gender={client.gender} pic={client.photos[0].large} url={client.url} type={client.species} clientfinder_id={client.id} /></div> : console.log("fail")
//)}