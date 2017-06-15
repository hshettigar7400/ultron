import React from 'react';
import Shell from '../Shell';
import MediaQuery from 'react-responsive';

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
          <MediaQuery query='(min-device-width: 1224px)'>

    <div className = "content">
        <div className="background">
			<div className="empty"></div>
            <div className="container">
            <div className="welcome_text">

            <h1>Chào mừng bạn tham gia khóa học:</h1>
                <h1> Kiểm soát chi phí nhân công  </h1>
                </div>

                <div className="btn_container">
            <div className="instruction_text">Chọn nút "khởi động" để bắt đầu khóa học.</div>
                <div className="button_div"><a href="#" className="button" onClick={this.startCourse.bind(this)}>Khởi động</a></div>

            </div>
            </div>


        </div>
    </div>


        </MediaQuery>
        <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>

       <div className = "content">
        <div className="background">
			<div className="empty"></div>
            <div className="container">
            <div className="welcome_text">

            <h1>Chào mừng bạn tham gia khóa học:</h1>
                <h1> Kiểm soát chi phí nhân công  </h1>
                </div>

                <div className="btn_container">
            <div className="instruction_text">Chọn nút "khởi động" để bắt đầu khóa học.</div>
                <div className="button_div"><a href="#" className="button" onClick={this.startCourse.bind(this)}>Khởi động</a></div>

            </div>
            </div>


        </div>
    </div>

            </MediaQuery>




          <MediaQuery query='(min-device-width: 320px) and (max-device-width: 480px) and (orientation: landscape)'>
            <div className="content">
             <h1 className="white"> This course is best view in portrait Mode. Please reorient your mobile to portrait mode. </h1>
            </div>
          </MediaQuery>

   <MediaQuery query='(min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) '>
      <div className = "content">
        <div className="background">
			<div className="empty"></div>
            <div className="container">
            <div className="welcome_text">

            <h1>Chào mừng bạn tham gia khóa học:</h1>
                <h1> Kiểm soát chi phí nhân công  </h1>
                </div>

                <div className="btn_container">
            <div className="instruction_text">Chọn nút "khởi động" để bắt đầu khóa học.</div>
                <div className="button_div"><a href="#" className="button" onClick={this.startCourse.bind(this)}>Khởi động</a></div>

            </div>
            </div>


        </div>
    </div>


          </MediaQuery>


        </div>
      )
    }
  }
}
