import React from 'react';
import Shell from '../Shell';

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    var uagent = navigator.userAgent.toLowerCase();
    this.state = {
      isStartCourse: false,
      isMobile: uagent.search("mobile") > -1,
      isLoading: true,
    }
  }

  startCourse() {
    this.setState({isStartCourse: true})
  }

  playInstructionAudio() {
  }

  render() {
    if (this.state.isStartCourse) {
      return (
        <div>
          <Shell />
        </div>
      )
    }
    else {
      return (
        <div className="intro-container">
          {this.state.isMobile &&
            <div className="playAudioParent">
              <div className="playBlinkBlack"></div>
              <div className="playBlink" onClick={this.playInstructionAudio.bind(null, this)}>
                   <a className="button-autoPlay" href="#"></a>
              </div>
            </div>
          }
          <div className="logo-container">
            <img src="../app/assets/images/ui/intro-logo.png" />
            <p className="title">Course instructions</p>
          </div>
          <div className="intro-text">
            <div className="intro-text-line">
              <div className="button-icon"><span className="icon-btn"></span></div>
              <div className="button-text ">Adjust your audio settings.</div>
            </div>
            <div className="intro-text-line">
              <div className="button-icon"><span className="icon-btn"></span></div>
              <div className="button-text">Hide or display the Transcript at any time.</div>
            </div>
            <div className="intro-text-line">
              <div className="button-icon"><span className="icon-btn"></span></div>
              <div className="button-text">Hide or display the Topics at any time.</div>
            </div>
            <div className="intro-text-line">
              <div className="button-icon-blank"><span className="icon-btn"></span></div>
              <div className="button-text">Print the course PDF from the Print section</div>
            </div>
            <div className="intro-text-line">
              <div className="button-icon-blank"><span className="icon-btn"></span></div>
              <div className="button-text">Email: <a href="mailTo:ACSHSMVocollectTrainingRequests@honeywell.com" className="fontStyle" role="button"><u>Training</u></a></div>
            </div>
            <div className="intro-text-line">
              <div className="button-icon-blank"><span className="icon-btn"></span></div>
              <div className="button-text">Course duration: 10 minutes</div>
            </div>
            <div className="intro-text-line">
              <div className="start-btn-container">
                Select <span className="fontBold">Start</span> to proceed with the course.
                <a href="#" className="start-button" role="button" onClick={this.startCourse.bind(this)}>
                  Start
                </a>
              </div>
            </div>
            <div className="system-check"></div>
            <div className="dis_img1"></div>
          </div>
        </div>
      )
    }
  }
}
