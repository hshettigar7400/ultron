import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import MediaQuery from 'react-responsive';
import Sound from 'react-sound';

export default class Interactivity5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
      currentPopup: 0,
      stopAudio: false,
      audioVolume :100,
      isAudioFinished: false
    }
  }

  getPopupContent() {
    var currentPopup = this.state.currentPopup;
    switch (parseInt(currentPopup)) {
      case 1:
        return (
            <div>
                <MediaQuery query='(min-device-width: 1024px)'>
                  <div className="flex-container-inner">
                        <div>
                            <img className="popup_image" src="app/assets/images/template/pop1_img.png" />
                        </div>
                        <div>
                            <p className="popup_text">Kaizen is about making small continuous improvements by the persons performing their job in their day-to-day work/activities.<br/>All systems are bound to deteriorate once established. Continuing effort is a must even to maintain status quo. </p>
                        </div>
                  </div>
                </MediaQuery>

                <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
                  <div className="flex-container-inner">
                        <div>
                            <img className="popup_image" src="app/assets/images/template/pop1_img.png" />
                        </div>
                        <div>
                            <p className="popup_text">Kaizen is about making small continuous improvements by the persons performing their job in their day-to-day work/activities.<br/>All systems are bound to deteriorate once established. Continuing effort is a must even to maintain status quo. </p>
                        </div>
                  </div>
                </MediaQuery>

                <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
                  <div className="flex-container-inner">
                        <div>
                            <img className="popup_image" src="app/assets/images/template/pop1_img_mob.png" />
                        </div>
                        <div>
                            <p className="popup_text">Kaizen is about making small continuous improvements by the persons performing their job in their day-to-day work/activities.<br/>All systems are bound to deteriorate once established. Continuing effort is a must even to maintain status quo. </p>
                        </div>
                  </div>
                </MediaQuery>
            </div>
        );
        break;
      case 2:
        return (
            <div>
                <MediaQuery query='(min-device-width: 1024px)'>
                      <div className="flex-container-inner">
                           <div>
                                <img className="popup_image2_left" src="app/assets/images/template/pop2_img.png" />
                               <img className="popup_image2_rt" src="app/assets/images/template/pop2_img2.png" />
                           </div>
                      </div>
                </MediaQuery>
                <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
                      <div className="flex-container-inner">
                           <div>
                                <img className="popup_image2_left" src="app/assets/images/template/pop2_img.png" />
                               <img className="popup_image2_rt" src="app/assets/images/template/pop2_img2.png" />
                           </div>
                      </div>
                </MediaQuery>
                <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
                      <div className="flex-container-inner popup_image_two">
                           <div>
                                <img className="popup_image" src="app/assets/images/template/pop21_img_mob.png" />
                           </div>
                          <div>
                                 <img className="popup_image" src="app/assets/images/template/pop22_img_mob.png" />
                          </div>
                      </div>
                </MediaQuery>
            </div>
        );
        break;
        case 3:
        return (
            <div>
                <MediaQuery query='(min-device-width: 1024px)'>
                      <div className="flex-container-inner">
                            <img className="" src="app/assets/images/template/pop3_img.png" />
                            <div className="popup3_text">
                                <p>The challenge is to:</p>
                                <ul className="popup3_ul">
                                    <li>Channelize the creativity of the human brain in the direction the organization desires</li>
                                    <li>Create a sense of pride in the employees</li>
                                    <li>Document the numerous small and large improvement efforts</li>
                                </ul>
                            </div>
                      </div>
                </MediaQuery>
                <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
                      <div className="flex-container-inner">
                            <img className="popup_image" src="app/assets/images/template/pop3_img.png" />
                            <div className="popup3_text">
                                <p>The challenge is to:</p>
                                <ul className="popup3_ul">
                                    <li>Channelize the creativity of the human brain in the direction the organization desires</li>
                                    <li>Create a sense of pride in the employees</li>
                                    <li>Document the numerous small and large improvement efforts</li>
                                </ul>
                            </div>
                      </div>
                </MediaQuery>
                <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
                      <div className="flex-container-inner">
                            <img className="popup_image" src="app/assets/images/template/pop3_img_sm.png" />
                            <div className="popup3_text">
                                <p>The challenge is to:</p>
                                <ul className="popup3_ul">
                                    <li>Channelize the creativity of the human brain in the direction the organization desires</li>
                                    <li>Create a sense of pride in the employees</li>
                                    <li>Document the numerous small and large improvement efforts</li>
                                </ul>
                            </div>
                      </div>
                </MediaQuery>
            </div>
        );
        break;
    }
  }

  displayPopup() {
    return (
      <div>
                {!this.state.isAudioFinished && this.loadAudio()}
        {this.state.isPopupOpen && <div className="popup-container">
          <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
          {this.getPopupContent()}
        </div>}
      </div>
    )
  }

  handlePlaying() {
    var volumeNode = document.querySelectorAll(".fa-volume-up");
    var playNode = document.querySelectorAll(".fa-pause");
    if (volumeNode.length > 0 ) {
      this.setState({audioVolume: 100})
    }
    else {
      this.setState({audioVolume: 0})
    }
    if (playNode.length > 0 ) {
      this.setState({stopAudio:false})
    }
    else {
      this.setState({stopAudio: true})
    }
  }

  handleFinishedPlaying() {
    this.setState({isAudioFinished: true})
  }

  loadAudio() {
    if (this.state.currentPopup > 0) {
      let audioPath = `app/assets/audio/slide3_${this.state.currentPopup}.mp3`;
      return (
        <Sound
         url={audioPath}
         playStatus={!this.state.stopAudio? "PLAYING" :"PAUSED"}
         playFromPosition={0}
         onLoading={this.handleSongLoading}
         onPlaying={this.handlePlaying.bind(this)}
         onFinishedPlaying={this.handleFinishedPlaying.bind(this)}
         volume={this.state.audioVolume}
       />
      )
    }
  }

  openPopup(currentPopup) {
    this.setState({isPopupOpen: true, currentPopup: currentPopup, stopAudio: false})
    document.querySelector(".fa-pause").classList.add("disabled")
    document.querySelector(".fa-refresh").classList.add("disabled")
    var activeNode = document.querySelectorAll(".active");
    if (activeNode.length > 0)
    activeNode[0].classList.remove('active');
    var currentNode = document.getElementById("btn_0"+currentPopup)
    currentNode.classList.add('active');
          window.soundManager.stopAll();
  }

  closePopup() {
    document.querySelector(".fa-pause").classList.remove("disabled")
    document.querySelector(".fa-refresh").classList.remove("disabled")
    this.setState({isPopupOpen: false, stopAudio: true})
  }

  render() {
    return (
      <div className="interactivity5">
        <MediaQuery query='(min-device-width: 1224px)'>
          <div className="content">
            <div className="bg">
              <div className="intro">
                <div className="flex-main-content">
                    <h1 className="intro_head">Defining Kaizen</h1>
                     <p className="text_para_first">Let's look at Kaizen in more detail.</p>
                    <p className="text_para_second">Select each button to know more.</p>
                      <div>
                        <div>
                            <div className="buttons">
                                <div className="button_flex">
                                    <div className="intro_btn_benefit_grey btn_gap"  id="btn_00" >
                                        <span></span>
                                    </div>
                                    <div className="intro_btn_benefit"  id="btn_01" onClick={this.openPopup.bind(this, 1)}>
                                        <span>1</span>
                                    </div>
                                </div>
                                <div className="button_flex button_2">
                                    <div className="intro_btn_benefit btn_gap"  id="btn_02" onClick={this.openPopup.bind(this, 2)} >
                                        <span>2</span>
                                    </div>
                                    <div className="intro_btn_benefit_grey"  id="btn_00" >
                                        <span></span>
                                    </div>
                                </div>
                                <div className="button_flex button_3">
                                    <div className="intro_btn_benefit_grey btn_gap"  id="btn_00" >
                                        <span></span>
                                    </div>
                                    <div className="intro_btn_benefit"  id="btn_03" onClick={this.openPopup.bind(this, 3)}>
                                        <span>3</span>
                                    </div>
                                </div>
                              </div>
                          </div>

                          <div>
                            {this.displayPopup()}
                          </div>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
          <div className="content">
            <div className="bg">
              <div className="intro">
                <div className="flex-main-content">
                    <h1 className="intro_head">Defining Kaizen</h1>
                     <p className="text_para_first">Let's look at Kaizen in more detail.</p>
                    <p className="text_para_second">Select each button to know more.</p>
                      <div>
                        <div>
                            <div className="buttons">
                                <div className="button_flex">
                                    <div className="intro_btn_benefit_grey btn_gap"  id="btn_00" >
                                        <span></span>
                                    </div>
                                    <div className="intro_btn_benefit"  id="btn_01" onClick={this.openPopup.bind(this, 1)}>
                                        <span>1</span>
                                    </div>
                                </div>
                                <div className="button_flex button_2">
                                    <div className="intro_btn_benefit btn_gap"  id="btn_02" onClick={this.openPopup.bind(this, 2)} >
                                        <span>2</span>
                                    </div>
                                    <div className="intro_btn_benefit_grey"  id="btn_00" >
                                        <span></span>
                                    </div>
                                </div>
                                <div className="button_flex button_3">
                                    <div className="intro_btn_benefit_grey btn_gap"  id="btn_00" >
                                        <span></span>
                                    </div>
                                    <div className="intro_btn_benefit"  id="btn_03" onClick={this.openPopup.bind(this, 3)}>
                                        <span>3</span>
                                    </div>
                                </div>
                              </div>
                          </div>

                          <div>
                            {this.displayPopup()}
                          </div>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
          <div className="content">
            <div className="bg">
              <div className="intro">
                <div className="flex-main-content">
                    <h1 className="intro_head">Defining Kaizen</h1>
                     <p className="text_para_first">Let's look at Kaizen in more detail.</p>
                    <p className="text_para_second">Select each button to know more.</p>
                      <div>

                            <div className="buttons">
                                <div className="button_flex">
                                    <div className="intro_btn_benefit_grey btn_gap"  id="btn_00" >
                                        <span></span>
                                    </div>
                                    <div className="intro_btn_benefit"  id="btn_01" onClick={this.openPopup.bind(this, 1)}>
                                        <span>1</span>
                                    </div>
                                </div>
                                <div className="button_flex button_2">
                                    <div className="intro_btn_benefit btn_gap"  id="btn_02" onClick={this.openPopup.bind(this, 2)} >
                                        <span>2</span>
                                    </div>
                                    <div className="intro_btn_benefit_grey"  id="btn_00" >
                                        <span></span>
                                    </div>
                                </div>
                                <div className="button_flex button_3">
                                    <div className="intro_btn_benefit_grey btn_gap"  id="btn_00" >
                                        <span></span>
                                    </div>
                                    <div className="intro_btn_benefit"  id="btn_03" onClick={this.openPopup.bind(this, 3)}>
                                        <span>3</span>
                                    </div>
                                </div>
                              </div>


                          <div>
                            {this.displayPopup()}
                          </div>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
}
