/*
  not like MenuList(only for render), as the father of MenuList, this component is for data,

*/

import React, { Component } from 'react'
import MenuList from '@c/menu/MenuList.jsx'
import {get} from '@/utils/http.js'
import PropTypes from 'prop-types'


export default class Menu extends Component {
  // type was delivered by his father componnet(Category), class组件接传过来的属性好简单。
  static propTypes = {
    type: PropTypes.string
  }

  state = {
    cate: null,
    curCate: '热门'
  }

  async componentDidMount() {
    let result = await get({
      url: '/api/category'
    })
    this.setState({
      cate: result.data.data[this.props.type]
    })
    // console.log(result.data.data);

  }
   handleClick = (value) => {
    this.setState({
      curCate: value
    })
  }
  render() {
    return (
        <MenuList
        cate={this.state.cate}
        curCate={this.state.curCate}
        >
        </MenuList>
    )
  }
}
