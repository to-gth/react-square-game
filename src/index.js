import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
// import Game from './containers/Game'
import Square from './containers/Square'
import './index.css';

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Square r={0} c={0}/>
  </Provider>,
  document.getElementById('root')
)


// TODO: use redux
// TODO: make component directory
// TODO: separate css file

// STUDY: flux use
// STUDY: could 'watch'?
