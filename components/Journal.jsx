import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Input from './Input';
import PracticeAgenda from './PracticeAgenda';

const actions = require('../js/actions');

class Journal extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div>
        <Header />
        <Input name={this.props.name} />
        <PracticeAgenda />
      </div>
    );
  };
};

var mapStateToProps = function(state, props){
  return{
    name: state.name
  }
};

var Container = connect(mapStateToProps)(Journal);
module.exports = Container;
