import {
  ADD_RECENT_ITEM,
  REMOVE_RECENT_ITEM,
  ADD_LAST_ITEM,
  REMOVE_LAST_ITEM,
} from '../types.js'



export const addRecentItem = (sound) => {
  return function (dispatch) {
    return dispatch({
      type: ADD_RECENT_ITEM,
      item: sound
    })
  }  
}

export const removeRecentItem = () => {
  return function (dispatch) {
    return dispatch({
      type: REMOVE_RECENT_ITEM
    })
  }
}

export const addLastItem = (song) => {
  return function (dispatch) {
    return dispatch({
      type: ADD_LAST_ITEM,
      item: song
    })
  }
}

export const removeLastItem = () => {
  return function (dispatch) {
    return dispatch({
      type: REMOVE_LAST_ITEM
    })
  }
}
