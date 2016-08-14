const actions = require('./actions');

var journalState = {
  name: ''
}

var journalReducer = function(state, action){
  state = state || journalState;
  if (action.type === actions.TEST_INPUT){
    var name = action.name;
    var nameState = Object.assign({}, state, {
      name: name
    });
    return nameState;
  }
  return state;
}

exports.journalReducer = journalReducer;
