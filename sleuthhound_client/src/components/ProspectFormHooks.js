import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux' 
import { fetchProspects } from '../actions/prospectActions'

const ProspectFormHooks = (props) => {
    const dispatch = useDispatch();
    const [zipcode, setZipcode] = useState("")

    const handleSubmit= (e) => {
        e.preventDefault()
        const prospects = { zipcode: zipcode, type: props.prospectType}
        dispatch(fetchProspects(prospects))
      }
    return(
        <div className="flex-container container-form">
            <form onSubmit={e => {handleSubmit(e)} }>
                <input type="hidden" value={props.prospectType}/>
                <label>Zipcode:</label><br />
                <input type='text' value={zipcode} onChange={(e) => setZipcode(e.target.value)} name="zipcode"/>
                <br />
                <input type="Submit" defaultValue="Find Prospects" /> 
            </form>
        </div>
    );
}

export default ProspectFormHooks;