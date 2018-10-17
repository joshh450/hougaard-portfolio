import React, { Component } from 'react';
import Header from './header-footer/header';
import Footer from './header-footer/footer';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
          <div className="app__parallax">
              <Header />
              <div className="app__parallax__initialinfo">
                <h1 className="app__parallax__initialinfo__headers">Joshua Hougaard</h1>
                <h2 className="app__parallax__initialinfo__headers">React, Python and JavaScript Developer</h2>
              </div>
          </div>

          <div className="app__parallax2">
              <h1>Portfolio</h1>
              <h3>Sensuous Sandwich Project</h3>
              <p>Development team and I built a demo site for Sensuous Sandwich in one day.</p>
              <h3>Class Scheduler App</h3>
              <p>I created a class scheduler application using React and JavaScript.</p>
              <h3>Mad Libs App</h3>
              <p>I created a Mad Libs game with a very clean UI using React and JavaScript.</p>
          </div>

          <div className="app__parallax3">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat lacus, viverra ac semper et, blandit non massa. Ut aliquam enim ac ante laoreet varius. Vestibulum sed efficitur arcu. In faucibus sed est et porta. Sed magna turpis, auctor facilisis ipsum in, euismod varius dui. Nunc sit amet aliquam ante. Donec eu diam felis. Nulla nunc turpis, pulvinar a nisi vel, gravida iaculis nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nulla ex, volutpat tempor mauris et, dapibus viverra mauris. Duis eget cursus mi, nec condimentum tortor. Sed vehicula, enim quis dapibus convallis, velit purus luctus augue, a congue eros ligula nec metus. Vivamus gravida ipsum nec tincidunt lacinia.

Curabitur elit mauris, posuere at turpis quis, ullamcorper dapibus ex. Proin viverra vitae dui ut pellentesque. Integer tempor urna id mauris dapibus pulvinar. Vestibulum condimentum enim a erat efficitur volutpat. Proin tristique nulla erat, ut consequat velit finibus pharetra. Duis aliquet lobortis metus vitae sagittis. Vivamus vel lectus nec urna lacinia bibendum. Duis vulputate pellentesque dolor, at consequat neque accumsan a.

Nullam at erat ultricies, luctus felis in, luctus risus. Nunc aliquam rutrum iaculis. Suspendisse scelerisque eu elit a mattis. Ut egestas, tortor vel sagittis ullamcorper, ipsum nulla volutpat dolor, eget scelerisque lectus metus eu ex. Donec blandit mattis tincidunt. Phasellus venenatis id nisl et lacinia. Integer congue pulvinar ex bibendum imperdiet.

Vivamus eget mollis odio. Aliquam non vulputate ex. Donec sed dui nec elit commodo vulputate ut non urna. Maecenas purus ligula, ullamcorper.</p>
          </div>

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
                    <textarea name="message" id="message" placeholder="Message"></textarea>
                    <label for="message">Message</label>
                </div>

                <div className="centered-btn-wrapper">
                    <button type="submit" className="btn">Send</button>
                </div>
            </div>
          

          </div>

          <Footer />
      </div>
    );
  }
}
