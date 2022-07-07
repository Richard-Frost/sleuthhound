import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navigate } from "react-router-dom"
import { useNavigate } from 'react-router-dom'


import { addUser } from '../actions/usersActions'

class UserForm extends Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        zipcode: '',
        agency_name: ''                                  
    }


    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.addUser(this.state)
        console.log(this.props.history)
        
        
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name:</label>
                    <input type='text' value={this.state.first_name} onChange={this.handleChange} name="first_name" />
                    <br />
                    <label>Last Name:</label>
                    <input type='text' value={this.state.last_name} onChange={this.handleChange} name="last_name"/>
                    <br />
                    <label>Agency Name:</label>
                    <input type='text' value={this.state.agency_name} onChange={this.handleChange} name="agency_name"/>
                    <label>Email:</label>
                    <input type='text' value={this.state.email} onChange={this.handleChange} name="email"/>
                    <br />
                    <label>Zipcode:</label>
                    <input type='text' value={this.state.zipcode} onChange={this.handleChange} name="zipcode"/>
                    <br />
                    <input type="Submit" defaultValue="Create User" /> 
                </form>
            </div>
        );
    }
}
export default connect(null, { addUser } )(UserForm);