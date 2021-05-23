/*
  up to down layout
  this is a container for UI components
*/

import React, { Component } from 'react'
import CookBookUI from '../ui/CookBookUI'
import {connect} from 'react-redux'
import { loadDataAsync } from "../actionCreater"


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
      dispatch(loadDataAsync())
    }
  })

)
class Cookbook extends Component {

  componentDidMount() {
    // 刚开始结果为空， 因为是异步应该写在  componentDidUpdate 里面
    // console.log(this.props.list);
    this.props.loadData()
  }

  componentDidUpdate() {
    // console.log(this.props.list);
  }

  render() {
    return (
      <div>
        {/* deliver the list to CookBookUI, so the UIs could use the data to display */}
        <CookBookUI list={this.props.list}></CookBookUI>
      </div>
    )
  }
}

export default Cookbook
