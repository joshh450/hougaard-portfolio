import React, { Component } from 'react';

class PageOne extends Component {
  render() {
    return (
      <div className='pageOne'>
      <a id="home" class="smooth"></a>
        <div className="pageOne__parallax">
            <div className="pageOne__initialinfo">
              <div className="pageOne__initialinfo__content">
                  <h1>Joshua Hougaard</h1>
                  <h2>React, Python and JavaScript Developer</h2>
              </div>
              <div className="homepage-socialmedia__nav-links">
                <a className ="nav-link" href="https://www.linkedin.com/in/joshua-hougaard" target="blank"><i className="fab fa-linkedin-in"></i></a>
                <a className ="nav-link" href="https://github.com/joshh450" target="blank"><i className="fab fa-github"></i></a>
                <a className ="nav-link" href="https://codepen.io/joshh450" target="blank"><i className="fab fa-codepen"></i></a>
                <a className ="nav-link" href="https://www.facebook.com/people/Joshua-Hougaard/100000954410951" target="blank"><i className="fab fa-facebook-f"></i></a>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default PageOne;