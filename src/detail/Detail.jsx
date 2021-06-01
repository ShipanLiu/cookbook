/*
    最后全部跳到detail里面，  添加路由的动画：  yarm add react-transition-group -S  yarn add animate.css（动画库）

    路由的引入是在App.js里面的。

*/


import React, { Component } from 'react'
import { NavBar, Icon} from 'antd-mobile';
import { withRouter} from 'react-router-dom'
import { DetailWrap } from './StyledDetail'

@withRouter
class Detail extends Component {

  handleClickLeft = () => {
    let { history } = this.props
    // history.goBack()
    let from = this.props.location.state.from
    // console.log(from);
    history.push(from, {from: '/detail'})
  }


  render() {
    let title = this.props.location.state ? this.props.location.state.title : 'Details'
    return (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={this.handleClickLeft}
          style={{backgroundColor: '#ee742f'}}
        >
          {/* if you deirectly go to /list, there is problem, cause no title was delivered, this.props.location.state 是withrouter里面的。*/}
          {title}
        </NavBar>
        <DetailWrap>
          <div>
            <img src="http://s1.cdn.jiaonizuocai.com/videoImg/201510/1313/561c9a314c8bb.jpg/OTAweDYwMA" alt="photo not found" />
          </div>
          <div className='details'>
            <h1>{title}</h1>
            <h3>4678 seen 560 stars</h3>
            <button>save</button>
          </div>
        </DetailWrap>
      </div>
    )
  }
}

export default Detail
