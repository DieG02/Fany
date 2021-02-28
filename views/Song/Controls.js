import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native';
import { Audio } from 'expo-av'
import ytdl from 'react-native-ytdl'
import Slider from './SliderBar.js'
import Buttons from './Buttons.js'


// ----- CONSTANTS ----- // 
const youtubeURL = 'https://www.youtube.com/watch?v=OnuuYcqhzCE';


// ----- COMPONENT ----- //
export default function Control({ isToggleOn, setToggle }) {
  const [sound, setSound] = useState();
  const [value, setValue] = useState();
  const [status, setStatus] = useState({
    isPlaying: false,
    isLooping: false,
    value: 0,
  })
  const [slider, setSlider] = useState(0)

  async function playSound() {
    setStatus({
      ...status,
      isPlaying: true
    });
    await sound.playAsync();
  }

  async function pauseSound() {
    setStatus({
      ...status,
      isPlaying: false
    });
    await sound.pauseAsync();
  }

  async function isLooping(value) {
    await sound.setIsLoopingAsync(value)
  }


  async function setTiming() {
    const { durationMillis } = await sound.getStatusAsync();
    await sound.setPositionAsync(durationMillis * value)
  }


  { sound 
    ? setTimeout(
      async () => {
        const { positionMillis, durationMillis } = await sound.getStatusAsync();
        // console.log('Segundos : ', Math.floor(positionMillis / 1000))
        setSlider(positionMillis / durationMillis)
      } , 1000)
    : null
  }

  
  useEffect(() => {
    async function loadSound() {
      console.log('Loading Sound');
      const sound = new Audio.Sound();
      setSound(sound);
      setStatus({ ...status, isPlaying: true });
      setToggle({...isToggleOn, play: true });
      const data = await ytdl(youtubeURL, { quality: 'highestaudio' });
      await sound.loadAsync({ uri: data[0].url });
      await sound.playAsync();
    }
    loadSound();
  }, [])

  useEffect(() => {
    return sound
    ? sound.unloadAsync()
    : undefined;
  }, [sound]);



  return(
    <View style={ styles.container }>
      <Slider 
        props={{
          slider,
          setValue,
          setTiming,
        }}
      />
      <Buttons 
        props={{
          setToggle,
          isToggleOn,
          playSound,
          pauseSound,
          isLooping,
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
    