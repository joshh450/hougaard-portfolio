import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className="footer__topRow">
            <img className="footer__logo" src="/assets/IMG_1112.jpg" />
        </div>

                
        <div className="footer__bottomRow">
            <div className="footer__nav-link">
                <div className='link__footer' to="/">Home</div>
            </div>
            <div className="footer__nav-link">
                <div className='link__footer' to="/menu">Projects and Experience</div>
            </div>
            <div className="footer__nav-link">
                <div className='link__footer' to="/contact">About Me</div>
            </div>
            <div className="footer__nav-link">
                <div className='link__footer' to="/contact">Message</div>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;