import {
  SET_SONG,
  IS_PLAYING,
  IS_FAVOURITE,
  IS_SAVED,
  SET_LOOP,
  LOAD_SOUND,
  SET_DURATION,
} from '../types.js'
import { Audio } from 'expo-av'
import ytdl from 'react-native-ytdl'


export const setSong = (song) => (dispatch) => {
  dispatch({
    type: SET_SONG,
    song,
    payload: true,
  })
}

async function asyncLoadSound (url) {
  const data = await ytdl(url, { quality: 'highestaudio' })
  console.log('Loading Sound');
  const { sound: soundObject } = await Audio.Sound.createAsync({
    uri: data[0].url
  }, { shouldPlay: true });
  return soundObject;
}

export const loadSound = (url, previously) => async (dispatch) => {
  const sound = await asyncLoadSound(url);
  const { durationMillis } = await sound.getStatusAsync();
  try { 
    previously.unloadAsync() 
  }
  catch { 
    console.log('previously not exist')
  };
  dispatch({
    type: LOAD_SOUND,
    payload: sound,
  })

  dispatch({
    type: SET_DURATION,
    payload: durationMillis,
  })
}


export const isPlaying = (boolean) => {
  return {
    type: IS_PLAYING,
    value: boolean,
  }
}
export const isFavourite = (boolean) => {
  return {
    type: IS_FAVOURITE,
    value: boolean,
  }
}
export const isSaved = (boolean) => {
  return {
    type: IS_SAVED,
    value: boolean,
  }
}
export const setLoop = (string) => {
  return {
    type: SET_LOOP,
    icon: string
  }
}
export const setDuration = (number) => {
  return {
    type: SET_DURATION,
    miliseconds: number
  }
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