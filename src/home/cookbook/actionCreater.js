/*
  what does this file do?


*/
import {LOAD_DATA} from './actionTypes'
import { get } from '@/utils/http.js'


// for Sync (refresh the state)
const loadDataSync = (list) => {
  return {
    type: LOAD_DATA,
    list
  }
}

// for Async (requirring the data via ajax)

// run at container/CookBook
const loadDataAsync = () => {
  return async(dispatch) => {
    let result = await get({
      url: '/api/list'
    })
    // 返回的数据有两层。这个dispatch一派发， reducer就有了 list 数据了。
    dispatch(loadDataSync(result.data.data))
  }
}



export {
  loadDataSync,
  loadDataAsync
}