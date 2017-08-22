import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import MediaQuery from 'react-responsive';

const ansArr = [true, true, true];
const feedbackText =  [{
 	"correct": {
 		"text": "That's correct",
 		"Desc": "There is a potential conflict of interest as the director holds multiple positions that are financial in nature."
 	},
 	"incorrect": {
 		"text": "That's Incorrect",
 		"Desc": "There is a potential conflict of interest as the director holds multiple positions that are financial in nature."
 	}

 }, {
 	"correct": {
 		"text": "That's correct",
 		"Desc": "There is a potential conflict of interest between the director and the stockbroking company."
 	},
 	"incorrect": {
 		"text": "That's Incorrect",
 		"Desc": "There is a potential conflict of interest between the director and the stockbroking company."
 	}

 }, {
 	"correct": {
 		"text": "That's correct",
 		"Desc": "There is no potential conflict of interest as the news has been announced well in advance in press, and no potential parties are at an undue advantage in this situation."
 	},
 	"incorrect": {
 		"text": "That's Incorrect",
 		"Desc": "There is no potential conflict of interest as the news has been announced well in advance in press, and no potential parties are at an undue advantage in this situation."
 	}

 }];
export default class Interactivity7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
      currentPopup: 0,
    showFeedback: false,
        feedbackObject:{}
        
    }
  }
    
submitAnswer() {
     var currentPopup = this.state.currentPopup;
    this.setState({showFeedback:true})
    if (this.refs.first.checked === ansArr[currentPopup - 1]) {
        this.setState({feedbackObject:feedbackText[currentPopup - 1].correct});
        
    }
    else {
        this.setState({feedbackObject:feedbackText[currentPopup - 1].incorrect});
    }
}  


displayFeedback() {
    return(
        <div className="radio-feedback-value">
            <p className="">
                <span className="feedback-bold feedbackTitle">{this.state.feedbackObject.text}</span><br/>
                <span className="feedback-normal feedbackDesc">{this.state.feedbackObject.Desc}</span>
            </p>
        </div>
    )
}

  getPopupContent() {
    var currentPopup = this.state.currentPopup;
    switch (parseInt(currentPopup)) {
      case 1:
        return (
            <div>
                <MediaQuery query='(min-device-width: 1024px)'>
                  <div className="flex-container-inner">
                        <h1 className="popup_main_head">Potential conflicts of interest</h1>
                        <div className="scenario_main_container">
                            <div className="scenario_img_blk">
                                <img src='../../app/assets/images/template/scene1.png' />
                                <p>Scenario 1</p>
                            </div>
                            <div className="scenario_txt_blk">
                                <div className="popup_rt_container">
                                    <p className="popup_main_txt">
                                        The director of a private company that sponsors soccer players is on the board of selection of soccer players<br/>Are there any potential conflicts in this situation?
                                    </p>
                                    <p className="popup_radio_txt">
                                        Select the correct option and Submit.
                                    </p>     
                                    <div>
                                        <input className="radio-input" type="radio" ref='first'  value='yes' />
                                        <label className="radio-label">Yes</label>
                                        <input className="radio-input" type="radio" ref='second'  value='no'  />
                                        <label className="radio-label">No</label>
                                    </div>
                                    <div className="submit_btn" onClick={this.submitAnswer.bind(this)}>
                                        <span>Submit</span>
                                    </div>
                                    {this.state.showFeedback && this.displayFeedback()}
                                </div>
                                
                            </div>
                        </div>
                  </div>
                </MediaQuery>
            
                <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
                    <div className="flex-container-inner">
                        <h1 className="popup_main_head">Potential conflicts of interest</h1>
                        <div className="scenario_main_container">
                            <div className="scenario_img_blk">
                                <img src='../../app/assets/images/template/scene1.png' />
                                <p>Scenario 1</p>
                            </div>
                            <div className="scenario_txt_blk">
                                <div className="popup_rt_container">
                                    <p className="popup_main_txt">
                                        The director of a private company that sponsors soccer players is on the board of selection of soccer players<br/>Are there any potential conflicts in this situation?
                                    </p>
                                    <p className="popup_radio_txt">
                                        Select the correct option and Submit.
                                    </p>      
                                    <div>
                                        <input className="radio-input" type="radio" ref='first'  value='yes' />
                                        <label className="radio-label">Yes</label>
                                        <input className="radio-input" type="radio" ref='second'  value='no'  />
                                        <label className="radio-label">No</label>
                                    </div>
                                    <div className="submit_btn" onClick={this.submitAnswer.bind(this)}>
                                        <span>Submit</span>
                                    </div>
                                    {this.state.showFeedback && this.displayFeedback()}
                                </div>
                            </div>
                        </div>
                  </div>
                </MediaQuery>
                
                <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
                    <div className="flex-container-inner">
                        <h1 className="popup_main_head">Potential conflicts of interest</h1>
                        <div className="scenario_main_container">
                            <div className="scenario_img_blk">
                                <img src='../../app/assets/images/template/scene1_sm.png' />
                                <p>Scenario 1</p>
                            </div>
                            
                            <div className="scenario_txt_blk">
                                <p className="">
                                    The director of a private company that sponsors soccer players is on the board of selection of soccer players
                                </p>
                            </div>
                        </div>
                        <div className="popup_radio_grp">
                            <p>Are there any potential conflicts in this situation?</p>
                            <p className="popup_radio_txt">
                                Select the correct option and Submit.
                            </p>      
                            <div>
                                <input className="radio-input" type="radio" ref='first'  value='yes' />
                                <label className="radio-label">Yes</label>
                                <input className="radio-input" type="radio" ref='second' value='no'  />
                                <label className="radio-label">No</label>
                            </div>
                        </div>
                        <div className="submit_btn" onClick={this.submitAnswer.bind(this)}>
                            <span>Submit</span>
                        </div>
                        {this.state.showFeedback && this.displayFeedback()}
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
                        <h1 className="popup_main_head">Potential conflicts of interest</h1>
                        <div className="scenario_main_container">
                            <div className="scenario_img_blk">
                                <img src='../../app/assets/images/template/scene2.png' />
                                <p>Scenario 2</p>
                            </div>
                            <div className="scenario_txt_blk">
                                <div className="popup_rt_container">
                                    <p className="popup_main_txt">
                                        The marketing director of a soft drink company informs the stockbrokers about upcoming public listing of the company shares<br/>Are there any potential conflicts in this situation?
                                    </p>
                                    <p className="popup_radio_txt">
                                        Select the correct option and Submit.
                                    </p>
                                    <div>
                                        <input className="radio-input" type="radio" ref='first'  value='yes' />
                                        <label className="radio-label">Yes</label>
                                        <input className="radio-input" type="radio" ref='second'  value='no'  />
                                        <label className="radio-label">No</label>
                                    </div>
                                    <div className="submit_btn" onClick={this.submitAnswer.bind(this)}>
                                        <span>Submit</span>
                                    </div>
                                    {this.state.showFeedback && this.displayFeedback()}
                                </div>
                                
                            </div>
                        </div>
                  </div>
                </MediaQuery>
                
                <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
                    <div className="flex-container-inner">
                        <h1 className="popup_main_head">Potential conflicts of interest</h1>
                        <div className="scenario_main_container">
                            <div className="scenario_img_blk">
                                <img src='../../app/assets/images/template/scene2.png' />
                                <p>Scenario 1</p>
                            </div>
                            <div className="scenario_txt_blk">
                                <div className="popup_rt_container">
                                    <p className="popup_main_txt">
                                        The marketing director of a soft drink company informs the stockbrokers about upcoming public listing of the company shares<br/>Are there any potential conflicts in this situation?
                                    </p>
                                    <p className="popup_radio_txt">
                                        Select the correct option and Submit.
                                    </p>      
                                    <div>
                                        <input className="radio-input" type="radio" ref='first'  value='yes' />
                                        <label className="radio-label">Yes</label>
                                        <input className="radio-input" type="radio" ref='second'  value='no'  />
                                        <label className="radio-label">No</label>
                                    </div>
                                    <div className="submit_btn" onClick={this.submitAnswer.bind(this)}>
                                        <span>Submit</span>
                                    </div>
                                    {this.state.showFeedback && this.displayFeedback()}
                                </div>
                            </div>
                        </div>
                  </div>
                </MediaQuery>
                
                <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
                    <div className="flex-container-inner">
                        <h1 className="popup_main_head">Potential conflicts of interest</h1>
                        <div className="scenario_main_container">
                            <div className="scenario_img_blk">
                                <img src='../../app/assets/images/template/scene2_sm.png' />
                                <p>Scenario 2</p>
                            </div>
                            
                            <div className="scenario_txt_blk">
                                <p className="">
                                    The marketing director of a soft drink company informs the stockbrokers about upcoming public listing of the company shares
                                </p>
                            </div>
                        </div>
                        <div className="popup_radio_grp">
                            <p>Are there any potential conflicts in this situation?</p>
                            <p className="popup_radio_txt">
                                Select the correct option and Submit.
                            </p>
                            <div>
                                <input className="radio-input" type="radio" ref='first'  value='yes' />
                                <label className="radio-label">Yes</label>
                                <input className="radio-input" type="radio" ref='second'  value='no'  />
                                <label className="radio-label">No</label>
                            </div>
                        </div>
                        <div className="submit_btn" onClick={this.submitAnswer.bind(this)}>
                            <span>Submit</span>
                        </div>
                        {this.state.showFeedback && this.displayFeedback()}
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
                        <h1 className="popup_main_head">Potential conflicts of interest</h1>
                        <div className="scenario_main_container">
                            <div className="scenario_img_blk">
                                <img src='../../app/assets/images/template/scene3.png' />
                                <p>Scenario 3</p>
                            </div>
                            <div className="scenario_txt_blk">
                                <div className="popup_rt_container">
                                    <p className="popup_main_txt">
                                        The news and details of an upcoming merger of two large companies has been announced in the press. <br/>Are there any potential conflicts in this situation?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </p>
                                    <p className="popup_radio_txt">
                                        Select the correct option and Submit.
                                    </p>
                                    <div>
                                        <input className="radio-input" type="radio" ref='first'  value='yes' />
                                        <label className="radio-label">Yes</label>
                                        <input className="radio-input" type="radio" ref='second'  value='no'  />
                                        <label className="radio-label">No</label>
                                    </div>
                                    <div className="submit_btn" onClick={this.submitAnswer.bind(this)}>
                                        <span>Submit</span>
                                    </div>
                                    {this.state.showFeedback && this.displayFeedback()}
                                </div>
                                
                            </div>
                        </div>
                  </div>
                </MediaQuery>
                
                <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
                    <div className="flex-container-inner">
                        <h1 className="popup_main_head">Potential conflicts of interest</h1>
                        <div className="scenario_main_container">
                            <div className="scenario_img_blk">
                                <img src='../../app/assets/images/template/scene3.png' />
                                <p>Scenario 3</p>
                            </div>
                            <div className="scenario_txt_blk">
                                <div className="popup_rt_container">
                                    <p className="popup_main_txt">
                                        The news and details of an upcoming merger of two large companies has been announced in the press. <br/>Are there any potential conflicts in this situation?
                                    </p>
                                    <p className="popup_radio_txt">
                                        Select the correct option and Submit.
                                    </p>
                                    <div>
                                        <input className="radio-input" type="radio" ref='first'  value='yes' />
                                        <label className="radio-label">Yes</label>
                                        <input className="radio-input" type="radio" ref='second'  value='no'  />
                                        <label className="radio-label">No</label>
                                    </div>
                                    <div className="submit_btn" onClick={this.submitAnswer.bind(this)}>
                                        <span>Submit</span>
                                    </div>
                                    {this.state.showFeedback && this.displayFeedback()}
                                </div>
                            </div>
                        </div>
                  </div>
                </MediaQuery>
                
                <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
                    <div className="flex-container-inner">
                        <h1 className="popup_main_head">Potential conflicts of interest</h1>
                        <div className="scenario_main_container">
                            <div className="scenario_img_blk">
                                <img src='../../app/assets/images/template/scene3_sm.png' />
                                <p>Scenario 3</p>
                            </div>
                            
                            <div className="scenario_txt_blk">
                                <p className="">
                                    The news and details of an upcoming merger of two large companies has been announced in the press. <br/>Are there any potential conflicts in this situation?
                                </p>
                            </div>
                        </div>
                        <div className="popup_radio_grp">
                            <p>Are there any potential conflicts in this situation?</p>
                            <p className="popup_radio_txt">
                                Select the correct option and Submit.
                            </p>
                            <div>
                                <input className="radio-input" type="radio" ref='first'  value='yes' />
                                <label className="radio-label">Yes</label>
                                <input className="radio-input" type="radio" ref='second'  value='no'  />
                                <label className="radio-label">No</label>
                            </div>
                        </div>
                        
                        <div className="submit_btn" onClick={this.submitAnswer.bind(this)}>
                            <span>Submit</span>
                        </div>
                        {this.state.showFeedback && this.displayFeedback()}
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
        {this.state.isPopupOpen && <div className="popup-container">
            <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
          {this.getPopupContent()}
        </div>}
      </div>
    )
  }

  openPopup(currentPopup, ev) {
    this.setState({isPopupOpen: true, currentPopup: currentPopup})
  }
    
    closePopup() {
    this.setState({isPopupOpen: false, hidePageText: false, showFeedback: false})
  }


  render() {
    return (
      <div className="interactivity7">
        <MediaQuery query='(min-device-width: 1224px)'>
          <div className="content">
            <div className="bg">
              <div className="intro white">
                <div className="flex-main-content">
                    <h1 className="intro_head"><span className="intr_sub_span">Con</span>flicts of interest-Scenarios</h1>
                     <p className="intro_sub_heading">
                        Lets look at three scenarios that involve potential conflicts of interest.
                      </p>
                        
                      <p className="intro_sub_heading_2">
                            Select each image to view the scenarios.
                      </p>
                      <div className="buttons">
                            <div className="intro_btn_benefit  tab_btn_rt" id="btn_01" onClick={this.openPopup.bind(this, 1)}>
                                <img src={"../../app/assets/images/template/scene1.png"} />
                                <p>Scenario 1</p>
                            </div>

                            <div className="intro_btn_benefit  tab_btn_rt" id="btn_02" onClick={this.openPopup.bind(this, 2)}>
                                <img src='../../app/assets/images/template/scene2.png' />
                                <p>Scenario 2</p>
                            </div>
                          
                            <div className="intro_btn_benefit  tab_btn_rt" id="btn_03" onClick={this.openPopup.bind(this, 3)}>
                                <img src='../../app/assets/images/template/scene3.png' />
                                <p>Scenario 3</p>
                            </div>
                      </div>    
                         
                      <div>
                         {this.displayPopup()}
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
                <div className="flex-main-content">
                    <h1 className="intro_head"><span className="intr_sub_span">Con</span>flicts of interest-Scenarios</h1>
                     <p className="intro_sub_heading">
                        Lets look at three scenarios that involve potential conflicts of interest.
                      </p>
                        
                      <p className="intro_sub_heading_2">
                            Select each image to view the scenarios.
                      </p>
                      <div className="buttons">
                            <div className="intro_btn_benefit  tab_btn_rt" id="btn_01" onClick={this.openPopup.bind(this, 1)}>
                                <img src={"../../app/assets/images/template/scene1.png"} />
                                <p>Scenario 1</p>
                            </div>

                            <div className="intro_btn_benefit  tab_btn_rt" id="btn_02" onClick={this.openPopup.bind(this, 2)}>
                                <img src='../../app/assets/images/template/scene2.png' />
                                <p>Scenario 2</p>
                            </div>
                          
                            <div className="intro_btn_benefit  tab_btn_rt" id="btn_03" onClick={this.openPopup.bind(this, 3)}>
                                <img src='../../app/assets/images/template/scene3.png' />
                                <p>Scenario 3</p>
                            </div>
                      </div>    
                         
                      <div>
                         {this.displayPopup()}
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
                <div className="flex-main-content">
                    <h1 className="intro_head">Conflicts of <br/><span className="intr_sub_span">inte</span>rest-Scenarios</h1>
                     <p className="intro_sub_heading">
                        Lets look at three scenarios that involve <br/>potential conflicts of interest.
                      </p>
                        
                      <p className="intro_sub_heading_2">
                            Select each image to view the scenarios.
                      </p>
                      <div className="buttons">
                            <div className="intro_btn_benefit  tab_btn_rt" id="btn_01" onClick={this.openPopup.bind(this, 1)}>
                                <img src={"../../app/assets/images/template/scene1_sm.png"} />
                                <p>Scenario 1</p>
                            </div>

                            <div className="intro_btn_benefit" id="btn_02" onClick={this.openPopup.bind(this, 2)}>
                                <img src='../../app/assets/images/template/scene2_sm.png' />
                                <p>Scenario 2</p>
                            </div>
                      </div> 
                      <br/>
                    <div className="intro_btn_benefit_2 buttons_2" id="btn_03" onClick={this.openPopup.bind(this, 3)}>
                        <img src='../../app/assets/images/template/scene3_sm.png' />
                        <p>Scenario 3</p>
                    </div>
                      
                         
                      <div>
                         {this.displayPopup()}
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
