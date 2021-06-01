// （） 里面的参数 selectedTab 就是 reducer里面的state， 子啊组件里面@connect（）里面dispatch及逆行修改状态。 一切都围绕状态。
const changeSelectedTab = (selectedTab) => {
  return {
    type: 'changeSelectedTab',
    selectedTab
  }
}

const changeCateTab = (cateType) => {
  return {
    type: 'changeCateTab',
    cateType
  }
}

const changeCateAside = (cateAside) => {
  return {
    type: 'changeCateAside',
    cateAside
  }
}

export default {
  changeSelectedTab,
  changeCateTab,
  changeCateAside
}