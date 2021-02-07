import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native'
import Playing from './Playing.js'
import Menu from './Menu.js'
const unplugged = require('../../assets/unplugged.jpg')
const { height } = Dimensions.get('window')


export default function Footer({ song, menuSelected }) {

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
      <Menu menu={ menu } setMenu={ setMenu }/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1dcce3', // Change to 'transparent' if you want
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: '100%',
    position: 'absolute', // KEY to use menu correctly
    bottom: 0,
  }
})