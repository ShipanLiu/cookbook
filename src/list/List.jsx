/*
  start with router: yarn add react-router-dom -S,  and add it in index.js
  this List component should be rendered at App.jsx

*/

import React, { Component } from 'react'
import { NavBar, Icon} from 'antd-mobile';
import {withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// actionCreater is a Obj
import {actionCreater} from '@/home/cookbook/index'

import {TitleBar, UlWrap, ListBorder, H2Ellipsis, Container} from './StyledList'

@withRouter
@connect(
  //state here contains:  cookbookReducer/homeReducer
  (state) => ({
    list: state.cookbookReducer.list
  }),

  (dispatch) => ({
    loadData() {
      dispatch(actionCreater.loadDataAsync())
    }
  })
)
class List extends Component {

  handleClickLeft = () => {
    const {history} = this.props
    history.goBack()
  }

  componentDidMount() {
    // first load page incase there is no data in list
    if (this.props.list.length === 0) {
      this.props.loadData()
    }
  }

  getRndInteger = (min, max) =>  {
  return Math.floor(Math.random() * (max - min) ) + min;
}

  render() {
    // console.log(this.props);
    return (
      <Container>
        <TitleBar>
           <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={this.handleClickLeft}
        >
          {/* if you deirectly go to /list, there is problem, cause no title was delivered */}
          {this.props.location.state  ? this.props.location.state.title : 'Details'}
        </NavBar>
        </TitleBar>
        <UlWrap>

          {
             this.props.list && this.props.list.map((valueObj, index) => {
              return(
                <ListBorder
                // because some of my mock data have same keys
                  key={valueObj.id + index}
                  width="0 0 1px 0"
                  >
                    <div>
                      <img src={valueObj.img} alt="not found" />
                    </div>
                    <div>
                      <h1>{valueObj.name}</h1>
                      {/* h2 need ellipsis enhanced*/}
                      <H2Ellipsis>{valueObj.burdens}</H2Ellipsis>
                      <h3><span>{this.getRndInteger(5000, 8000)}</span>-viewed &nbsp;<span>{this.getRndInteger(3000, 5000)}</span>-stars</h3>
                    </div>
                </ListBorder>
              )
            })
          }



        </UlWrap>
      </Container>
    )
  }
}

export default List
