import React, { Component } from 'react';
import { connect } from 'react-redux';
const actions = require('../js/actions');

class Input extends Component{
  constructor(props){
    super(props);
    this.setName = this.setName.bind(this);
  }
  setName(evt){
    var name = evt.target.value;
    this.props.dispatch(actions.testInput(name));
  }
  render(){
    return(
      <div>
        <input type="text" placeholder="Name" onChange={this.setName} />
        <p>{this.props.name}</p>
      </div>
    );
  };
};

var Container = connect()(Input);
module.exports = Container;
