const defaultState = {
  list: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'loadData':
      return {
        list: action.list
      }

    default:
      return state
  }
}

export default reducer