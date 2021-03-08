import {
  SET_MENU,
  SET_SONG,
  IS_PLAYING,
  IS_FAVOURITE,
  SHOW_MENU,
  SHOW_SONG,
  STATUS_BAR,
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

export const setStatusBar = (properties) => {
  return {
    type: STATUS_BAR,
    payload: properties 
  }
}