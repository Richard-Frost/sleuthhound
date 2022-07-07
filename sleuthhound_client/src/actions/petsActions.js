
export const fetchPets = pets => {
    return dispatch => {
     fetch('http://127.0.0.1:3001/pets',  {
        method: 'POST',
        body: JSON.stringify(pets),
        headers: { 'Content-Type': 'application/json'}
    })
     .then(resp => resp.json())
     .then(pets => dispatch({type: "FETCH_ANIMALS", payload: pets}))
    }
    
}

export const fetchPet = pet => {
    return dispatch => {
     fetch('http://127.0.0.1:3001/pet',  {
        method: 'POST',
        body: JSON.stringify(pet),
        headers: { 'Content-Type': 'application/json'}
    })
     .then(resp => resp.json())
     .then(pet => dispatch({type: "FETCH_ANIMAL", payload: pet}))
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