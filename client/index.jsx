import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';


import Journal from '../components/Journal';

import store from '../js/store';

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Provider store={store}>
        <Journal name={this.props.name} />
      </Provider>
    );
  };
};

Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});
