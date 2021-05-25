/*
  not like MenuList(only for render), as the father of MenuList, this component is for data,

*/

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import MenuList from '@c/menu/MenuList.jsx'
import {get} from '@/utils/http.js'
import PropTypes from 'prop-types'

@withRouter
class Menu extends Component {
  // type was delivered by his father componnet(Category), class组件接传过来的属性好简单。
  static propTypes = {
    type: PropTypes.string
  }

  state = {
    cate: null,
    // problem: only run once, and can't be changed later, unless the whole component updates.
    // because curCate was both  used by father and son components. the value of it must be changed after props and state changed.
    curCate: this.props.type === 'category' ? '热门' : '肉类',
    type: 'category'
  }

  // excellent
  static getDerivedStateFromProps(nextProps, preState) {
    if (nextProps.type === preState.type) {
      return null
    } else {
      return {
        curCate: nextProps.type === 'category' ? '热门' : '肉类',
        type: nextProps.type
      }
    }
  }

  async componentDidMount() {
    let result = await get({
      url: '/api/category'
    })
    this.setState({
      cate: result.data.data
    })

  }
  handleAsideClick = (value) => {
    this.setState({
      curCate: value
    })
  }
  handleGotoList = (title) => {
    this.props.history.push('/list', {title})
    // console.log(title);
  }

  render() {
    return (
        <MenuList
        cate={this.state.cate && this.state.cate[this.props.type]}
        curCate={this.state.curCate}
        onAsideClick = {this.handleAsideClick}
        handleGotoList = {this.handleGotoList}
        >
        </MenuList>
    )
  }
}
export default Menu
