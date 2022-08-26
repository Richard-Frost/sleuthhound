import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux' 
import { useNavigate } from 'react-router-dom'
import { addUser } from '../actions/usersActions'
import dog from '../images/sleuthhound.png'

const UserFormHooks = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    
    const handleSubmit= (e) => {
        e.preventDefault()
        const user = { email: email }
        dispatch(addUser(user))
        navigate('/home');
      }
    return(
        <div className="flex-container">
            <img id="logo" src={dog}></img>
            <div className="flex-container container-form">
            <form onSubmit={e => {handleSubmit(e)} }>
                <br />
                <label>Email:</label><br />
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} name="email"/>
                <input type="Submit" defaultValue="Create User" /> 
            </form>
            </div>
        </div>
    );
}

export default UserFormHooks;