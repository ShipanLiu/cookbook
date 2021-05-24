import React from 'react'
import { NavBar,} from 'antd-mobile';

export default function Map() {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <NavBar
        mode="dark"
        style={{backgroundColor: '#ee742f'}}
      >Map</NavBar>
      <iframe
      style={{width: '100%', height: '100%'}}
      title='ifrm'
      src="/map.html"
      frameBorder="0"
      >
      </iframe>
    </div>
  )
}
