export const animalReducer = (state = {}, action) => {
    switch(action.type){
        case 'FETCH_ANIMALS':
            return action.payload
            default:
                return state    
    }
}