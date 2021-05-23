import { createStore, applyMiddleware} from 'redux'
import rootReducer  from './reducer'
import thunk from 'redux-thunk'

// createStore has 3 params

const store = createStore(rootReducer, applyMiddleware(thunk))

// go to index.js and import store
export default store