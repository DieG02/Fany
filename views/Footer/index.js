import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { useSelector } from 'react-redux'
import Playing from './Playing.js'
import Menu from './Menu.js'

export default function TabBar({ state, descriptors, navigation, title }) {
 
  const ui = useSelector(state => state.app.ui);
  const menu = { state, descriptors, navigation, title }
  
  const focusedOptions = descriptors[state.routes[state.index].key].options;


  return(
    <View style={ styles.container }>
      {ui.showSong 
        ? <Playing />
        : null 
      }
      { focusedOptions.tabBarVisible === false 
        ? null 
        : <Menu menu={menu} />
      }
    </View>
  )
}
 
const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#1dcce3',
  }
})


