import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navigate } from "react-router-dom"
import { useNavigate } from 'react-router-dom'


import { addClient } from '../actions/prospectActions'

class ClientForm extends Component {
    state = {
        email: '',
        name: this.props.name,
        age: this.props.age,
        gender: this.props.gender,
        url: this.props.url,
        pic: this.props.pic,
        type: this.props.type,
        petfinder_id: this.props.petfinder_id                                  
    }


    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.addClient(this.state)
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:</label>
                    <input type='text' value={this.state.email} onChange={this.handleChange} name="email" />
                    <input type="Submit" defaultValue="Add Client" /> 
                </form>
            </div>
        );
    }
}
export default connect(null, { addClient } )(ClientForm);