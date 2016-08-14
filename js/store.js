var redux  = require('redux');
var createStore = redux.createStore;
// const applyMiddleware = redux.applyMiddleware;
// const thunk = require('redux-thunk').defualt;

var reducers = require('./reducers');

var store = createStore(reducers.journalReducer);

module.exports = store;
