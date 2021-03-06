import React from 'react'
import { Provider } from 'react-redux'
import App from './App.js'
import configureStore from './store.js'
import { NavigationContainer } from '@react-navigation/native'

const store = configureStore();

export default function Root() {
  return(
    <Provider store={ store }>
      <NavigationContainer>
        <App/>
      </NavigationContainer>
    </Provider>
  )
} 
