import {
  SET_MENU,
  SET_SONG,
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
