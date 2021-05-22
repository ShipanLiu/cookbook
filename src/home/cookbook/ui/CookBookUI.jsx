/*
  this is a function component,
  CookBookUI is a collection of the small ui
*/
import React from 'react'
import Swiper from './Swiper'
import Search from '@c/search/Search'
import HotCate from './HotCate'
import Top10 from './Top10'
import {
  Container
} from './StyledCookBook'

const CookBookUI = () => {
  return (
     <Container>
        <header>美食大全</header>
        <Swiper></Swiper>
        <Search></Search>
        <HotCate></HotCate>
        <Top10></Top10>
      </Container>
  )
}

export default CookBookUI