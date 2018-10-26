import React, { Component } from 'react';
import Clock from '../srcClock';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
 
class TheHeader extends Component {
    render() {
        return (
  <StickyHeader
    header={
        <div className='header'>
        <div className="header__leftColumn">
            <img className="header__logo" src="/assets/images/jh-logo.jpeg" />
        </div>

                
        <div className="header__rightColumn">
            <div className="header__nav-link">
                <a href="#home" className='link__header'>Home</a>
            </div>
            <div className="header__nav-link">
                <a href="#experience" className='link__header'>Projects and Experience</a>
            </div>
            <div className="header__nav-link">
                <a href="#about" className='link__header'>About Me</a>
            </div>
            <div className="header__nav-link">
                <a href="#message" className='link__header'>Message</a>
            </div>
            <div className="header__nav-link">
                <Clock />
            </div>
        </div>
      </div>
    }
  >
  </StickyHeader>
        );
    }
}

export default TheHeader;