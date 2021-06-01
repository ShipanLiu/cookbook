/*
  yarm add react-transition-group -S  yarn add animate.css（动画库, 引入到index。js 里面）
*/

import React, { Component } from 'react'
import { Home } from "./home/index"
import { Switch, Route, Redirect} from 'react-router-dom'
import List from './list/List'
import Detail from './detail/Detail'

export default class App extends Component {
  render() {
    // 路由动画想要工作， 需要所有的路由一起打开. 同时打开必然有覆盖的问题
    return (
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/list' component={List}></Route>
        <Route path='/detail' component={Detail}></Route>
        <Redirect from='/' to='/home'></Redirect>
      </Switch>
    )
  }
}
