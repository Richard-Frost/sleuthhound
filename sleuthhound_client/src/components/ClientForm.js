import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navigate } from "react-router-dom"
import { useNavigate } from 'react-router-dom'


import { addClient } from '../actions/petsActions'

class ClientForm extends Component {
    state = {
        email: '',
        name: '',
        age: '',
        sex: '',
        url: '',
        pic: '',
        type: '',
        petfinder_id: ''                                  
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
        //this.props.navigation    
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:</label>
                    <input type='text' value={this.state.email} onChange={this.handleChange} name="email" />
                    
                    <input type='hidden' value={this.props.name} onChange={this.handleChange} name="name" />
                    <input type='hidden' value={this.state.gender} onChange={this.handleChange} name="gender" />
                    <input type='hidden' value={this.props.petfinder_id} onChange={this.handleChange} name="petfinder_id" />
                    <input type='hidden' value={this.props.pic} onChange={this.handleChange} name="pic" />
                    <input type='hidden' value={this.props.type} onChange={this.handleChange} name="type" />
                    <input type="Submit" defaultValue="Add Client" /> 
                </form>
            </div>
        );
    }
}
export default connect(null, { addClient } )(ClientForm);