import React from 'react';
import MediaQuery from 'react-responsive';
import RadioInput from './common/RadioInput.jsx';

var choice = [
    "Small continuous improvements",
    "Small and large improvements",
    "Large improvements",
    "Large continuous improvements"
];
var userChoice = "";
var correctAnswer = "Small continuous improvements"
const feedbackText =  [{
 	"correct": {
 		"text": "That's correct"
 	},
 	"incorrect": {
 		"text": "That's Incorrect"
 	}

 }];
export default class Question_1 extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
    showFeedback: false,
        feedbackObject:{}
        
    }
  }
    
  selectedSingleAnswer(option) {
    userChoice = option;
    document.getElementById("submit").classList.remove("disabled");
  }
    
    handleSubmit() {
        if (userChoice === correctAnswer) {
            this.setState({feedbackObject:feedbackText().correct});
        }
        else {
            this.setState({feedbackObject:feedbackText().incorrect});
        }
    }
    displayFeedback() {
    return(
        <div className="radio-feedback-value">
            <p className="">
                <span className="feedback-bold feedbackTitle">{this.state.feedbackObject.text}</span>
            </p>
        </div>
    )
}
  

  render() {
      var self = this;
    var choices = choice.map( function( choice, index ) {
        return (
            <RadioInput
            key={choice+index}
            choice={choice}
            index={index}
            onChoiceSelect={self.selectedSingleAnswer.bind(self)}
          />
        );
    });
    return (
      <div className="question_1">
       <MediaQuery query='(min-device-width: 1024px)'>
        <div className="content">
          <div className="bg">
            <div className="intro">
              <div className="flex-container">
                    <h1 className="intro_head">Check Your Understanding</h1>
                    <div className="radio_container">
                        <div className="que_grp">
                            <div className="que_no">
                                A.
                            </div>
                            <div>
                                 Kaizen is basically ____________ carried out by the person who is doing the job in his/her way in day-to-day work. 
                            </div>
                        </div>
                        
                        <p className="text_italic">Select the correct option and click Submit.</p>
                        <div className="radio_grp">
                            {choices}
                            <div className="submit_btn disabled" id="submit" onClick={this.handleSubmit.bind(this)}>
                                SUBMIT
                            </div>
                            {this.state.showFeedback && this.displayFeedback()}
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
              <div className="flex-container">
                    <h1 className="intro_head">Check Your Understanding</h1>
                    <div className="radio_container">
                        <div className="que_grp">
                            <div className="que_no">
                                A.
                            </div>
                            <div>
                                 Kaizen is basically ____________ carried out by the person who is doing the job in his/her way in day-to-day work. 
                            </div>
                        </div>
                        
                        <p className="text_italic">Select the correct option and click Submit.</p>
                        <div className="radio_grp">
                            {choices}
                            <div className="submit_btn disabled" id="submit" onClick={this.handleSubmit.bind(this)}>
                                SUBMIT
                            </div>
                            {this.state.showFeedback && this.displayFeedback()}
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
              <div className="flex-container">
                    <h1 className="intro_head">Check Your Understanding</h1>
                    <div className="radio_container">
                        <div className="que_grp">
                            <div className="que_no">
                                A.
                            </div>
                            <div className="que_detl">
                                 Kaizen is basically ____________ carried out by the person who is doing the job in his/her way in day-to-day work. 
                            </div>
                        </div>
                        
                        <p className="text_italic">Select the correct option and click Submit.</p>
                        <div className="radio_grp">
                            {choices}
                            <div className="submit_btn disabled" id="submit" onClick={this.handleSubmit.bind(this)}>
                                SUBMIT
                            </div>
                            {this.state.showFeedback && this.displayFeedback()}
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
