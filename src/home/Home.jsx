import React, { Component } from 'react'
import{
  TabBar
} from "antd-mobile"

import cookbook from "@assets/images/cookbook.png"
import cookbookActive from "@assets/images/cookbook-active.png"
import menu from "@assets/images/menu.png"
import menuActive from "@assets/images/menu-active.png"
import location from "@assets/images/location.png"
import locationActive from "@assets/images/location-active.png"
import more from "@assets/images/more.png"
import moreActive from "@assets/images/more-active.png"



export default class Home extends Component {

  state = {
    selectedTab: 'cookbook',
    hidden: false,
    fullScreen: true,
  }
  render() {
    return (
       <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="Food"
            key="cookbook"
            icon={<div style={{
              width: '26px',
              height: '26px',
              background: `url(${cookbook}) center center /  26px 26px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '26px',
              height: '26px',
              background: `url(${cookbookActive}) center center /  26px 26px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'cookbook'}
            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'cookbook',
              });
            }}
            data-seed="logId"
          >
            {/* 位置 */}
            <div>cookbook</div>



          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${menu}) center center /  21px 21px no-repeat`}}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${menuActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="category"
            key="category"
            badge={'new'}
            selected={this.state.selectedTab === 'category'}
            onPress={() => {
              this.setState({
                selectedTab: 'category',
              });
            }}
            data-seed="logId1"
          >
            <div>category</div>




          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${location}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${locationActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="map"
            key="map"
            dot
            selected={this.state.selectedTab === 'map'}
            onPress={() => {
              this.setState({
                selectedTab: 'map',
              });
            }}
          >
            <div>map</div>




          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: `${more}` }}
            selectedIcon={{ uri: `${moreActive}` }}
            title="more"
            key="more"
            selected={this.state.selectedTab === 'more'}
            onPress={() => {
              this.setState({
                selectedTab: 'more',
              });
            }}
          >
            <div>more</div>
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}
