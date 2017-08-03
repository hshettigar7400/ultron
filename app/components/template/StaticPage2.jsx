import React from 'react';
import MediaQuery from 'react-responsive';

export default class StaticPage2 extends React.Component {
  constructor(props) {
    super(props);

       this.state = {
      isPopupOpen: false,
      currentPopup: 0,
           hidePageText: false
    }

  }
     getPopupContent() {
    var currentPopup = this.state.currentPopup;
    switch(parseInt(currentPopup)) {
      case 1:
        return (
          <div className="flex-container-inner">
            <p className="popup-container-heading">
                Benefits of this Course    
            </p>
            <ul className="popup-container-text">
                <li>
                    You will understand what needs to be done when faced with dilemma situations
                </li>
                
                <li>
                    Apply the code during critical meetings with customers, media and other stakeholders
                </li>
            </ul>
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
    this.setState({isPopupOpen: true, currentPopup: currentPopup, hidePageText: true})
  }

  closePopup() {
    this.setState({isPopupOpen: false, hidePageText: false})
  }
    
    pageText() {
        return (
            <div className="static-page2" >
            <MediaQuery query='(min-device-width: 1024px)'>
                <div className="flex-main-content">
                      <h1><span className="intr_sub_span">Cou</span>rse Objectives</h1>
                    
                        <p className="intro_sub_heading_2">
                            In this course, you will be able to:
                        </p>
                
                        <ul className="intro_sub_heading_list">
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
            
                    <div className="intro_grp_benefit">
                        <span className="intro_text_benefit">Click the button to know more.</span><span onClick={this.openPopup.bind(this, 1)} className="intro_btn_benefit">Benefits of this Course</span>
                    </div>
                </div>
            </MediaQuery>
            
            <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
                <div className="flex-main-content">
                      <h1><span className="intr_sub_span">Cou</span>rse Objectives</h1>
                    
                        <p className="intro_sub_heading_2">
                            In this course, you will be able to:
                        </p>
                
                        <ul className="intro_sub_heading_list">
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
            
                    <div className="intro_grp_benefit">
                        <span className="intro_text_benefit">Click the button to know more.</span><span onClick={this.openPopup.bind(this, 1)} className="intro_btn_benefit">Benefits of this Course</span>
                    </div>
                </div>
            </MediaQuery>
            
            <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
                <div className="flex-main-content">
                      <h1><span className="intr_sub_span">Cou</span>rse Objectives</h1>
                    
                        <p className="intro_sub_heading_2">
                            In this course, you will be able to:
                        </p>
                
                        <ul className="intro_sub_heading_list">
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
            
                    
                    
                    <div className="intro_text_benefit">
                            Click the button to know more.
                    </div>
                    
                    <div className="intro_btn_benefit" onClick={this.openPopup.bind(this, 1)}>
                        Benefits of this Course
                    </div>
                </div>
                </MediaQuery>
            </div>
            )
        }



  render() {
    return (
      <div className="static-page2" >
        <MediaQuery query='(min-device-width: 1024px)'>
        <div className="content">
      		<div className="bg">
      			<div className="intro white">
      				<div className="flex-container">
                        <div className="flex-container-inner">
                            <div>
                                {!this.state.hidePageText && this.pageText()}
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
      	</div>
            </MediaQuery>
        <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
            <div className="content">
      		<div className="bg">
      			<div className="intro white">
      				<div className="flex-container">
                        <div className="flex-container-inner">
                            <div>
                                {!this.state.hidePageText && this.pageText()}
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
      	</div>
            </MediaQuery>
        <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
            <div className="content">
      		<div className="bg">
      			<div className="intro white">
      				<div className="flex-container">
                        <div>
                            {!this.state.hidePageText && this.pageText()}
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
