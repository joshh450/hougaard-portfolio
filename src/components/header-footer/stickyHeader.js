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
            <img className="header__logo" src="/assets/images/IMG_1112.jpg" />
        </div>

                
        <div className="header__rightColumn">
            <div className="header__nav-link">
                <div className='link__header'>Home</div>
            </div>
            <div className="header__nav-link">
                <div className='link__header'>Projects and Experience</div>
            </div>
            <div className="header__nav-link">
                <div className='link__header'>About Me</div>
            </div>
            <div className="header__nav-link">
                <div className='link__header'>Message</div>
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