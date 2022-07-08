import { combineReducers } from 'redux'

import { animalReducer } from './animalReducer'
import { usersReducer } from './usersReducer'
import { agencyReducer } from './agencyReducer'

export const rootReducer = combineReducers({
    animals: animalReducer,
    users: usersReducer,
    agency: agencyReducer
})

