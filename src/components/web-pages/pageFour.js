import React, { Component } from 'react';

class PageFour extends Component {
  render() {
    return (
      <div className='pageFour'>
        <div className="pageFour__parallax">
          <div className="form">
                <div className="form-group">
                    <input type="text" id="fullName" placeholder="Your name"></input>
                    <label htmlFor="fullName">Your Name</label>
                </div>

                <div className="form-group">
                    <input type="email" id="email" placeholder="Your email"></input>
                    <label htmlFor="email">Your email</label>
                </div>

                <div className="form-group">
                    <textarea name="subject" id="subject" placeholder="Subject"></textarea>
                    <label htmlFor="subject">Subject</label>
                </div>

                <div className="form-group">
                    <textarea name="message" id="message" placeholder="Message"></textarea>
                    <label htmlFor="message">Message</label>
                </div>

                <div className="centered-btn-wrapper">
                    <button type="submit" className="btn">Send</button>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default PageFour;