import React, { Component } from 'react'
import { connect } from 'react-redux'
import{
  TabBar
} from "antd-mobile"
import { CookBook } from './cookbook/index'
import { Category } from './category/ui/index'
import Map from './map/Map'
import { More } from './more/index'

import cookbook from "@assets/images/cookbook.png"
import cookbookActive from "@assets/images/cookbook-active.png"
import menu from "@assets/images/menu.png"
import menuActive from "@assets/images/menu-active.png"
import location from "@assets/images/location.png"
import locationActive from "@assets/images/location-active.png"
import more from "@assets/images/more.png"
import moreActive from "@assets/images/more-active.png"


// added to props
@connect(
  (state) => ({
    checked: state.homeReducer.checked
  }),
)
class Home extends Component {

  state = {
    selectedTab: 'cookbook',
    hidden: false,
    fullScreen: true,
  }


  render() {
    const tabItem = [
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
          >
            {/* 位置 */}
            <CookBook></CookBook>



          </TabBar.Item>,
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
            title="Category"
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
            <Category></Category>




          </TabBar.Item>,
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
            title="Map"
            key="map"
            dot
            selected={this.state.selectedTab === 'map'}
            onPress={() => {
              this.setState({
                selectedTab: 'map',
              });
            }}
          >
            <Map></Map>




          </TabBar.Item>,
          <TabBar.Item
            icon={{ uri: `${more}` }}
            selectedIcon={{ uri: `${moreActive}` }}
            title="More"
            key="more"
            selected={this.state.selectedTab === 'more'}
            onPress={() => {
              this.setState({
                selectedTab: 'more',
              });
            }}
          >
            <More></More>
          </TabBar.Item>
    ]
    return (
       <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {
            this.props.checked
            ? tabItem.map(v => v)
            : tabItem.filter((v, i) => i !== 2)
          }

        </TabBar>
      </div>
    )
  }
}

export default Home
