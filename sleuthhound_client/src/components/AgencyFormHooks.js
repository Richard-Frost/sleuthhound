import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux' 
import { useNavigate } from 'react-router-dom'
import { fetchAgency} from '../actions/prospectActions'

const AgencyFormHooks = (props) => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const onSubmit = (e) => {
        e.preventDefault();
        const agency = {email: email}
        dispatch(fetchAgency(agency))
    }

    return(
        <div className="flex-container">
            <form onSubmit={e => {handleSubmit(e)} }>
                <label>Email:</label>
                <input type='text' value={this.state.email} onChange={this.handleChange} name="email" />
                <input type="Submit" defaultValue="View Agency" /> 
            </form>
        </div>
    );
}

export default AgencyFormHooks;