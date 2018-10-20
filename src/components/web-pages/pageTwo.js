import React, { Component } from 'react';

class PageTwo extends Component {
  render() {
    return (
      <div className='pageTwo'>
        <div className="pageTwo__parallax">
          <div className="pageTwo__title">
            <h1 className="pageTwo__portfolio__header">Projects and Experience</h1>
          </div>
          <div className="pageTwo__portfolio__info">

            <div className="pageTwo__portfolio__examples">
              <h3>Sensuous Sandwich Project</h3>
              <p>Development team and I built a demo site for Sensuous Sandwich in one day. Click to visit!</p>
              <a href="https://sensuous-sandwichs.herokuapp.com" target="blank"><img className="site_examples" src="/assets/images/sensuous-sandwich.png" /></a>
            </div>

            <div className="pageTwo__portfolio__examples">
              <h3>Class Scheduler App</h3>
              <p>I created a course scheduler application using React and JavaScript. Click to visit!</p>
              <a href="https://jh-course-scheduler.herokuapp.com" target="blank"><img className="site_examples" src="/assets/images/course-scheduler.png" /></a>
            </div>

            <div className="pageTwo__portfolio__examples">
              <h3>Mad Libs App</h3>
              <p>I created a Mad Libs game with a very clean UI using React and JavaScript. Click to visit!</p>
              <a href="https://jh-madlibs.herokuapp.com" target="blank"><img className="site_examples" src="/assets/images/mad-libs.png" /></a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default PageTwo;