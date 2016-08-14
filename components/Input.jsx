import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <input type="text" placeholder="Name" />
      </div>
    );
  };
};

var Container = connect()(Input);
module.exports = Container;
