import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';


const URL = 'https://r6---sn-uxaxjxougv-x1xes.googlevideo.com/videoplayback?expire=1613763729&ei=McAvYKO2LsuLwQSsnaOACQ&ip=2800%3A810%3A459%3A8562%3Acc00%3Ae349%3Aa098%3A56c9&id=o-ALlmzz_qgJ9mwd4a7h_6FH1uu3RpbmhULg1usyTadbAh&itag=251&source=youtube&requiressl=yes&mh=6Y&mm=31%2C29&mn=sn-uxaxjxougv-x1xes%2Csn-x1x7zne7&ms=au%2Crdu&mv=m&mvi=6&pcm2cms=yes&pl=48&initcwndbps=990000&vprv=1&mime=audio%2Fwebm&ns=MdPOm4qFqP7ZWORQgfnLzToF&gir=yes&clen=2946318&otfp=1&dur=191.141&lmt=1587043079036925&mt=1613741802&fvip=6&keepalive=yes&c=WEB&txp=2211222&n=vpqeZT2DzxYVm7Fw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cotfp%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhANnvgItoBVln_2o0MO4hPOJGl9blivfzIWr9meGfhDNqAiB6KugIlscUrEaTWzNII2-ZMcnvLAl36nT8N_8blC2yeA%3D%3D&ratebypass=yes&sig=AOq0QJ8wRAIgOib0AlHM5y0EWwaCLOU36UQAM3rf4hXrfVrYogIAkTMCIDeh6iLW5UDuGs_RIobjlQgYJHnpp37yX7zY8QA4cTw8';



export default function App() {
  const [sound, setSound] = useState();
  const [status, setStatus] = useState({
    isPlaying: false,
    isLooping: false,
  })
  const [slider, setSlider] = useState(0)


  
  async function loadSound() {
    console.log('Loading Sound');
    const sound = new Audio.Sound();
    setSound(sound);
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

  useEffect(() => {
    sound 
    ? (async () => {
        const state = await sound.getStatusAsync();
        setSlider(state.positionMillis / state.durationMillis)
      })()
    : console.log(null)
  })


  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); 
        }
      : undefined;
  }, [sound]);



  return (
    <View style={styles.container}>
      <Slider
        style={{width: '100%', height: 40, backgroundColor: '#0000ff33' }}
        value={ slider || 0}
        step={ 0 } // 0.005
        minimumValue={ 0 }
        maximumValue={ 1 }
        thumbTintColor='#1dcce3'
        minimumTrackTintColor='#FFFFFF'
        maximumTrackTintColor='#000000'
        onValueChange={async (value) => {
          const state = await sound.getStatusAsync();
          await sound.setPositionAsync(state.durationMillis * value)
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