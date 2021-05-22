/*
    picture swiper in home page
*/

import React, { Component } from 'react'
import { Carousel} from 'antd-mobile'

import img1 from "@assets/images/swiper-1.png"
import img2 from "@assets/images/swiper-2.jpeg"
import img3 from "@assets/images/swiper-3.jpeg"

import {
  SwiperWrap,
} from './StyledCookBook'

export default class Swiper extends Component {
  state = {
    data: [img1, img2, img3],
    imgHeight: 176,
  }

  render() {
    return (
      // <Carousel>
      //   <img src={img1} alt="cant't be focund" />
      //   <img src={img2} alt="cant't be focund" />
      //   <img src={img3} alt="cant't be focund" />
      // </Carousel>
      <SwiperWrap>
          <Carousel
            className="space-carousel"
            frameOverflow="hidden"
            cellSpacing={5}
            slideWidth={1}
            autoplay
            infinite
            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            // afterChange={index => this.setState({ slideIndex: index })}
          >
            {this.state.data.map((val, index) => {
              // console.log(val);
              return(
              <a
                key={val}
                href=":javascript"
                style={{
                  display: 'block',
                  position: 'relative',
                  top: this.state.slideIndex === index ? -10 : 0,
                  height: this.state.imgHeight,
                  boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                }}
              >
                <img
                  src={val}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            )
        })}
          </Carousel>
      </SwiperWrap>
    );
  }
}
