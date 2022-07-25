import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProspects } from '../actions/prospectActions'


class ProspectForm extends Component {
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
        this.props.fetchProspects(this.state)
    }
    
    render() {
        return(
            <div className="flex-container">
                <form onSubmit={this.handleSubmit}>
                <label>Type:</label><br />
                    <input type='text' value={this.props.type} onChange={this.handleChange} name="type" />
                    <br />
                    <label>Zipcode:</label><br />
                    <input type='text' value={this.state.zipcode} onChange={this.handleChange} name="zipcode"/>
                    <br />
                    <input type="Submit" defaultValue="Find Prospects" /> 
                </form>
            </div>
        );
    }
}


export default connect(null, { fetchProspects } )(ProspectForm);