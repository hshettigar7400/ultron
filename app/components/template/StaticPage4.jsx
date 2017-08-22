import React from 'react';
import MediaQuery from 'react-responsive';
import Checkbox from './common/Checkbox';
export default class StaticPage4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPopup: 0,
      showFeedback: false,
      showPopup: false,
      attempts: 0,
      correctAnswer: false,
      reset: 0
    }
  }

  submitAnswer() {
    this.setState({
      showFeedback: true,
    })
    if (this.refs.checkbox1.state.checked && this.refs.checkbox2.state.checked && this.refs.checkbox3.state.checked && this.refs.checkbox4.state.checked && this.refs.checkbox5.state.checked && !this.refs.checkbox6.state.checked) {
      this.setState({correctAnswer: true})
    } else {
      this.setState({correctAnswer: false})
    }
  }

  closePopup() {
    this.setState({showFeedback: false, showPopup: false, currentPopup: 0})
  }

  tryAgain() {
    this.setState({showFeedback: false, reset: 1})
  }

  continue() {
    this.setState({attempts: 2})
  }

  displayFeedback() {
    const {attempts, correctAnswer, showFeedback} = this.state;

    return (
      <div>
        {showFeedback && <div className="feedback-container">
          <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
            <div>
                <p>
                    Well, all of the given are the result of a proper code of conduct.<br/>Code of conduct is important to:
                </p>
                <ul>
                    <li>Create healthy environment</li>
                    <li>Maintain safe working practices</li>
                    <li>Aware of one’s responsibilities and duties</li>
                    <li>Achieve your goals</li>
                    <li>Increase organization’s productivity</li>
                </ul>
            </div>
          
        </div>
        }
      </div>
    )
  }

  openPopup(currentPopup) {
    this.setState({showPopup:true, currentPopup: currentPopup})
  }

  displayPopup() {
    return (
      <div>
        {this.state.showPopup && <div className="popup-container">
          {this.getPopupContent()}
        </div>}
      </div>
    )
  }

  displayContent() {
    const {currentPopup} =this.state;
      return (
        <div>
          <MediaQuery query='(min-device-width: 1024px)'>
            <div className="question-container">
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                      Create healthy environment
                    <Checkbox ref="checkbox1" key={this.state.reset}/>
                    
                  </label>
                </div>
                <div className="choice-container__cell">
                  <label>
                      Maintain safe working practices
                    <Checkbox ref="checkbox2" key={this.state.reset}/>
                    
                  </label>
                </div>
              </div>
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                      Aware of one’s responsibilities and duties
                    <Checkbox ref="checkbox3" key={this.state.reset}/>
                    
                  </label>
                </div>
                <div className="choice-container__cell">
                  <label>
                      Achieve your goals
                    <Checkbox ref="checkbox4" key={this.state.reset}/>
                    
                  </label>
                </div>
              </div>
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                      Increase organization’s productivity
                    <Checkbox ref="checkbox5" key={this.state.reset}/>
                    
                  </label>
                </div>
                <div className="choice-container__cell">
                  
                </div>
              </div>
            </div>
            <div className="button-container">
              <span className="button_div">
                <a href="#" className="button" onClick={this.submitAnswer.bind(this)}>Submit</a>
              </span>
            </div>
          </MediaQuery>
              
              
          <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
            <div className="question-container">
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                      Create healthy environment
                    <Checkbox ref="checkbox1" key={this.state.reset}/>
                  </label>
                </div>
                <div className="choice-container__cell">
                  <label>
                      Maintain safe working practices
                    <Checkbox ref="checkbox2" key={this.state.reset}/>      
                  </label>
                </div>
              </div>
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                      Aware of one’s responsibilities and duties
                    <Checkbox ref="checkbox3" key={this.state.reset}/>      
                  </label>
                </div>
                <div className="choice-container__cell">
                  <label>
                      Achieve your goals
                    <Checkbox ref="checkbox4" key={this.state.reset}/>
                  </label>
                </div>
              </div>
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                      Increase organization’s productivity
                    <Checkbox ref="checkbox5" key={this.state.reset}/>
                  </label>
                </div>
                <div className="choice-container__cell">
                  
                </div>
              </div>
            </div>
            <div className="button-container">
              <span className="button_div">
                <a href="#" className="button" onClick={this.submitAnswer.bind(this)}>Submit</a>
              </span>
            </div>
          </MediaQuery>
          <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
            <div className="question-container">
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                        Create healthy environment
                        <Checkbox ref="checkbox1" key={this.state.reset}/>
                  </label>
                </div>
              </div>
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                      Maintain safe working practices
                    <Checkbox ref="checkbox2" key={this.state.reset}/>
                  </label>
                </div>
              </div>
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                      Aware of one’s responsibilities and duties
                    <Checkbox ref="checkbox3" key={this.state.reset}/>
                    
                  </label>
                </div>
              </div>
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                      Achieve your goals
                    <Checkbox ref="checkbox4" key={this.state.reset}/>
                    
                  </label>
                </div>
              </div>
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                      Increase organization’s productivity
                    <Checkbox ref="checkbox5" key={this.state.reset}/>
                    
                  </label>
                </div>
              </div>
              
            </div>
            <div className="button-container">
              <span className="button_div">
                <a href="#" className="button" onClick={this.submitAnswer.bind(this)}>Submit</a>
              </span>
            </div>
          </MediaQuery>
          {this.displayFeedback()}
        </div>
      )
  }

  render() {
    return (
      <div className="static-page4">
        <MediaQuery query='(min-device-width: 1024px)'>
          <div className="content">
            <div className="bg">
                <div className="intro white">
                    <div className="flex-main-content">
                        <h1 className="intro_head"><span className="intr_sub_span">Nee</span>d for Code Of Conduct</h1>
                        <p className="intro_sub_heading_2">
                            Code of conduct is important to:
                        </p>
                        <div className="activity-container">
                            {this.displayContent()}
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
                        <h1 className="intro_head"><span className="intr_sub_span">Nee</span>d for Code Of Conduct</h1>
                        <p className="intro_sub_heading_2">
                            Code of conduct is important to:
                        </p>
                      <div className="activity-container">
                        {this.displayContent()}
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
                        <h1 className="white intro_head">Need for<br/><span className="intr_sub_span">Cod</span>e Of Conduct</h1>
                        <p className="intro_sub_heading_2">
                            Code of conduct is important to:
                        </p>
                      <div className="activity-container">
                        {this.displayContent()}
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
