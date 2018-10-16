import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className="header__leftColumn">
            <img className="logo" src="/assets/IMG_1112.jpg" />
        </div>

                
        <div className="header__rightColumn">
            <div className="header__nav-link">
                <div className='link__header' to="/">Home</div>
            </div>
            <div className="header__nav-link">
                <div className='link__header' to="/menu">Projects and Experience</div>
            </div>
            <div className="header__nav-link">
                <div className='link__header' to="/contact">About Me</div>
            </div>
            <div className="header__nav-link">
                <div className='link__header' to="/contact">Message</div>
            </div>
        </div>
      </div>
    );
  }
}

export default Header;