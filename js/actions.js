const SET_AGENDA = 'SET_AGENDA';
const setAgenda = function(agenda){
  return{
    type: SET_AGENDA,
    agenda: agenda
  }
}

const TEST_INPUT = 'TEST_INPUT';
const testInput = function(name){
  return{
    type: TEST_INPUT,
    name: name
  };
};

exports.TEST_INPUT = TEST_INPUT;
exports.testInput = testInput;

exports.SET_AGENDA = SET_AGENDA;
exports.setAgenda = setAgenda;
