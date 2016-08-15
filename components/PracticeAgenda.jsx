import React, { Component } from 'react';
import { connect } from 'react-redux';
const actions = require('../js/actions');

class PracticeAgenda extends Component{
  constructor(props){
    super(props);
    this.setAgenda = this.setAgenda.bind(this);
  }
  setAgenda(evt){
    agenda = evt.target.value;
    this.props.dispatch(actions.setAgenda(agenda));
  }
  render(){
    return(
      <div className="ui form">
        <div className="field">
          <label>Agenda</label>
          <textarea onChange={this.setAgenda}></textarea>
        </div>
      </div>
    );
  };
};

var Container = connect()(PracticeAgenda);
module.exports = Container;
