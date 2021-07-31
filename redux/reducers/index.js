import { combineReducers } from 'redux'
import audio from './song.js';
import user from './user.js';

const mainReducer = combineReducers({
    audio,
    user,
});

export default mainReducer;