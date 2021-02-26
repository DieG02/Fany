import { combineReducers } from 'redux'
import app from './uiReducer.js'
// import profile from './userReducer.js'


const mainReducer = combineReducers({
    app,
});

export default mainReducer;