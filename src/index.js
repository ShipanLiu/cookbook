import ReactDOM from "react-dom"
import { BrowserRouter as Router} from "react-router-dom"
import React from "react"
import App from "./App"
import "./assets/styles/reset.css"
import './assets/styles/animate.css'
import {Provider} from 'react-redux'
import store from './store/index'



ReactDOM.render(
  <Router>
    <Provider store={store}>
    <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
 )
