import {
  ADD_RECENT_ITEM,
  REMOVE_RECENT_ITEM,
  ADD_LAST_ITEM,
  REMOVE_LAST_ITEM,
} from '../types.js'


const initialState = {
  user: {
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
}

// <--- TO DO --->
// export function Artists(state = initialState, action) {
//   switch (action.type) {
//     default:
//       return state;
//   }
// }


export function Recents(state = initialState, action) {
  switch (action.type) {
    case ADD_RECENT_ITEM:
      return {
        ...state,
        recents: [action.item, ...state.recents]  // Array.unshift(item)
      }

    case REMOVE_RECENT_ITEM:
      return {
        ...state,
        recents: [...state.recents].filter((x, index) => index !== 21) //Array.pop()
      }

    default:
      return state;
  }
}

// <--- TO DO --->
// export function Playlists(state = initialState, action) {
//   switch (action.type) {
//     default:
//       return state;
//   }
// }


export function Lasts(state = initialState, action) {
  switch (action.type) {
    case ADD_LAST_ITEM:
      return {
        ...state,
        lasts: [action.item, ...state.lasts.filter((song) => song.videoId !== action.item.videoId)]
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
