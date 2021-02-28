import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { useSelector } from 'react-redux'
import Playing from './Playing.js'
import Menu from './Menu.js'

export default function Footer() {

  const ui = useSelector(state => state.app.ui);
  
  return(
    <View style={ styles.container }>
      {ui.showSong ?
        <Playing />
      :
        null 
      }
      <Menu 
        menu={ ui.menuSelected }
      />
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