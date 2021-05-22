import { createStore } from 'redux'
import reducer from './reducer'

// createStore has 3 params

const store = createStore(reducer)

// go to index.js and import store
export default store