//the user log should be saved and have a easy go back

const defaultState = {
  routeInfo: {
    // save footbar status
    selectedTab: 'cookbook',
    //Category/ Material
    cateType: 'category',
    // save  sidebar status
    cateAside: ''
  }
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'changeSelectedTab':
      return {
        routeInfo: {
          ...state.routeInfo,
          selectedTab: action.selectedTab
        }
      }
    case 'changeCateTab':
      return {
        routeInfo: {
          ...state.routeInfo,
          cateType: action.cateType
        }
      }
    case 'changeCateAside':
      return {
        routeInfo: {
          ...state.routeInfo,
          cateAside: action.cateAside
        }
      }
    default:
      return state
  }
}
export default reducer