import { Component } from 'react';
import React from 'react '

import { fetchPets } from '../actions/petActions'

class AnimalsContainer extends Component {

    componentDidMount() {
        this.props.fetchPets
    }
    render() {
        <div> this.props.state </div>
    }
}

export default connect(null, { fetchPets })(AnimalsContainer);