import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import Slider from '@react-native-community/slider'


// ----- CONSTANTS ----- // 
const _light = '#eeeeee',
      _grey = '#dddddd',
      _blue = '#1dcce3';


// ----- COMPONENT ----- // 
export default function Audio({ props }) {
  
  const { slider, setValue, setTiming } = props;



  return (
    <Slider
      style={ styles.slider }
      value={ slider || 0}
      step={ 0 }
      minimumValue={ 0 }
      maximumValue={ 1 }
      thumbTintColor={ _blue }
      minimumTrackTintColor={ _light }
      maximumTrackTintColor={ _grey }
      onValueChange={(e) => setValue(e)}
      onSlidingComplete={async () => setTiming()}
    />
  )
}


// ----- STYLERS ----- //
const styles = StyleSheet.create({
  slider: {
    height: 40,
    width: '108%', 
    backgroundColor: 'transparent',
    marginLeft: '-4%' 
  }
})