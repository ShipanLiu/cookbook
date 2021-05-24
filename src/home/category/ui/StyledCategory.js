import styled from 'styled-components'

const CategoryWrap = styled.div `
 // 防止整个页面上下动。因为展示的页面是固定的。假如写的页面长了的话。
  height: 100%;
  display: flex;
  flex-direction: column;
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: .44rem;
    background-color: #ee742f;
    ul {
      position: relative;
      // default horizontal
      display: flex;
      width: 1.7rem;
      height: .3rem;
      border: solid 1px #fff;
      border-radius: .15rem;
      li {
        flex: 1;
        line-height: .3rem;
        text-align: center;
        // vertical-align: middle;
        color: #fff;
        transition: all 300ms ease;
        font-size: .16rem;
        &.active {
          background-color: #fff;
          border-radius: .15rem;
          color: #ee742f;
        }
      }
    }
  }
`


export {
  CategoryWrap,
}