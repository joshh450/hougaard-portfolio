import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className="footer__topRow">
            <img className="footer__logo" src="/assets/images/IMG_1112.jpg" />
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