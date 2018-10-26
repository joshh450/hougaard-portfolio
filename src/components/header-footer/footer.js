import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className="footer__topRow">
            <img className="footer__logo" src="/assets/images/jh-logo.jpeg" />
        </div>

                
        <div className="footer__bottomRow">
            <div className="footer__nav-link">
                <a href="#home" className='link__footer'>Home</a>
            </div>
            <div className="footer__nav-link">
                <a href="#experience" className='link__footer'>Projects and Experience</a>
            </div>
            <div className="footer__nav-link">
                <a href="#about" className='link__footer'>About Me</a>
            </div>
            <div className="footer__nav-link">
                <a href="#message" className='link__footer'>Message</a>
            </div>
            <div className="socialmedia__nav-links">
                <a className ="nav-link" href="https://www.linkedin.com/in/joshua-hougaard" target="blank"><i className="fab fa-linkedin-in"></i></a>
                <a className ="nav-link" href="https://github.com/joshh450" target="blank"><i className="fab fa-github"></i></a>
                <a className ="nav-link" href="https://codepen.io/joshh450" target="blank"><i className="fab fa-codepen"></i></a>
                <a className ="nav-link" href="https://www.facebook.com/people/Joshua-Hougaard/100000954410951" target="blank"><i className="fab fa-facebook-f"></i></a>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;