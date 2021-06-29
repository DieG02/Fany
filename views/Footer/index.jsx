import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import Playing from './Playing'
import TabBar from './TabBar'
import { MAIN } from '../MainStyles'

export default function Footer({ state, descriptors, navigation, title }) {
  const ui = useSelector(state => state.app.ui);
  const props = { state, descriptors, navigation, title }
  
  return(
    <View style={ styles.container }>
      {ui.showSong && <Playing />}
      <TabBar props={props} />
    </View>
  )
}
 
const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor:  MAIN,
  }
})


