import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'
import Playing from './Playing.js'
import Menu from './Menu.js'
const unplugged = require('../../assets/unplugged.jpg')
const { height, width } = Dimensions.get('window')

export default function Footer({ song, menuSelected, navigation }) {

  const [isToggleOn, setToggle] = useState({
    favourite: false,
    play: false,
  })
  const [menu, setMenu] = useState(`${menuSelected || 'Home'}`)

  // Change for 'song'
  const objSong = {
    src: unplugged, 
    title: 'The Man Who Sold The World', 
    artist: 'Nirvana', 
    album: 'MTV Unplugged',
  }

  return(
    <View style={ styles.container }>
      {objSong ?
        <Playing 
          props={ objSong } 
          isToggleOn={ isToggleOn } 
          setToggle={ setToggle }
        />
      :
        null 
      }
      <Menu 
        menu={ menu }
        setMenu={ setMenu }
        navigation={ navigation }
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