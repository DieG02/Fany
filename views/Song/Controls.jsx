import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native';
import Slider from './SliderBar'
import Buttons from './Buttons'


// ----- COMPONENT ----- //
export default function Control({ isToggleOn, setToggle }) {

  const [value, setValue] = useState();
  const [slider, setSlider] = useState(0)
  return(
    <View style={ styles.container }>
      <Slider props={{ value, setValue, slider, setSlider }} />
      <Buttons props={{ setToggle, isToggleOn }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
  }
})
    