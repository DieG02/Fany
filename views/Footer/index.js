import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { useSelector } from 'react-redux'
import Playing from './Playing.js'
import Menu from './Menu.js'
const unplugged = require('../../assets/unplugged.jpg')
const { height, width } = Dimensions.get('window')

export default function Footer({ song }) {

  const [isToggleOn, setToggle] = useState({
    favourite: false,
    play: false,
  })
  
  const ui = useSelector(state => state.app.ui);

  // Change for 'song'
  const objSong = {
    src: unplugged, 
    title: 'The Man Who Sold The World', 
    artist: 'Nirvana', 
    album: 'MTV Unplugged',
  }

  return(
    <View style={ styles.container }>
      {ui.showSong ?
        <Playing 
          props={ objSong } 
          isToggleOn={ isToggleOn } 
          setToggle={ setToggle }
        />
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