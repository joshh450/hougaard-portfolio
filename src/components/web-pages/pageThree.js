import React, { Component } from 'react';

class PageThree extends Component {
  render() {
    return (
      <div className='pageThree'>
      <a id="about" class="smooth"></a>
        <div className="pageThree__parallax">
            <img className="profile-picture" src="/assets/images/myportfolioimage.jpg" />
            <div className="about-me">
              <p className="about-me__content">Thanks for coming to visit my site! I'm Josh, a 21 year-old web developer. I enjoy utilizing modern development languages and techniques to create simple, clean and elegant web applications. I was born and raised in Orem, UT, and enjoy all the different activities that Utah has to offer. Some of these activities include Snowboarding, Wakeboarding, Longboarding (things with a board I guess?), and pretty much all the other sports. I married my High School Sweetheart and couldn't be happier with that decision. I'm also bilingual, and find speaking Spanish to be very fun. <br></br> I have experience building single and multi-page web applications. I follow industry best practices and standards to create amazing projects. My strongest languages are React.js, Javascript, JQuery, HTML, SCSS, Flexbox, CSS grid, and Redux, though I'm certified in many more. I’ve worked in various positions and capacities over my career, many of which gave me the opportunity to work with people and assist them with questions or needs. I've gained experience in teaching settings, and have developed a hard work ethic and mindset. </p>
            </div>
        </div>
      </div>
    );
  }
}

export default PageThree;