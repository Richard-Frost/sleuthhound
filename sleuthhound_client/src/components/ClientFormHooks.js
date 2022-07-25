import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux' 
import { useNavigate } from 'react-router-dom'
import { addClient } from '../actions/prospectActions'

const ClientFormHooks = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("")             
    const handleSubmit= (e) => {
        e.preventDefault()
        const client = { 
            email: email,
            name: props.name,
            age: props.age,
            gender: props.gender,
            url: props.url,
            pic: props.pic,
            type: props.type,
            petfinder_id: props.petfinder_id
        }
        dispatch(addClient(client))
        navigate('/home');
      }
    return(
        <div>
            <form onSubmit={e => {handleSubmit(e)} }>
                <label>Email:</label><br />
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} name="email"/>
                <input type="Submit" defaultValue="Add Client" /> 
            </form>
        </div>
    );
}

export default ClientFormHooks;