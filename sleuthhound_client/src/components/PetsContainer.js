import { Component } from 'react';
//import React from 'react '
import { connect } from 'react-redux'

import PetsForm from './PetsForm'
import { fetchPets } from '../actions/petsActions'

class PetsContainer extends Component {

    componentDidMount() {
        this.props.fetchPets()
    }

    render() {
        return(
        <div>
            <PetsForm />
        </div>
        );
    }
}

export default connect(null , { fetchPets })(PetsContainer);