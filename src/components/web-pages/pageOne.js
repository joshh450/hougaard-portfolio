import React, { Component } from 'react';

class PageOne extends Component {
  render() {
    return (
      <div className='pageOne'>
        <div className="pageOne__parallax">
            <div className="pageOne__initialinfo">
              <div className="pageOne__initialinfo__content">
                  <h1>Joshua Hougaard</h1>
                  <h2>React, Python and JavaScript Developer</h2>
              </div>
              <div className="homepage-socialmedia__nav-links">
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-github"></i>
                <i className="fab fa-codepen"></i>
                <i className="fab fa-facebook-f"></i>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default PageOne;