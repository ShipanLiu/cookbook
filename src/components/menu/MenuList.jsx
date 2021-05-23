/*
  we don't have to use redux here.

*/

import React, {useState} from 'react'
import {
  MenuWrap
} from './StyledMenuList'


export default function MenuList({cate, curCate}) {
  const [curCateValue, setcurCateValue] = useState(curCate)

  return (
    <MenuWrap>
      <aside>
        <ul>
          {
            cate && Object.keys(cate)
            .map((value) => {
              return(
                <li
                className={value === curCateValue ? 'active' : ''}
                key={value}
                onClick={() => setcurCateValue(value)}
                >
                <span>{value}</span>
                </li>
              )
            })
          }
        </ul>
      </aside>
      <section>
        <ul>
          {
            cate && cate['category'][curCate].map((value) => {
              return(
                <li key={value}>{value}</li>
              )
            })
          }

        </ul>
      </section>
    </MenuWrap>
  )
}
