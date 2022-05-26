import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addUser } from '../actions/usersActions'

class UserForm extends Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
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
        this.props.addUser(this.state)
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