import React, {useState} from 'react'
import { CategoryWrap, UlBorder} from './StyledCategory'
import Search from '@c/search/Search'
import Menu from './Menu'

export default function CategoryUI(props) {
  const [type, setType] = useState(props.type)
   return (
      <CategoryWrap>
        <nav>
          <UlBorder
            color='#fff'
            radius={0.15}
          >
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
