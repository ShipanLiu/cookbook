/*
  this file is responsible for the style of search component

  Misrake: 1. ",":  padding: .1rem , .15rem;
           2. without ";"  border: solid 1px  #ee742f

*/


import styled from 'styled-components'

const Container = styled.div `
  padding: .02rem  .15rem;
  > div {
    display: flex;
    height: .4rem;
    border: solid 1px  #ee742f;
    border-radius: .07rem;
    justify-content: center;
    align-items: center;
    background-color: #fff;

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
  }

`

export {
  Container
}