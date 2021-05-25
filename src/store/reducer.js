/*
  this is the main reducer or we can say this main reducer file is the "small" reducers' God

*/

import {combineReducers} from 'redux'

import {
  reducer as cookbookReducer
} from '../home/cookbook/index'

import { reducer as homeReducer } from '../home/index'
import { reducer as categoryReducer} from '../home/category/index'

// combine the 'child' reducers into a main steam reducer
// 一旦挂上去， 就可以在任何地方使用了。（因为这个rootReducer 定义在store文件夹下面）
const rootReducer = combineReducers({
  // cookbook: cookbook
  cookbookReducer,
  homeReducer,
  categoryReducer
})

export default rootReducer