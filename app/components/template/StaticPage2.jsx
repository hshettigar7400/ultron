import React from 'react';
import MediaQuery from 'react-responsive';

export default class StaticPage2 extends React.Component {
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
            <span className="instruction_img"></span>
          <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
          {this.getPopupContent()}
        </div>}
      </div>
    )
  }

  openPopup(currentPopup) {
      console.log("kljjhh");
    this.setState({isPopupOpen: true, currentPopup: currentPopup})
  }

  closePopup() {
    this.setState({isPopupOpen: false})
  }



  render() {
    return (
      <div className="static-page2">
        <MediaQuery query='(min-device-width: 1024px)'>
        <div className="content">
      		<div className="bg">
      			<div className="intro white">
      				<div className="flex-container">
                        <div>
                            <div className="intro_heading_2">
                              <h1><span className="intr_sub_span">Cou</span>rse Objective</h1>
                            </div>

                            <div className="intro_sub_heading_2">
                                <p>
                                    In this course, you will be able to:
                                </p>
                            </div>
                            
                            <div className="intro_sub_heading_list">
                                <ul>
                                    <li>
                                        State the importance of code of conduct
                                    </li>
                                    
                                    <li>
                                        Recognize the key aspects of the code of conduct
                                    </li>
                                    
                                    <li>
                                        Understand conflict of interest  given few scenarios
                                    </li>
                                </ul>
                            </div>

                            <div className="intro_pop_up">
                                
                            </div>

                            <div className="intro_grp_benefit">
                              <span className="intro_text_benefit">Click the button to know more.</span><span className="intro_btn_benefit"><a id="btn_01" onClick={this.openPopup.bind(this, 1)} role="button" >Benefits of this Course</a></span>
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

      				</div>
      			</div>

      		</div>
      	</div>
            </MediaQuery>
      </div>
    )
  }
}
