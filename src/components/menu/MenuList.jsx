/*
  we don't have to use redux here.
  the function of onClick must from father Component, or it won't change any state.

*/

import {
  MenuWrap
} from './StyledMenuList'
import PropTypes from 'prop-types'


export default function MenuList(props) {
  const {cate, curCate, onAsideClick} = props
  return (
    <MenuWrap
      width="1px 0 0 0"
    >
      <aside>
        <ul>
          {
            cate && Object.keys(cate)
            .map((value) => {
              return(
                <li
                className={value === curCate ? 'active' : ''}
                key={value}
                onClick={() => onAsideClick(value)}
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
           cate && curCate && cate[curCate].map((value) => {
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

MenuList.propTypes = {
  cate: PropTypes.object,
  curCate: PropTypes.string
}
