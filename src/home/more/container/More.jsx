import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, NavBar,} from 'antd-mobile';
import {  MoreWrap, TitleBar } from './StyledMore'

import {actionCreater} from '@/home/index'

@connect(
  // the state here is not the state of homeReducer but rootReducer
  (state) => ({
    checked: state.homeReducer.checked
  }),

  (dispatch) => ({
    // the (checked) here is the above changed value of 'checked'
    handleChange(checked) {
      // changeSwitch need a param , so that it can change the state in homeReducer
      dispatch(actionCreater.changeSwitch(checked))
      // save in the checked state and stay the same when opening next time
      window.localStorage.setItem('checked', checked)
    }
  })

)
class More extends Component {
  render() {
    return (
      <TitleBar>
        <NavBar
          mode="dark"
        >More</NavBar>
        <MoreWrap>
          <span>display map</span>
          <Switch
          checked={this.props.checked}
          onChange={this.props.handleChange}
          ></Switch>
        </MoreWrap>
      </TitleBar>

    )
  }
}

export default More
