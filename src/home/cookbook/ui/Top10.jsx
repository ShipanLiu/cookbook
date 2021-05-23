import React from 'react'
import {
  Top10Wrap
} from './StyledCookBook'

export default function Top10(props) {
  // get random nummer for 'fake' viewd and stars
  const getRndInteger = (min, max) =>  {
  return Math.floor(Math.random() * (max - min) ) + min;
}
  return (
    <Top10Wrap>
      <h1>Top10</h1>
      <ul>
        {
          props.list.length > 0 && props.list.map((imgObj) => {
            return(
              <li key={imgObj.id}>
                <div>
                  <img src={imgObj.img} alt=" not found" />
                </div>
                <div>
                  <p>{imgObj.name}</p>
                  <p><span>{getRndInteger(5000, 8000)}</span>-viewed &nbsp;<span>{getRndInteger(3000, 5000)}</span>-stars</p>
                </div>
              </li>
            )
          })
        }

      </ul>
      </Top10Wrap>

    )
}
