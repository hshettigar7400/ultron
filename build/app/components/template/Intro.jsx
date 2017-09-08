import React from 'react';
import Shell from '../Shell';
import VisualMenu from './VisualMenu';
import * as utils from '../Utils';
import MediaQuery from 'react-responsive';
import FontAwesome from 'react-fontawesome';

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStartCourse: false,
      isMobile: utils.isMobile,
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
      if(utils.configData.course.hasVisualMenu)
        return (
          <VisualMenu />
        )
      else
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
          <MediaQuery query='(min-device-width: 1024px)'>
            <div className="content">
              <div className="bg">
                <div className="logo"> <img src=""/></div>
                <div className="title welcome_text">
                  <h1><span className="intro_para_one_bold">Welcome <br/> to this short course,</span></h1>
                  <h1 className="intro_para_main_head"><span >What is </span><br/><span className="intro_para_main_head_red"> Kaizen</span>?</h1>
                </div>
                <br/>
                <div className="btn">
                  <a href="#" className="btn_text" role="button" onClick={this.startCourse.bind(this)}>
                    BEGIN<FontAwesome name='arrow-right' className="arror-right"/>
                  </a>
                </div>
              </div>
            </div>
          </MediaQuery>


          <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
            <div className="content">
              <div className="bg">
                <div className="logo"> <img src="app/assets/images/template/blank.png"/></div>
                <div className="title welcome_text">
                  <h1 className="white"><span className="intro_para_one_bold">Welcome <br/>to this short course,</span></h1>
                  <h1 className="white"><span className="intro_para_main_head">What is <br/> <span className="intro_para_main_head_red"> Kaizen</span>?</span></h1>
                </div>
                <br/>
                <div className="btn">
                  <a href="#" className="btn_text" role="button" onClick={this.startCourse.bind(this)}>
                    BEGIN<FontAwesome name='long-arrow-right' className="arror-right"/>
                  </a>
                </div>
              </div>
            </div>
          </MediaQuery>


          <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
            <div className="content">
              <div className="bg">
                <div className="logo"> <img src="app/assets/images/template/blank.png"/></div>
                <div className="title welcome_text">
                  <h1 className=""><span className="intro_para_one_bold">Welcome <br/> to this short course,</span></h1>
                  <h1 className=""><span className="intro_para_main_head">What is <br/> <span className="intro_para_main_head_red"> Kaizen</span>?</span></h1>
                </div>
                <br/>
                <div className="btn">
                  <a href="#" className="btn_text" role="button" onClick={this.startCourse.bind(this)}>
                    BEGIN<FontAwesome name='long-arrow-right' className="arror-right"/>
                  </a>
                </div>
              </div>
            </div>
          </MediaQuery>
        </div>
      )
    }
  }
}
