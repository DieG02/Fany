import {
  SET_MENU,
  SET_SONG,
  IS_PLAYING,
  IS_FAVOURITE,
  IS_SAVED,
  SET_LOOP,
  SET_DURATION,
  SHOW_MENU,
  SHOW_SONG,
} from '../types.js'


const initialState = {
  ui: {
    //All the UI related state here. eg: hide/show modals, toggle checkbox etc.
    menuSelected: '',
    isLoading: false,
    showSong: false,
    showMenu: false,
  },
  user: {
    isAuthenticated: false,
    email: '',
    password: '',
    userName: '',
    photo: '',
    gender: 'undefined',
    age: 0,
  },
  song: {
    image: '',
    title: '',
    artist: '',
    album: '',
    url: '',
    videoId: '',
    favourite: false,
    playing: false,
    save: false,
    icon: 'noRepeat'
  },

}


// ...state --> devuelvo todo lo demás
// ...state-ui --> devuelvo las propiedades de ui, alterando solamente la indicada

export default function userInterface(state = initialState, action) {
  switch (action.type) {
    
    case SET_MENU:
      return {
        ...state,
        ui: {
          ...state.ui,
          menuSelected: action.menu
        }
      };

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

    case SHOW_MENU: 
      return {
        ...state,
        ui: {
          ...state.ui,
          showMenu: action.value
        }
      };
    
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
