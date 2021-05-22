/*
    write css in js, so styled-components is needed and should be yarned
    incluses:  Container, Swiper
*/

import styled from 'styled-components'


const Container = styled.div `
  header {
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    font-size: .16rem;
    color: #fff;
    background-color: #ee742f;
  }
`
const SwiperWrap = styled.div `
  height: 0;
  font-size: 0;
  padding-bottom: 66.66667%;
  position: relative;

  .slider .am-carousel .space-carousel {
    position: static !important;
  }

`
const HotCateWrap = styled.div `
  h1 {
    height: .5rem;
    line-height: .5rem;
    padding-left: .2rem;
    color: #666;
    font-weight: normal;
    background-color: #fff;
    border-bottom: solid 1px #ccc
  }

  > div {
    background-color: #fff;
     padding-top: .1rem;
     .grid-item {

    img {
      width: .6rem;
      height: .6rem;
      margin-bottom: .04rem;
      border-radius: .06rem;
      // delete the last photo
      &[src='blank'] {
        display: none;
      }
    }
  }

  .am-grid-item-content {
      padding: 0 !important;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
}
`
const Top10Wrap = styled.div `
   h1 {
    height: .5rem;
    line-height: .5rem;
    padding-left: .2rem;
    color: #666;
    font-weight: normal;
    border-bottom: solid 1px #ccc
  }

  ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding-left: .1rem;
    li {
      width: 50%;
      padding-right: .1rem;
      img {
        width: 100%;
      }
      > div:last-child {
        display: flex;
        height: .5rem;
        flex-direction: column;
        background-color: #fff;
        margin-bottom: .1rem;
        justify-content: center;
        align-items: center;
        > p:first-child {
          font-size: .18rem;
        }
        > p:last-child {
          color: #666;

        }

      }
    }
  }
`


export {
  Container,
  SwiperWrap,
  HotCateWrap,
  Top10Wrap
}
