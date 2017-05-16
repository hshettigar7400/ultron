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
          <div><h1>Benefits of this Course</h1>
            <ul>
                <li>Documentation Requests</li>
                <li>On-Site Interviews</li>  
                    <li>Exit Interviews</li>  
                        <li>Post-Examination Follow Up</li>  
  
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
      <div className="static-page2">
        <MediaQuery query='(min-device-width: 1224px)'>
        <div className="content">
      		<div className="bg">
      			<div className="intro white">
      				<div className="flex-container">
                        
                          <div className="left-side">
                  {
                    this.displayPopup()
                  }
                </div>
                        
      					<div className="right-side">
      						<div className="intro_heading">
      							<h1>Course Objectives </h1>
      						</div>

      						<div className="intro_para">
      							<span>In this course, you will learn about:</span>
      						</div>

      						<div className="intro_list">
      							<ul>
      								<li>Structure of the US Securities and Exchange Commission (SEC)</li>
      								<li>Operations of SEC</li>
      								<li>Initiatives of National Examination program for SEC registered investment Advisers</li>
      							</ul>
      						</div>
      						<div className="btn">
      							<span className="instruction_img">
                      <img src="/app/assets/images/template/hand_icon.png" className ="middle_align"/>
                      <span className="instruction_text">Click the button to know more.</span>
                    </span>
                    <span>
                      <button id="btn_01" onClick={this.openPopup.bind(this, 1)}>Benefits of this Course</button>
                    </span>
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
                        
                          <div className="left-side">
                  {
                    this.displayPopup()
                  }
                </div>
                        
      					<div className="right-side">
      						<div className="intro_heading">
      							<h1>Course Objectives </h1>
      						</div>

      						<div className="intro_para">
      							<span>In this course, you will learn about:</span>
      						</div>

      						<div className="intro_list">
      							<ul>
      								<li>Structure of the US Securities and Exchange Commission (SEC)</li>
      								<li>Operations of SEC</li>
      								<li>Initiatives of National Examination program for SEC registered investment Advisers</li>
      							</ul>
      						</div>
      						<div className="btn">
      							<span className="instruction_img">
                      <img src="/app/assets/images/template/hand_icon.png" className ="middle_align"/>
                      <span className="instruction_text">Click the button to know more.</span>
                    </span>
                    <span>
                      <button id="btn_01" onClick={this.openPopup.bind(this, 1)}>Benefits of this Course</button>
                    </span>
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
                        
                          <div className="left-side">
                  {
                    this.displayPopup()
                  }
                </div>
                        
      					<div className="right-side">
      						<div className="intro_heading">
      							<h1>Course Objectives </h1>
      						</div>

      						<div className="intro_para">
      							<span>In this course, you will learn about:</span>
      						</div>

      						<div className="intro_list">
      							<ul>
      								<li>Structure of the US Securities and Exchange Commission (SEC)</li>
      								<li>Operations of SEC</li>
      								<li>Initiatives of National Examination program for SEC registered investment Advisers</li>
      							</ul>
      						</div>
      						<div className="btn">
      							<span className="instruction_img">
                      <img src="/app/assets/images/template/hand_icon.png" className ="middle_align"/>
                      <span className="instruction_text">Click the button to know more.</span>
                    </span>
                    <span>
                      <button id="btn_01" onClick={this.openPopup.bind(this, 1)}>Benefits of this Course</button>
                    </span>
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
