import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h1>Hello</h1>
      </div>
    );
  };
};

var Container = connect()(Header);
module.exports = Container;
