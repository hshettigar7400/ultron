import React from 'react';
import MediaQuery from 'react-responsive';
import FontAwesome from 'react-fontawesome';

export default class StaticPage1 extends React.Component {
  constructor(props) {
    super(props);

       this.state = {
      isPopupOpen: false,
      currentPopup: 0
    }

  }
     getPopupContent() {
    var currentPopup = this.state.currentPopup;
    switch(parseInt(currentPopup)) {
      case 1:
        return (
          <div className="popup-container-text">
            <p>
                Dear Colleagues, <br/><br/>

                Our vision can only be translated into reality by hard-work, discipline and the daily results and behaviour of each and every one of us. It is critical that we act in accordance with the highest standards of personal and professional integrity and highest level of ethical conduct. <br/><br/>

                As an employee, you need to be aware of the code of conduct of your organization. 
                Codes are meant for a purpose. They help us during decision making. They help us understand why it is important to be fair and transparent in every work we do.
                We must conduct our duties according to the Code of Conduct and avoid even the appearance of improper behavior. <br/><br/>

                With best wishes <br/>
                CEO
            </p>
        </div>
        );
        break;

    }
  }

     displayPopup() {
    return (
      <div>
        {this.state.isPopupOpen && <div className="popup-container">
            <span><FontAwesome className="envolope-open" name='envelope-open' /></span>
          <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
          {this.getPopupContent()}
        </div>}
      </div>
    )
  }

  openPopup(currentPopup) {
    this.setState({isPopupOpen: true, currentPopup: currentPopup})
  }

  closePopup() {
    this.setState({isPopupOpen: false})
  }

  render() {
    return (
      <div className="static-page1">
        <MediaQuery query='(min-device-width: 1024px)'>
          <div className="content">
            <div className="bg">
              <div className="intro white">
                <div className="flex-container">
                    <div>
                        
                          <h1 className="white intro_head"><span className="intr_sub_span">Intr</span>oduction to the Code of Conduct</h1>
                        

                        <div className="intro_pop_up">
                            <div className="intro_pop_up_outer">
                                <div className="intro_pop_up_inner" onClick={this.openPopup.bind(this, 1)}>
                                    <a aria-disabled="false" aria-label="audio" aria-pressed="false" id="btn_01" 
                                        className="intro_pop_up_link" role="button" >
                                        <FontAwesome name='envelope' />
                                      </a>
                                </div>
                            </div>
                        </div>

                        <div className="intro_sub_heading">
                          <p>Select the envelope to read a message from our CEO.</p>
                        </div>
                    </div>
                     
                    <div>
                        {
                        this.displayPopup()
                        }
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
                   <div className="content">
            <div className="bg">
              <div className="intro white">
                <div className="flex-container">
                    <div>
                        <h1 className="white intro_head"><span className="intr_sub_span">Intr</span>oduction to the Code of Conduct</h1>

                        <div className="intro_pop_up">
                            <div className="intro_pop_up_outer">
                                <div className="intro_pop_up_inner" onClick={this.openPopup.bind(this, 1)} >
                                    <a aria-disabled="false" aria-label="audio" aria-pressed="false" id="btn_01" 
                                        className="intro_pop_up_link"  role="button" >
                                        <FontAwesome name='envelope' />
                                      </a>
                                </div>
                            </div>
                        </div>

                        <div className="intro_sub_heading">
                          <p>Select the envelope to read a message from our CEO.</p>
                        </div>
                    </div>
                     
                    <div>
                        {
                        this.displayPopup()
                        }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </MediaQuery>
        <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
          <div className="content">
            <div className="bg">
              <div className="intro white">
                <div className="flex-container">
                    <div>
                        <h1 className="white intro_head">Introduction to <br/><span className="intr_sub_span">the</span> Code of Conduct</h1>

                        <div className="intro_pop_up">
                            <div className="intro_pop_up_outer">
                                <div className="intro_pop_up_inner" onClick={this.openPopup.bind(this, 1)}>
                                    <a aria-disabled="false" aria-label="audio" aria-pressed="false" id="btn_01" 
                                        className="intro_pop_up_link" role="button" >
                                        <FontAwesome name='envelope' />
                                      </a>
                                </div>
                            </div>
                        </div>

                        <div className="intro_sub_heading">
                          <p>Select the envelope to read a <br/>message from our CEO.</p>
                        </div>
                    </div>
                     
                    <div>
                        {
                        this.displayPopup()
                        }
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
