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
                <div className="logo"> <img src="app/assets/images/template/Tesseract_logo.png"/></div>
                <div className="title welcome_text">
                  <h1 className="white"><span className="intro_para_one_bold">Welcome</span> <br/> <span className="intro_para_one_normal">to the course,</span></h1>
                  <h1 className="white"><span className="intro_para_main_head">Code of <br/> Conduct</span></h1>
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


          <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
            <div className="content">
              <div className="bg">
                <div className="logo"> <img src="app/assets/images/template/Tesseract_logo.png"/></div>
                <div className="title welcome_text">
                  <h1 className="white"><span className="intro_para_one_bold">Welcome</span> <br/> <span className="intro_para_one_normal">to the course,</span></h1>
                  <h1 className="white"><span className="intro_para_main_head">Code of <br/> Conduct</span></h1>
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
                <div className="logo"> <img src="app/assets/images/template/Tesseract_logo.png"/></div>
                <div className="title welcome_text">
                  <h1 className="white"><span className="intro_para_one_bold">Welcome</span> <br/> <span className="intro_para_one_normal">to the course,</span></h1>
                  <h1 className="white"><span className="intro_para_main_head">Code of <br/> Conduct</span></h1>
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
