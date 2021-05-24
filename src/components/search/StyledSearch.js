/*
  this file is responsible for the style of search component

  Misrake: 1. ",":  padding: .1rem , .15rem;
           2. without ";"  border: solid 1px  #ee742f

 the Search component has to fit in  different components, with different demands so let us use some variable

*/


import styled from 'styled-components'

// 1 px border
import border from '@assets/styled/border'

const Container = styled.div `
  padding: .1rem  .15rem;
  background-color: ${props => props.outerbg};
  `

const InnerContainer = border(
  styled.div `
  display: flex;
  height: .4rem;
  // border: ${(props) => props.hasborder ? 'solid 1px  #ee742f' : '' };
  // border-radius: .07rem;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.innerbg};

  svg {
    width: .30rem;
    height: .30rem;
    margin-right: .06rem;
    fill: #ee742f
  }
  span {
    color: #666;
    font-size: .17rem
  }
`
)




export {
  Container,
  InnerContainer
}