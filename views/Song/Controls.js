import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native';
import SliderBar from './SliderBar.js'
import Slider from './Slider.js'
import Buttons from './Buttons.js'




// ----- CONSTANTS ----- //  


// ----- COMPONENT ----- //
export default function Control({ isToggleOn, setToggle }) {

  const [value, setValue] = useState();
  const [slider, setSlider] = useState(0)



  return(
    <View style={ styles.container }>
      <Slider 
        props={{
          value,
          setValue,
          slider,
          setSlider,
        }}
      />
      <Buttons 
        props={{
          setToggle,
          isToggleOn,
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
    