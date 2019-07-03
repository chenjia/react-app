import { combineReducers } from 'redux';
import app from './app'

const reducers = combineReducers({
  app: app,
})

export default reducers
