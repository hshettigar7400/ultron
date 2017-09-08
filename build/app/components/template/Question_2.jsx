import React from 'react';
import MediaQuery from 'react-responsive';
import RadioInput from './common/RadioInput.jsx';

var choice = [
    "Deteriorate",
    "Become chaotic",
    "Improve",
    "Stabilise"
];
var userChoice = "";
var correctAnswer = "Deteriorate"
var correctAnswerIndex = 0;
const feedbackText =  {
 	"correct": {
 		"text": "That's correct"
 	},
 	"incorrect": {
 		"text": "That’s incorrect. The correct answer is highlighted"
 	}

 };
export default class Question_1 extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
    showFeedback: false,
        feedbackText:"",
        showFeedback : false,
        clickedOption: 0,
        userAnswer: false,
        inputDisabled: false
    }
  }

  selectedSingleAnswer(e, option) {
    userChoice = option;
    document.getElementById("submit").classList.remove("disabled");
    this.setState({clickedOption: parseInt(e.currentTarget.id)})
  }

    handleSubmit() {
        this.setState({inputDisabled: true})
        if (userChoice === correctAnswer) {
            this.setState({feedbackText:feedbackText.correct.text, showFeedback: true, userAnswer: true});
            var nodes = document.querySelectorAll(".radio-input");
            nodes[this.state.clickedOption].classList.add("correct")
        }
        else {
            this.setState({feedbackText:feedbackText.incorrect.text, showFeedback: true, userAnswer: false});
            var nodes = document.querySelectorAll(".radio-input");
            nodes[correctAnswerIndex].classList.add("correct")
            nodes[this.state.clickedOption].classList.add("incorrect")
        }
    }

    displayFeedback() {

    return(
        <div className={this.state.userAnswer?"radio-feedback-value green-bg":"radio-feedback-value red-bg"}>
            <p className="">
                <span className="feedback-bold feedbackTitle">{this.state.feedbackText}</span>
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
            disabled={self.state.inputDisabled}
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
                                B.
                            </div>
                            <div>
                                 All systems are bound to _________once established. Continuing effort is a must even to maintain status quo.
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
                                B.
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
                                B.
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
