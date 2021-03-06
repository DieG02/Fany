import { createStore, applyMiddleware } from 'redux'
import Reducers from './redux/reducers'
import thunk from 'redux-thunk';

const configureStore = () => {
  return createStore(Reducers, applyMiddleware(thunk));
} 

export default configureStore;
