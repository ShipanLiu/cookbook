import styled from 'styled-components'
import border from  '@assets/styled/border'

const MenuWrap1 = styled.div `
  // border-top: solid 1px #ccc;
  overflow: hidden;
  flex: 1;
  display: flex;
  aside {
    overflow-y: scroll;
    width: .9rem;
    ul {
      li{
        height: .5rem;
        line-height: .5rem;
        text-align: center;
        &.active {
          background-color: #fff;
          color: #ee742f;
          span {
            display: inline-block;
            height: 100%;
            border-bottom: solid 1px #ee742f;
          }
        }
      }
    }

  }
  section{
    overflow-y: scroll;
    flex: 1;
    padding: .25rem;
    background: #fff;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 33.33333333333%;
        height: .45rem;
        text-align: center;
      }
    }
  }
`
const MenuWrap = border(MenuWrap1)
export  {
  MenuWrap
}