// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, Button } from 'react-native';
// import Slider from '@react-native-community/slider';
// import { Audio } from 'expo-av';


// const URL = 'https://r8---sn-uxaxjxougv-x1xed.googlevideo.com/videoplayback?expire=1614582053&ei=xTw8YMOvEs-gxASt3KbYDg&ip=2800%3A810%3A459%3A8562%3Aa803%3Aeb45%3Abedf%3A5e5e&id=o-AJmy2hjc0Q8Mb3avNJhqwjQtArZKssbyCsUh2s7jvOZN&itag=251&source=youtube&requiressl=yes&mh=IK&mm=31%2C29&mn=sn-uxaxjxougv-x1xed%2Csn-x1x7dn7z&ms=au%2Crdu&mv=m&mvi=8&pcm2cms=yes&pl=48&initcwndbps=1086250&vprv=1&mime=audio%2Fwebm&ns=bWutEH9OW-TJ-05e6X8jB58F&gir=yes&clen=3570970&dur=195.421&lmt=1540548486544157&mt=1614560207&fvip=2&keepalive=yes&c=WEB&txp=5511222&n=GVX3-nFWcWUmeR0ZWs&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhANnk0no9LQOPq8vOfQ74aBC6Q6mZQxXSVWyZL_sIUQ6nAiEAt0qwVq2lhO8nAbDC24YB8sF8RRbcB8-lsidoSvpSQiA%3D&ratebypass=yes&sig=AOq0QJ8wRAIgGn0JZ--4KmO5Ajr6MB4RGzSWWno1suZemZadi6lmrLACIDIC8mCpHDcWV8dzC6ofs1JZ96K8xIJViJdyDDMB9bhu'


// export default function AudioComponent() {
//   const [sound, setSound] = useState();
//   const [value, setValue] = useState();
  
//   const [status, setStatus] = useState({
//     isPlaying: false,
//     isLooping: false,
//   })
//   const [slider, setSlider] = useState(0)

//   async function loadSound() {
//     console.log('Loading Sound');
//     const sound = new Audio.Sound();
//     console.log(sound)
//     setSound(sound);
//     setStatus({ ...status, isPlaying: true });
//     await sound.loadAsync({ uri: URL });
//     await sound.playAsync();
//   }

//   async function playSound() {
//     console.log('Play Sound');
//     setStatus({
//       ...status,
//       isPlaying: true
//     });
//     await sound.playAsync();
//   }

//   async function pauseSound() {
//     console.log('Pause Sound');
//     setStatus({
//       ...status,
//       isPlaying: false
//     });
//     await sound.pauseAsync();
//   }

//   async function isLooping() {
//     const value = !status.isLooping
//     setStatus({
//       ...status,
//       isLooping: value
//     }) 
//     console.log('isLooping: ', value);
//     await sound.setIsLoopingAsync(value)
//   }


//   { sound 
//     ? setTimeout(() => {
//       async function onSlider() {
//         const state = await sound.getStatusAsync();
//         setSlider(state.positionMillis / state.durationMillis)
//       } 
//       onSlider()
//     }, 750)
//     : console.log(null)
//   }


//   useEffect(() => {
//     return sound
//       ? () => {
//           console.log('Unloading Sound');
//           sound.unloadAsync(); 
//         }
//       : undefined;
//   }, [sound]);


//   useEffect(() => {
//     loadSound();
//   }, [])


//   return (
//     <View style={styles.container}>
//       <Slider
//         style={{width: '100%', height: 40, backgroundColor: '#0000ff33', paddingLeft: -50 }}
//         value={ slider || 0}
//         step={ 0 } // 0.005
//         minimumValue={ 0 }
//         maximumValue={ 1 }
//         thumbTintColor='#1dcce3'
//         minimumTrackTintColor='#FFFFFF'
//         maximumTrackTintColor='#000000'
//         onValueChange={(value) => setValue(value)}
//         onSlidingComplete={async () => {
//           const { durationMillis } = await sound.getStatusAsync();
//           await sound.setPositionAsync(durationMillis * value)
//         }}
//       />

//       <Button title='Load Sound' onPress={loadSound} />
//       {status.isPlaying
//         ? <Button title='Pause Sound' onPress={pauseSound} />
//         : <Button title='Play Sound' onPress={playSound} />
//       }
//       <Button title={`Loop: ${status.isLooping ? 'ON' : 'OFF'}`} onPress={isLooping} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 10,
//   },
// })