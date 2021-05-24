import {CHANGE_SWITCH} from './actionTypes'

const changeSwitch = (checked) => {
  return {
    type: CHANGE_SWITCH,
    checked
  }
}

// who use?  home/more  component
// take care of the export way here
export default {
  changeSwitch
}