import React, { Component } from 'react';
import Header from './header-footer/header';
import Footer from './header-footer/footer';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
          <div className="app__parallax">
              <Header />
              <div className="initial-page-info">
                <h1>Joshua Hougaard</h1>
                <h2>React, Python and JavaScript Developer</h2>
              </div>
          </div>
          <div className="app__parallax2"></div>
          <div className="app__parallax3"></div>
          <div className="app__parallax4"></div>

          <Footer />
      </div>
    );
  }
}
