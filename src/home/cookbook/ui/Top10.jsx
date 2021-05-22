import React, { Component } from 'react'
import { Grid } from 'antd-mobile'
import {
  Top10Wrap
} from './StyledCookBook'

export default class Top10 extends Component {
  render() {
    return (
      <Top10Wrap>
        <h1>Top</h1>
        <ul>
          <li>
            <div>
              <img src="https://s1.cdn.jiaonizuocai.com/videoImg/201510/1313/561c9a314c8bb.jpg/OTAweDYwMA" alt=" not found" />
            </div>
            <div>
              <p>Celery squid</p>
              <p><span>1000</span>viewed <span>9999</span>stars</p>
            </div>
          </li>
           <li>
            <div>
              <img src="https://s1.cdn.jiaonizuocai.com/videoImg/201510/1313/561c9a314c8bb.jpg/OTAweDYwMA" alt=" not found" />
            </div>
            <div>
              <p>Celery squid</p>
              <p><span>1000</span>viewed <span>9999</span>stars</p>
            </div>
          </li>
           <li>
            <div>
              <img src="https://s1.cdn.jiaonizuocai.com/videoImg/201510/1313/561c9a314c8bb.jpg/OTAweDYwMA" alt=" not found" />
            </div>
            <div>
              <p>Celery squid</p>
              <p><span>1000</span>viewed <span>9999</span>stars</p>
            </div>
          </li>
        </ul>
      </Top10Wrap>

    )
  }
}
