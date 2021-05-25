/*
  this is a function component,
  CookBookUI is a collection of the small ui
  yarn add prop-types     verify the type of props
  yarn add memoize-one    memory some function
*/
import React from 'react'
import PropTypes from 'prop-types'
import memoize from 'memoize-one'

import Swiper from './Swiper'
import Search from '@c/search/Search'
import HotCate from './HotCate'
import Top10 from './Top10'
import {
  Container
} from './StyledCookBook'


const CookBookUI = (props) => {
  const swiperPic = memoize(list => list.slice(0,5))
   const hostCatePic = memoize(list => list.slice(5,17))
  //  假如 props.list 不进行变化， 就会用缓存的五条数据。
  // const filterSwiper = swiperPic(props.list)
  // first time mount returnsa [], this is a problem
  // console.log(filterSwiper);

  return (
     <Container>
        <header>Asian Food</header>
        <Swiper list={swiperPic(props.list)}></Swiper>
        <Search
          outerbg='#f5f5f5'
          innerbg='#fff'
          hasborder={true}

          radius={0.06}
          color='#ee742f'
        >
        </Search>
        <HotCate></HotCate>
        <Top10 list={hostCatePic(props.list)}></Top10>
      </Container>
  )
}

CookBookUI.propTypes = {
  list: PropTypes.array
}

export default CookBookUI