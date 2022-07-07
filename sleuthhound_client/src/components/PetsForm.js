import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPets } from '../actions/petsActions'


class PetsForm extends Component {
    state = {
        type: '',
        zipcode: ''     
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.fetchPets(this.state)
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Type:</label><br />
                    <input type='text' value={this.props.type} onChange={this.handleChange} name="type" />
                    <br />
                    <label>Zipcode:</label><br />
                    <input type='text' value={this.state.zipcode} onChange={this.handleChange} name="zipcode"/>
                    <br />
                    <input type="Submit" defaultValue="Find Pets" /> 
                </form>
            </div>
        );
    }
}
export default connect(null, { fetchPets } )(PetsForm);