import React, { Component } from 'react';

class PageFour extends Component {
  render() {
    return (
      <div className='pageFour'>
        <div className="app__parallax4">
          <div className="form">
                <div className="form-group">
                    <input type="text" id="fullName" placeholder="Your name"></input>
                    <label for="fullName">Your Name</label>
                </div>

                <div className="form-group">
                    <input type="email" id="email" placeholder="Your email"></input>
                    <label for="email">Your email</label>
                </div>

                <div className="form-group">
                    <textarea name="subject" id="subject" placeholder="Subject"></textarea>
                    <label for="subject">Subject</label>
                </div>

                <div className="form-group">
                    <textarea name="message" id="message" placeholder="Message"></textarea>
                    <label for="message">Message</label>
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