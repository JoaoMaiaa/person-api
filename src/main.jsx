import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bulma'
import { debounce } from 'lodash-es'
// import '../assets/js/script'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
