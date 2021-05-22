/*
  up to down layout
  this is a container for UI components
*/

import React, { Component } from 'react'
import CookBookUI from '../ui/CookBookUI'

export default class Cookbook extends Component {
  render() {
    return (
      <div>
        <CookBookUI></CookBookUI>
      </div>
    )
  }
}
