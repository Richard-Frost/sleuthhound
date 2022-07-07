import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import ClientForm from './ClientForm'

const PetsLister = ( {pets} ) => {
    const onClick = (pet) => {console.log("pet ID: ",pet.id)}
    return (
        <div class="pets-container">
            {pets.map(pet => 
                    pet.photos[0] !== undefined  ? <div id="pets"> <img key={pet.id} src={pet.photos[0].large} alt={pet.name}/> 
                        <h3>{console.log(pet)}</h3><p>{pet.id}</p><a href={pet.url}>View on Petfinder</a>  <ClientForm name={pet.name} /><Button onClick={onClick}url={"/petadder"} text="Add to your rescue" type="add" pet_id={pet.id}/></div> : console.log("fail")
            )}
        </div>
    );  
};

const mapStateToProps = state => {
    console.log("state: ", state.animals)
    //debugger;
    return { pets: state.animals }
}

export default connect(mapStateToProps)(PetsLister)
