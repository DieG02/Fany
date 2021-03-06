import { combineReducers } from 'redux'
import app from './uiReducer.js'
import audio from './soundReducer.js'

const mainReducer = combineReducers({
    app,
    audio,
});

export default mainReducer;