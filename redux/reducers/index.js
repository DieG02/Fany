import { combineReducers } from 'redux'
import app from './uiReducer.js'


const mainReducer = combineReducers({
    app,
});

export default mainReducer;