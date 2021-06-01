/*
  这个 animate， 分别关于在home， list， detail 组件上
*/

import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

const animate = (WrappedComp) => {
  return class extends Component {
    state = {
      slideRichtung: 'animate__slideInRight'
    }

    render() {


     let state = this.props.location.state
     let pathname = this.props.location.state
     let from = state && state.from
     let { match } = this.props

     console.log('pathname::' + pathname);
     console.log('from::' + from);

     let enterActive = ''
     let leaveActive = ''

     const SIR = 'animate__slideInRight'
     const SIL = 'animate__slideInLeft'
     const SOR = 'animate__slideOutRight'
     const SOL = 'animate__slideOutLeft'

     switch(true) {
      case from === '/home':
      case from === '/list' && pathname === '/detail':
         enterActive = SIR
         leaveActive = SOL
         break
      case from === '/list' && pathname === '/home':
      case from === '/detail' && pathname === '/home':
      case from === '/detail' && pathname === '/list':
        enterActive = SIL
        leaveActive = SOR
        break
      default:
        break
     }


      // 你装饰谁， 就会拿到谁的路由属性. /list 和 /home 同时加载， 看看当前加载的是谁 this.props.match ， 记载谁， in里面就写true
      // 通过match里面的信息保持 in 里面的状态
      // console.log(this.props.pin);
      return (
        <CSSTransition
        // !! 代表 如果有内容就变成 true， 无内容false。 true: 表示进来了， false： 走了
          in={!!match}
          timeout={ 1000 }
          //  进来时候挂上， 离开时候退出。
          mountOnEnter={true}
          unmountOnExit={true}
          classNames={{
          enter: 'animate__animated',
          exit: 'animate__animated',
          enterActive: enterActive,
          exitActive: leaveActive
        }}
        >

          <WrappedComp {...this.props}></WrappedComp>
        </CSSTransition>
      )
    }
  }
}

export default animate