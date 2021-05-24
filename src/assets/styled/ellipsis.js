// this file fits overflowed content and should be set into ellipsis

import styled from 'styled-components'

const ellipsis = (WrappedComp) => {
  return styled(WrappedComp) `
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({lineclamp}) => lineclamp || 1 };
    -webkit-box-orient: vertical;
  `
}

export default ellipsis