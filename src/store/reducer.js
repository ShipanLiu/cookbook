/*
  this is the main reducer or we can say this main reducer file is the "small" reducers' God

*/

import {combineReducers} from 'redux'

import {
  reducer as cookbookReducer
} from '../home/cookbook/index'


// combine the 'child' reducers into a main steam reducer
const rootReducer = combineReducers({
  // cookbook: cookbook
  cookbookReducer
})

export default rootReducer