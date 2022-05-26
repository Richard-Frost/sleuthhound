
export const fetchPets = pets => {
    return dispatch => {
     fetch('http://127.0.0.1:3001/pets',  {
        method: 'POST',
        body: JSON.stringify(pets),
        headers: { 'Content-Type': 'application/json'}
    })
     .then(resp => resp.json())
     .then(pets => dispatch({type: "FETCH_PETS", payload: pets}))
    }

 }