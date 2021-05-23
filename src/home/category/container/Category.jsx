/*
  because this is a container component, so class components should be used
*/

import React, { Component } from 'react'
import { CategoryWrap } from './StyledCategory'
import Search from '@c/search/Search'
import Menu from './Menu'

export default class Category extends Component {

  state = {
    tabIndex: 0,
    type: 'category',
  }

  render() {
    return (
      <CategoryWrap>
        <nav>
          <ul>
            <li
            className={this.state.tabIndex === 0? 'active' : ''}
            onClick={() => this.setState({tabIndex: 0, type: this.state.tabIndex === 0 ? 'category' : 'material'})}
            >category
            </li>

            <li
            className={this.state.tabIndex === 1? 'active' : ''}
            onClick={() => this.setState({tabIndex: 1})}
            >
            Material
            </li>
          </ul>
        </nav>

        <Search
          outerbg='#fff'
          innerbg='#efefef'
          hasborder={false}
        ></Search>

        <Menu
          type={this.state.type}
        >
        </Menu>
      </CategoryWrap>
    )
  }
}
