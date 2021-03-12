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



export const setMenu = (name) => {
  return {
    type: SET_MENU,
    menu: name
  }  
}

export const setSong = (object) => {
  return {
    type: SET_SONG,
    song: object,
    exist: true,
  }  
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
  return{
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

export const showMenu = (boolean) => {
  return {
    type: SHOW_MENU,
    value: boolean
  }
}

export const showSong = (boolean) => {
  return {
    type: SHOW_SONG,
    value: boolean
  }
}
