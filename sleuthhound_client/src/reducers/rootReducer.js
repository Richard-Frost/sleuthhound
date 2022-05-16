import { combineReducers } from 'redux'
import { animalReducer } from './animalReducer'
import { usersReducer } from './usersReducer'

export const rootReducer = combineReducers({
    animals: animalReducer,
    users: usersReducer
})

