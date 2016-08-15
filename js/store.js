//var redux  = require('redux');
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

var reducers = require('./reducers');

const logger = createLogger();
const store = createStore(
  reducers.journalReducer,
  applyMiddleware(thunk, logger)
);

module.exports = store;
