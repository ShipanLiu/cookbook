/*
    问题来了， 如何将子组件的 状态 传递给父组件， 这里用 props 和 在 Category。jsx 里面定义一个callback函数。
*/

import React, {useState, useEffect} from 'react'
import { CategoryWrap, UlBorder} from './StyledCategory'
import Search from '@c/search/Search'
import Menu from './Menu'

export default function CategoryUI(props) {
  const [type, setType] = useState(props.type)
  useEffect(() => {
    props.callback(type)
    // props.handleClick(type)
  },[type])

  // console.log(type);
   return (
      <CategoryWrap>
        <nav>
          <UlBorder
            color='#fff'
            radius={0.15}
          >
            <li
            className={type === 'category' ? 'active' : ''}
            onClick={() =>  setType('category')}
            >Category
            </li>

            <li
            className={type === 'material' ? 'active' : ''}
            onClick={() => setType('material')}
            >
            Material
            </li>
          </UlBorder>
        </nav>

        <Search
          outerbg='#fff'
          innerbg='#efefef'
          hasborder={false}

          radius={0.06}
         ></Search>

        <Menu
          type={type}
        >
        </Menu>
      </CategoryWrap>
    )
}
