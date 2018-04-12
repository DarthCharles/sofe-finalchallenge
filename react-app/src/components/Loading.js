import React from 'react';

const loadingMessages = ['Are we there yet?',
  'Checking the gravitational constant in your locale...',
  'Don\'t worry - a few flights tried to escape, but we caught them.',
  'Our travel specialist are looking for your the best deal.',
  'Gotta book \'em all!',
  'Please hold on tight. We\'re finding all your personalized flights.',
  'Be careful what you wish for, you might love all the flights we find for you.',
  'You love travel? We love you...',
  'We\'re collecting some great options for your flight!',
  'Are you excited? Well we\'re excited for you!',
  'We\'re getting a list of flights for you to check out.',
  'Use our sorting feature to maximize your travel potential.',
  'Don\'t use a chainsaw to cut paper. Same goes for finding flights.',
  'You are special and we are finding a special flight for you.',
  'We are working very hard to bring you the best deals.',
  'Pick any flight you want!',
  'We really hope you find what you are looking for.',
  'Everyone deserves some good vacations.',
  'Selecting a flight is a very special moment.',
  'Select the flight that suits your needs.',
  'Have you ever been in Tijuana?'];

class LoadingScreen extends React.Component {
  constructor() {
    super();
    this.defaultMessage = 'Loading...';
    this.transitionHideTime = 300;
    this.displayMessageTimer = null;
    this.displayMessageTime = 4000;
    this.animationTimer = null;
    this.animationTime = 300;

    this.state = {
      isChanging: false,
      message: this.defaultMessage
    };
  }

  componentDidMount() {
    this.setMessage();
    this.startTimer();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isChanging && !prevState.isChanging) {
      // Every time a message is shown, update isChanging
      // to trigger fade out animation after 300ms.
      this.animationTimer = setTimeout(() => {
        this.setState({ isChanging: false });
      }, this.transitionHideTime);
    }
  }

  componentWillUnmount() {
    clearInterval(this.displayMessageTimer);
    clearTimeout(this.animationTimer);
  }

  startTimer() {
    // Messages will be shown every 4 seconds.
    this.displayMessageTimer = setInterval(() => {
      // Update isChanging to trigger fade out animation
      this.setState({ isChanging: true });

      // Add 300ms delay to show animation
      setTimeout(() => {
        this.setMessage();
      }, this.animationTime);
    }, this.displayMessageTime);
  }

  setMessage() {
    const messageIndex = Math.floor(Math.random() * loadingMessages.length);
    this.setState({ message: loadingMessages[messageIndex] });
  }

  render() {
    const { message } = this.state;
    return (
      <div className='ipl-progress-indicator' id='ipl-progress-indicator'>
        <div className='ipl-progress-indicator-head'>
          <div className='first-indicator' />
          <div className='second-indicator' />
        </div>
        <div className='insp-logo-frame'>
          <div className='insp-logo-frame-icon'>
            <i className='icon-airplane' />
          </div>
          <div className='ipl-loading'>
            <h3>{ message }</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingScreen;
