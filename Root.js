import React from 'react'
import { Provider } from 'react-redux'
import App from './App.js'
import configureStore from './store.js'

const store = configureStore();

export default function Root() {
  return(
    <Provider store={ store }>
      <App/>
    </Provider>
  )
} 
