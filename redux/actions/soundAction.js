import {
  LOAD_SOUND,
  LOADING,
  AUTO_PLAY,
} from '../types.js'
import { Audio } from 'expo-av'
import ytdl from 'react-native-ytdl'


export const loadSound = async (url, dispatch) => {

  const data = await ytdl(url, { quality: 'highestaudio' })

  console.log('Loading Sound');
  const { sound } = await Audio.Sound.createAsync({
    uri: data[0].url
  }, { shouldPlay: true });
  
  return dispatch({
    type: LOAD_SOUND,
    sound: sound,
  })
} 


export async function playSound(sound) {
  await sound.playAsync();
}


export async function pauseSound(sound) {
  await sound.pauseAsync();
}


export async function isLooping(value, sound) {
  console.log('isLooping: ', value);
  await sound.setIsLoopingAsync(value);
}


export async function setTiming(value, sound) {
  const { durationMillis } = await sound.getStatusAsync();
  await sound.setPositionAsync(durationMillis * value)
}








    
