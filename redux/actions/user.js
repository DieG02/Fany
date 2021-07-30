import {
  ADD_RECENT_ITEM,
  REMOVE_RECENT_ITEM,
  ADD_LAST_ITEM,
  REMOVE_LAST_ITEM,
} from '../types.js'


export const addRecentItem = (sound) => (dispatch) => {
  dispatch({
    type: ADD_RECENT_ITEM,
    item: sound
  })
}

export const removeRecentItem = () => (dispatch) => {
  dispatch({
    type: REMOVE_RECENT_ITEM
  })
}

export const addLastItem = (song) => (dispatch) => {
  dispatch({
    type: ADD_LAST_ITEM,
    item: song
  })
}

export const removeLastItem = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_LAST_ITEM,
    videoId: id
  })
}
