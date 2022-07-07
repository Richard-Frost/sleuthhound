export const animalReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_ANIMALS':
            return action.payload[0]
            default:
                return state    
    }

    switch(action.type){
        case 'FETCH_ANIMAL':
            return action.payload[0]
        case 'ADD_CLIENT':
            return [...state, action.payload] 
        default:
            return state    
    }
}

