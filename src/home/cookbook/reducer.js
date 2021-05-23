import { LOAD_DATA } from './actionTypes'

const defaultState = {
  list: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case LOAD_DATA:
      return {
        list: action.list
      }

    default:
      return state
  }
}

export default reducer