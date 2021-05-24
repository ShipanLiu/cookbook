/*
  because this is a container component, so class components should be used
*/

import React, { Component } from 'react'
import CategoryUI from '../ui/CategoryUI'


export default class Category extends Component {

  state = {
    type: 'category',
  }

  render() {
   return(
     < CategoryUI
     type={this.state.type}
     >
    </ CategoryUI>
   )
  }
}
