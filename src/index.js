import ReactDOM from "react-dom"
import React from "react"
import App from "./App"
import "./assets/styles/reset.css"
import {Provider} from 'react-redux'
import store from './store/index'



ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
 )
