import {
  ADD_RECENT_ITEM,
  REMOVE_RECENT_ITEM,
  ADD_LAST_ITEM,
  REMOVE_LAST_ITEM,
} from '../types.js'


const initialState = {
  recents: [],  // 20 last song saved, like 'Add to listen later'
  lasts: [],  // 10 last song searched
}


// ...state --> devuelvo todo lo demás
// ...state-ui --> devuelvo las propiedades de ui, alterando solamente la indicada

export default function userInterface(state = initialState, action) {
  switch (action.type) {

    case ADD_RECENT_ITEM:
      return {
        ...state,
        recents: [action.item, ...state.recents]  // Array.unshift(value)
      }

    case REMOVE_RECENT_ITEM:
      return {
        ...state,
        recents: [...state.recents].filter((x, index) => index !== 21) //Array.pop()
      }

    case ADD_LAST_ITEM:
      return {
        ...state,
        lasts: [action.last, ...state.lasts]
      }  

    case REMOVE_LAST_ITEM:
      return {
        ...state,
        lasts: [...state.lasts].filter((song) => song.videoId !== action.videoId)
      }

    default:
      return state;
  }
}
