import styled from 'styled-components'


const TitleBar = styled.div `
  .am-navbar-dark {
    background-color: #ee742f;
  }
`
const MoreWrap = styled.div `
  padding: .3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    margin-right: .10rem;
    font-size: .17rem;
  }
`

export {
  MoreWrap,
  TitleBar
}