import {
  SET_MENU,
  SET_SONG,
  IS_PLAYING,
  IS_FAVOURITE,
  IS_SAVED,
  SET_LOOP,
  SHOW_MENU,
  SHOW_SONG,
} from '../types.js'

import {
  LOAD_SOUND,
  SET_DURATION,
} from '../types.js'
import { Audio } from 'expo-av'
import ytdl from 'react-native-ytdl'



export const loadSound = async (url, dispatch) => {

  const data = await ytdl(url, { quality: 'highestaudio' })

  console.log('Loading Sound');
  const { sound } = await Audio.Sound.createAsync({
    uri: data[0].url
  }, { shouldPlay: true });
  const { durationMillis } = await sound.getStatusAsync();

  dispatch({
    type: SET_DURATION,
    payload: durationMillis,
  })

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




export const setSong = async (song) => (dispatch) => {
  const youtubeURL = 'http://www.youtube.com/watch?v=04GiqLjRO3A';
  const urls = await ytdl(youtubeURL, { quality: 'highestaudio' });
  console.log(urls)

  dispatch({
    type: SET_SONG,
    song,
    payload: true,
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

export const showSong = (boolean) => {
  return {
    type: SHOW_SONG,
    value: boolean
  }
}






