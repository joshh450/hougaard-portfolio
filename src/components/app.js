import React, { Component } from 'react';
import Header from './header-footer/header';
import Footer from './header-footer/footer';
import PageOne from './web-pages/pageOne';
import PageTwo from './web-pages/pageTwo';
import PageThree from './web-pages/pageThree';
import PageFour from './web-pages/pageFour';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour />
        <Footer />
      </div>
    );
  }
}
