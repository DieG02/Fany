import {
  ADD_RECENT_ITEM,
  REMOVE_RECENT_ITEM,
  ADD_LAST_ITEM,
  REMOVE_LAST_ITEM,
} from '../types.js'


const initialState = {
  profile: {
    isAuthenticated: false,
    email: '',
    password: '',
    userName: '',
    photo: '',
    gender: 'undefined',
    age: null,
  },
  recents: [],  // 20 last song saved, like 'Add to listen later'
  lasts: [],  // 10 last song searched
}

// export function User(state = initialState, action) {
//   switch(action.type) {
//     case ADD_USER:
//       return {
//         ...state,
//         ...state.user,
//         user: state.payload.user,
//       }
//   }
// }

// <--- TO DO --->
// export function Artists(state = initialState, action) {
//   switch (action.type) {
//     default:
//       return state;
//   }
// }
// <--- TO DO --->
// export function Playlists(state = initialState, action) {
//   switch (action.type) {
//     default:
//       return state;
//   }
// }


export default function user(state = initialState, action) {
  switch (action.type) {
    case ADD_RECENT_ITEM:
      return {
        ...state,
        recents: [action.payload, ...state.recents]  // Array.unshift(item)
      }

    case REMOVE_RECENT_ITEM:
      return {
        ...state,
        recents: [...state.recents].filter((x, index) => index !== 21) //Array.pop()
      }


    case ADD_LAST_ITEM:
      return {
        ...state,
        lasts: [action.payload, ...state.lasts.filter((song) => song.videoId !== action.payload.videoId)]
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


