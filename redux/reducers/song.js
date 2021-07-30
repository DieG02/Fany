import {
  LOAD_SOUND,
  LOADING,
  AUTO_PLAY,
  SET_SONG,
  IS_PLAYING,
  IS_FAVOURITE,
  IS_SAVED,
  SET_LOOP,
  SET_DURATION,
  SHOW_SONG,
} from '../types.js'


const initialState = {
  ui: {
    isLoading: false,
    showSong: false, 
  },
  song: {
    image: '',
    title: '',
    artist: '',
    url: '',
    videoId: '',
    // album: '',
    icon: 'noRepeat'
  },
  info: {
    isPlaying: false,
    isLooping: false,
    isFavourite: false,
    isLoading: false,
    isLoaded: false,
  },
  file: {},
}


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
    case SET_SONG:
      const { iconImage, image, title, artist, url, videoId } = action.song
      return {
        ...state,
        ui: {
          ...state.ui,
          showSong: action.exist
        },
        song: {
          ...state.song,
          image,
          title,
          artist,
          url,
          videoId,
        }
      }

    case SET_DURATION:
      return {
        ...state,
        song: {
          ...state.song,
          duration: action.payload,
        }
      }

    case IS_PLAYING:
      return {
        ...state,
        song: {
          ...state.song,
          playing: action.value
        }
      }

    case IS_FAVOURITE:
      return {
        ...state,
        song: {
          ...state.song,
          favourite: action.value
        }
      }

    case IS_SAVED:
      return {
        ...state,
        song: {
          ...state.song,
          save: action.value
        }
      }

    case SET_LOOP:
      return {
        ...state,
        song: {
          ...state.song,
          icon: action.icon
        }
      }

    case SET_DURATION:
      return {
        ...state,
        song: {
          ...state.song,
          duration: action.miliseconds
        }
      }


    case SHOW_SONG:
      return {
        ...state,
        ui: {
          ...state.ui,
          showSong: action.value
        }
      }

    default:
      return state;
  }
}

