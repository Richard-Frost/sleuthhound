import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux' 
import { useNavigate } from 'react-router-dom'
import { fetchAgency} from '../actions/prospectActions'

const AgencyFormHooks = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const agency = {email: email}
        dispatch(fetchAgency(agency))
    }

    return(
        <div className="flex-container">
            <form onSubmit={e => {handleSubmit(e)} }>
                <label>Email:</label>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} name="email" />
                <input type="Submit" defaultValue="View Agency" /> 
            </form>
        </div>
    );
}

export default AgencyFormHooks;

