/*
    border must be designed by the border.js under styled
*/

import styled from 'styled-components'
import border from '@assets/styled/border.js'
import ellipsis from '@assets/styled/ellipsis.js'

const Container = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  ul {
    flex: 1;
    overflow-y: scroll;
  }
`


const TitleBar = styled.div `
 // go to Chrome inspect and find the classname
  .am-navbar-dark {
    background-color: #ee742f;
  }
`

const ListBorder = border(styled.li ``)
const H2Ellipsis = ellipsis(styled.h2 ``)

const UlWrap = styled.ul `
 li {
      display: flex;
      padding: .1rem;
      background-color: #fff;
      img {
        margin-right: .15rem;
        width: 1.15rem;
        height: .75rem;
      }
      div:last-child {
        margin-left: .1rem;
        h1 {
            font-size: .16rem;
            line-height: .3rem;
        }
        h2 {
          font-weight: normal;
        }
        h3 {
          font-size: .12rem;
          font-weight: normal;
          transform: scale(1);
          transform-origin: 0 0;
          line-height: .32rem;
        }
      }
 }
`


export {
  TitleBar,
  UlWrap,
  ListBorder,
  H2Ellipsis,
  Container,
}