import {CHANGE_SWITCH} from './actionTypes'

const defaultState = {
  // get the saved value way 1
  // checked: localStorage.getItem('checked') === 'true' ? 'true' : false
  checked: JSON.parse(localStorage.getItem('checked'))
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_SWITCH:
      return {
        checked: action.checked
      }
    default:
      return state
  }
}

export default reducer