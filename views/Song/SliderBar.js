import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Slider from '@react-native-community/slider'
import { setTiming } from '../../redux/actions/soundAction.js'


// ----- CONSTANTS ----- // 
const _light = '#eeeeee',
      _grey = '#dddddd',
      _blue = '#1dcce3';


// ----- COMPONENT ----- // 
export default function Audio({ props }) {
  
  const { value, setValue, slider, setSlider } = props;
  const sound = useSelector(state => state.audio.sound);


  { sound 
    && setTimeout(() => {
      async function onSlider() {
        const state = await sound.getStatusAsync();
        setSlider(state.positionMillis / state.durationMillis)
      } 
      onSlider()
    }, 200)
  }

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
      onSlidingComplete={() => setTiming(value, sound)}
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