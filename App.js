import React from 'react'
import { Provider } from 'react-redux'
import Root from './index.js'
import configureStore from './store.js'

const store = configureStore();

const App = () => {
  return(
    <Provider store={ store }>
      <Root/>
    </Provider>
  )
} 

export default App;