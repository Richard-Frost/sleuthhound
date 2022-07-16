export const prospectsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_PROSPECTS':
            return action.payload[0]
        case 'ADD_CLIENT':
            return [...state, action.payload]
        default:
            return state    
    }

    //switch(action.type){
      //  case 'FETCH_ANIMAL':
        //    return action.payload[0]
        //case 'ADD_CLIENT':
          //  return [...state, action.payload]
            
        //default:
          //  return state    
 //   }
}

