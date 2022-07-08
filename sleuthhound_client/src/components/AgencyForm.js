import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navigate } from "react-router-dom"
import { useNavigate } from 'react-router-dom'


import { fetchAgency} from '../actions/petsActions'

class AgencyForm extends Component {
    state = {
        email: ''                                 
    }


    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
        console.log("STATE: ", this.state)
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.fetchAgency(this.state) 
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:</label>
                    <input type='text' value={this.state.email} onChange={this.handleChange} name="email" />
                    <input type="Submit" defaultValue="View Agency" /> 
                </form>
            </div>
        );
    }
}
export default connect(null, { fetchAgency } )(AgencyForm);