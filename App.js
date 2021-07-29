import React from 'react'
import { Provider } from 'react-redux'
import Root from './index.js'
import configureStore from './store.js'
import { NavigationContainer } from '@react-navigation/native'

const store = configureStore();

export default function App() {
  return(
    <Provider store={ store }>
      <NavigationContainer>
        <Root/>
      </NavigationContainer>
    </Provider>
  )
} 
