import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

export default class face extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('face', () => face);
