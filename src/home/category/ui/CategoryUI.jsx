import React, {useState} from 'react'
import { CategoryWrap } from './StyledCategory'
import Search from '@c/search/Search'
import Menu from './Menu'

export default function CategoryUI(props) {
  const [type, setType] = useState(props.type)
   return (
      <CategoryWrap>
        <nav>
          <ul>
            <li
            className={type === 'category' ? 'active' : ''}
            onClick={() => setType('category')}
            >Category
            </li>

            <li
            className={type === 'material' ? 'active' : ''}
            onClick={() => setType('material')}
            >
            Material
            </li>
          </ul>
        </nav>

        <Search
          outerbg='#fff'
          innerbg='#efefef'
          hasborder={false}
        ></Search>

        <Menu
          type={type}
        >
        </Menu>
      </CategoryWrap>
    )
}
