import {
  LOAD_SOUND,
  LOADING,
  AUTO_PLAY,
} from '../types.js'


const initialState = {
  sound: {},
  data: {},
  info: {
    isPlaying: false,
    isLooping: false,
    isFavourite: false,
    isLoading: false,
    isLoaded: false,
  }
}


// ...state --> devuelvo todo lo demás
// ...state-ui --> devuelvo las propiedades de ui, alterando solamente la indicada

export default function userInterface(state = initialState, action) {
  switch (action.type) {
    
    case LOAD_SOUND:
      return {
        ...state,
        sound: action.sound,
      } 

    case LOADING:
      return {
        ...state,
        info: {
          ...state.info,
          isLoading: true,
        }
      }

    case AUTO_PLAY:
      return {
        ...state,
        info: {
          ...state.info,
          isLoading: false,
          isLoaded: true,
          isPlaying: true,
        }
      }

    default:
      return state;
  }
}
