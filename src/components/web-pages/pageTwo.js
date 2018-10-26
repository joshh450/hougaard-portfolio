import React, { Component } from 'react';

class PageTwo extends Component {
  render() {
    return (
      <div className='pageTwo'>
      <a id="experience" class="smooth"></a>
        <div className="pageTwo__parallax">
          <div className="pageTwo__title">
            <h1 className="pageTwo__portfolio__header">Projects and Experience</h1>
          </div>
          <div className="pageTwo__portfolio__info">

            <div className="pageTwo__portfolio__examples">
              <a className="pageTwo__portfolio__examples__links" href="https://sensuous-sandwichs.herokuapp.com" target="blank">
                <h3>Sensuous Sandwich Project</h3>
                <p className="pageTwo__portfolio__examples__links__paragraphs">Development team and I built a demo site for Sensuous Sandwich in one day. Click to visit!</p>
                <img className="site_examples" src="/assets/images/sensuous-sandwich.png" />
              </a>
            </div>

            <div className="pageTwo__portfolio__examples">
              <a className="pageTwo__portfolio__examples__links" href="https://jh-course-scheduler.herokuapp.com" target="blank">
                <h3>Class Scheduler App</h3>
                <p className="pageTwo__portfolio__examples__links__paragraphs">I created a course scheduler application using React and JavaScript. Click to visit!</p>
                <img className="site_examples" src="/assets/images/course-scheduler.png" />
              </a>
            </div>

            <div className="pageTwo__portfolio__examples">
              <a className="pageTwo__portfolio__examples__links" href="https://jh-madlibs.herokuapp.com" target="blank">
                <h3>Mad Libs App</h3>
                <p className="pageTwo__portfolio__examples__links__paragraphs">I created a Mad Libs game with a very clean UI using React and JavaScript. Click to visit!</p>
                <img className="site_examples" src="/assets/images/mad-libs.png" />
              </a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default PageTwo;