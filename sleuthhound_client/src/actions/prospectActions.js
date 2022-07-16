
export const fetchProspects = prospects => { 
    return dispatch => {
     fetch(`http://127.0.0.1:3001/prospects?zipcode=${prospects.zipcode}&type=${prospects.type}`,  {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    })
     .then(resp => resp.json())
     .then(prospects => dispatch({type: "FETCH_PROSPECTS", payload: prospects}))
    } 
}

export const addClient = pet => {
    return dispatch => {
     fetch('http://127.0.0.1:3001/clients', {
         method: 'POST',
         body: JSON.stringify(pet),
         headers: { 'Content-Type': 'application/json'}
     })
     .then(resp => resp.json())
     .then(client => dispatch({type: "ADD_CLIENT", payload: pet}))
    }
}

export const fetchAgency = agency => {
    return dispatch => {
     fetch(`http://127.0.0.1:3001/agency?email=${agency.email}`,  {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    })
     .then(resp => resp.json())
     .then(agency => dispatch({type: "FETCH_AGENCY", payload: agency}))
    }
}