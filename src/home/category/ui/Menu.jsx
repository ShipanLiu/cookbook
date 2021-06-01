/*
  not like MenuList(only for render), as the father of MenuList, this component is for data,
  只有多个组件共享的时候， 状态存在redux里面才由意义。

*/

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreater as ac } from '@/home/category/index.js'
import MenuList from '@c/menu/MenuList.jsx'
import {get} from '@/utils/http.js'
import PropTypes from 'prop-types'

@withRouter
// 把你当前到底勾选的是哪个 存在redux里面。
@connect(
  state => ({
    cateAside: state.categoryReducer.routeInfo.cateAside,
    // 把redux里面保存的type也拿出来。
    cateType: state.categoryReducer.routeInfo.cateType
  }),
  dispatch => ({
    changeCateAside(cateAside) {
      dispatch(ac.changeCateAside(cateAside))
    }
  })
)
class Menu extends Component {
  // type was delivered by his father componnet(Category), class组件接传过来的属性好简单。
  static propTypes = {
    type: PropTypes.string
  }

  //为了保留用户的操作： 需要将状态存在redux里面。
  state = {
    cate: null,
    // problem: only run once, and can't be changed later, unless the whole component updates.
    // because curCate was both  used by father and son components. the value of it must be changed after props and state changed.
    // curCate: this.props.type === 'category' ? '热门' : '肉类',
  }

  async componentDidMount() {
    let result = await get({
      url: '/api/category'
    })
    this.setState({
      cate: result.data.data
    })

    // 第一次挂载完之后，设置初始值， 注意 componentDidMount() 只在第一次时候加载。但是切换的时候，有问题。
    // 所以 changeCateAside 应该在Category。jsx 文件里面完成
    if (this.props.cateAside === '') {
      this.props.changeCateAside(this.props.cateType === 'category' ? '热门' : '肉类')
    }

  }



  handleAsideClick = (value) => {
    // this.setState({
    //   curCate: value
    // })
    // 点击谁， 储存谁
    this.props.changeCateAside(value)
  }
  handleGotoList = (title) => {
    this.props.history.push('/list', {title})
    // console.log(title);
  }

  render() {
    return (
        <MenuList
        cate={this.state.cate && this.state.cate[this.props.cateType]}
        curCate={this.props.cateAside}
        onAsideClick = {this.handleAsideClick}
        handleGotoList = {this.handleGotoList}
        >
        </MenuList>
    )
  }
}

export default Menu
