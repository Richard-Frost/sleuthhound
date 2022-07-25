import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux' 
import { useNavigate } from 'react-router-dom'
import { addUser } from '../actions/usersActions'

const UserFormHooks = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    const handleSubmit= (e) => {
        e.preventDefault()
        const user = { name: name, email: email}
        dispatch(addUser(user))
        navigate('/home');
      }
    return(
        <div className="flex-container">
            <form onSubmit={e => {handleSubmit(e)} }>
                <label>Name:</label><br />
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} name="name"/>
                <br />
                <label>Email:</label><br />
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} name="email"/>
                <input type="Submit" defaultValue="Create User" /> 
            </form>
        </div>
    );
}

export default UserFormHooks;