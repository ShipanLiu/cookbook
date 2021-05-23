/*
    picture swiper in home page
*/

import React from 'react'
import { Carousel} from 'antd-mobile'
import PropTypes from 'prop-types'


import {
  SwiperWrap,
} from './StyledCookBook'

export default function Swiper(props) {
    return (
      // <Carousel>

      // </Carousel>
      <SwiperWrap>
          <Carousel
            autoplay
            infinite
          >
           {
             //first mount will be a []
             props.list.length > 0 && props.list.map((imgObj) => {
              return(
                <img key={imgObj.id} src={imgObj.img} alt="not found" />
              )
             })
           }
          </Carousel>
      </SwiperWrap>
    );
}

Swiper.propTypes = {
  list: PropTypes.array
}
