import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native';
import Slider from './SliderBar.js'
import Buttons from './Buttons.js'


// ----- CONSTANTS ----- // 
const youtubeURL = 'https://www.youtube.com/watch?v=OnuuYcqhzCE';


// ----- COMPONENT ----- //
export default function Control({ isToggleOn, setToggle }) {


  return(
    <View style={ styles.container }>
      <Slider 
        props={{
          // slider,
          // setValue,
          // setTiming,
        }}
      />
      <Buttons 
        props={{
          // setToggle,
          // isToggleOn,
          // playSound,
          // pauseSound,
          // isLooping,
        }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
  }
})
    