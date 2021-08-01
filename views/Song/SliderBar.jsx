import React from 'react'
import { StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import Slider from '@react-native-community/slider'

import { setTiming } from '../../redux/actions/song'
import { WHITE, GREY_W } from '../MainStyles'


// ----- COMPONENT ----- // 
export default function Audio({ props }) {

  const { value, setValue, slider, setSlider } = props;
  const sound = useSelector(state => state.audio.file);

  { sound 
    && setTimeout(() => {
      async function onSlider() {
        const state = await sound.getStatusAsync();
        setSlider(state.positionMillis / state.durationMillis)
      } 
      onSlider()
    }, 100)
  }

  return (
    <Slider
      style={styles.slider}
      value={slider || 0}
      step={ 0.0001 }
      minimumValue={ 0 }
      maximumValue={ 1 }
      thumbTintColor={ WHITE }
      minimumTrackTintColor={ WHITE }
      maximumTrackTintColor={ GREY_W }
      onValueChange={ setValue }
      onSlidingComplete={() => setTiming(value, sound)}
    />
  )
}


// ----- STYLERS ----- //
const styles = StyleSheet.create({
  slider: {
    height: 25,
    width: '108%', 
    backgroundColor: 'transparent',
    marginLeft: '-4%',
  }
})