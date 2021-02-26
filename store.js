import { createStore } from 'redux'
import Reducers from './redux/reducers'

export default function configureStore() {
  const store = createStore(Reducers);
  return store
} 