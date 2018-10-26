import React, { Component } from 'react';

class PageFour extends Component {
  render() {
    return (
      <div className='pageFour'>
      <a id="message" class="smooth anchor"></a>
        <div className="pageFour__parallax">
        <div className="pageFour__title">
            <h1 className="pageFour__portfolio__header">Message</h1>
        </div>  
          <form className="form" action="mailto:joshua.hougaard@gmail.com?subject=Hello from your Website" method="post" encType="text/plain">
                <div className="form__group">
                    <input name="Name" type="text" className="fullName" placeholder="Your name"></input>
                    {/* <label htmlFor="fullName">Your Name</label> */}
                </div>

                <div className="form__group">
                    <input name="Email" type="email" className="email" placeholder="Your email"></input>
                    {/* <label htmlFor="email">Your email</label> */}
                </div>

                <div className="form__group">
                    <input name="Subject" className="subject" placeholder="Subject"></input>
                    {/* <label htmlFor="subject">Subject</label> */}
                </div>

                <div className="form__group">
                    <textarea name="Message" className="message" placeholder="Message"></textarea>
                    {/* <label htmlFor="message">Message</label> */}
                </div>

                <div className="centered-btn-wrapper">
                    <button type="submit" className="btn">Send</button>
                </div>
            </form>
          </div>
      </div>
    );
  }
}

export default PageFour;