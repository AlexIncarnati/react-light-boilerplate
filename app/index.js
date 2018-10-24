import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppMain from './components/AppMain';
import './styles/main.scss';

class App extends Component {
  render() {
    return <AppMain />;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
