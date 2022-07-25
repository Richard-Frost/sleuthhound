import { combineReducers } from 'redux'

import { prospectsReducer } from './prospectsReducer'
import { usersReducer } from './usersReducer'
import { agencyReducer } from './agencyReducer'

export const rootReducer = combineReducers({
    prospects: prospectsReducer,
    users: usersReducer,
    agency: agencyReducer,
})

