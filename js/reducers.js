const actions = require('./actions');

var journalState = {
  name: '',
  agenda: ''
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
  else if (action.type === actions.SET_AGENDA){
    var agenda = action.agenda;
    var agendaState = Object.assign({}, state, {
      agenda: agenda
    });
    return agendaState;
  }
  return state;
}

exports.journalReducer = journalReducer;
