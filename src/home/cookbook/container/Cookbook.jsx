/*
  up to down layout
  this is a container for UI components
*/

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CookBookUI from '../ui/CookBookUI'
import {connect} from 'react-redux'
import { actionCreater } from "../index"


// connect 的作用就是把 state 和 loadData（） 等加载到props上面。
// usage: mapStateToProps  and  mapDispatchToProps
//（）里面的state， 就是真实的state,我们不用关心
@connect(
  (state) => {
    // console.log(state);
    return {
      // 返回数据分层
      list: state.cookbookReducer.list
    }
  },
  (dispatch) => ({
    loadData() {
      dispatch(actionCreater.loadDataAsync())
    }
  })

)
// 一旦加上withRouter， this.props里面就会由history。
@withRouter
class Cookbook extends Component {

  // 对Top10, 和 swiper 里面detail的路由跳转
  handleGOtoDetail = (title) => {
    return () => {
      // 第二个参数应该用对象式的参数传递
      this.props.history.push('/detail', { title })
    }
  }

  componentDidMount() {
    // 刚开始结果为空， 因为是异步应该写在  componentDidUpdate 里面
    // console.log(this.props.list);
    // 数据就自动到 list里面了。
    this.props.loadData()
  }

  componentDidUpdate() {
    // console.log(this.props.list);
  }

  render() {
    return (
      <div>
        {/* deliver the list to CookBookUI, so the UIs could use the data to display */}
        <CookBookUI list={this.props.list} onGotoDetail={this.handleGOtoDetail}></CookBookUI>
      </div>
    )
  }
}

export default Cookbook
