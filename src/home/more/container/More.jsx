import React, { Component } from 'react'
import { Switch, NavBar,} from 'antd-mobile';
import {  MoreWrap, TitleBar } from './StyledMore'


export default class More extends Component {
  state = {
    checked: true
  }

  handleChange = () => {
    this.setState((preState) => ({
      checked: !preState.checked
    }))
  }

  render() {
    return (
      <TitleBar>
        <NavBar
          mode="dark"
        >More</NavBar>
        <MoreWrap>
          <span>display map</span>
          <Switch
          checked={this.state.checked}
          onChange={this.handleChange}
          ></Switch>
        </MoreWrap>
      </TitleBar>

    )
  }
}
