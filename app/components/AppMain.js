import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class AppMain extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default AppMain;
