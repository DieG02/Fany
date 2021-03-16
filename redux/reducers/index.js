import { combineReducers } from 'redux'
import app from './uiReducer.js'
import audio from './soundReducer.js'
import user from './userReducer.js'

const mainReducer = combineReducers({
    app,
    audio,
    user,
});

export default mainReducer;