/*
  because this is a container component, so class components should be used
*/

import React, { Component } from 'react'
import CategoryUI from '../ui/CategoryUI'
import { connect } from 'react-redux'
import { actionCreater as ac } from '@/home/category/index.js'

@connect(
  state => ({
    cateType: state.categoryReducer.routeInfo.cateType,
    cateAside: state.categoryReducer.routeInfo.cateAside,
  }),
  // 更改上面state里面cateType 的值
  dispatch => ({
    changeCateTab(cateType) {
      dispatch(ac.changeCateTab(cateType))
    },
    changeCateAside(cateAside) {
      dispatch(ac.changeCateAside(cateAside))
    }
  })
)
class Category extends Component {
  // 默认的state.type 必须是redux里面存储的值
  state = {
    type: this.props.cateType,
  }

  // 把type传进来
  callback = (type) => {
    this.setState({
      type: type
    })
    this.props.changeCateTab(type)
    this.props.changeCateAside(type === 'category' ? '热门' : '肉类')
  }






  render() {
    // console.log('the cateType is : ' + this.props.cateType);
   return(
     < CategoryUI
     callback={this.callback}
     type={this.state.type}
     >
    </ CategoryUI>
   )
  }
}

export default Category
