import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';


const URL = 'https://r6---sn-uxaxjxougv-x1xes.googlevideo.com/videoplayback?expire=1613785436&ei=_BQwYJ6pGIOcxwSy1Y34Cw&ip=2800%3A810%3A459%3A8562%3Aa9ce%3Ac0ae%3A6e03%3Af9cc&id=o-AMk_kIfolIlqUaCqikqjKAajHAkUBWKOjMeCG5_1vsNu&itag=251&source=youtube&requiressl=yes&mh=6Y&mm=31%2C29&mn=sn-uxaxjxougv-x1xes%2Csn-x1x7zne7&ms=au%2Crdu&mv=m&mvi=6&pl=48&initcwndbps=1017500&vprv=1&mime=audio%2Fwebm&ns=IuMI0Tk4UFk9wVAj4htFtOUF&gir=yes&clen=2946318&otfp=1&dur=191.141&lmt=1587043079036925&mt=1613763402&fvip=6&keepalive=yes&c=WEB&txp=2211222&n=BKWDhtiELuYcKudC&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cotfp%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAL61AIyb7dh-6kKdKkZLmsPQkLOoUdwb7WNAe0ER-OyxAiEA7JCntktggTAHjbE6IemgjdvfIwk_MzDeaiA9A1vcKjA%3D&ratebypass=yes&sig=AOq0QJ8wRQIhAJohHVxcLgFjW0FsmrMm3Zt66WqePHmqrXbAuf_gJeMmAiAdJEo_qPxuGJulvNavvNeoHVprt4Z-Iq6bQVF10bRMBg%3D%3D'


export default function AudioComponent() {
  const [sound, setSound] = useState();
  const [value, setValue] = useState();
  const [status, setStatus] = useState({
    isPlaying: false,
    isLooping: false,
  })
  const [slider, setSlider] = useState(0)


  async function loadSound() {
    console.log('Loading Sound');
    const sound = new Audio.Sound();
    setSound(sound);
    setStatus({ ...status, isPlaying: true });
    await sound.loadAsync({ uri: URL });
    await sound.playAsync();
  }

  async function playSound() {
    console.log('Play Sound');
    setStatus({
      ...status,
      isPlaying: true
    });
    await sound.playAsync();
  }

  async function pauseSound() {
    console.log('Pause Sound');
    setStatus({
      ...status,
      isPlaying: false
    });
    await sound.pauseAsync();
  }

  async function isLooping() {
    const value = !status.isLooping
    setStatus({
      ...status,
      isLooping: value
    }) 
    console.log('isLooping: ', value);
    await sound.setIsLoopingAsync(value)
  }


  { sound 
    ? setTimeout(() => {
      async function onSlider() {
        const state = await sound.getStatusAsync();
        setSlider(state.positionMillis / state.durationMillis)
      } 
      onSlider()
    }, 750)
    : console.log(null)
  }


  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); 
        }
      : undefined;
  }, [sound]);


  useEffect(() => {
    loadSound();
  }, [])


  return (
    <View style={styles.container}>
      <Slider
        style={{width: '100%', height: 40, backgroundColor: '#0000ff33', paddingLeft: -50 }}
        value={ slider || 0}
        step={ 0 } // 0.005
        minimumValue={ 0 }
        maximumValue={ 1 }
        thumbTintColor='#1dcce3'
        minimumTrackTintColor='#FFFFFF'
        maximumTrackTintColor='#000000'
        onValueChange={(value) => setValue(value)}
        onSlidingComplete={async () => {
          const { durationMillis } = await sound.getStatusAsync();
          await sound.setPositionAsync(durationMillis * value)
        }}
      />

      <Button title='Load Sound' onPress={loadSound} />
      {status.isPlaying
        ? <Button title='Pause Sound' onPress={pauseSound} />
        : <Button title='Play Sound' onPress={playSound} />
      }
      <Button title={`Loop: ${status.isLooping ? 'ON' : 'OFF'}`} onPress={isLooping} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
})