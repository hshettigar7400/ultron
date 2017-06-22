import React from 'react';
import MediaQuery from 'react-responsive';
import Checkbox from './common/Checkbox';
export default class StaticPage3 extends React.Component {
  constructor(props) {
    super(props);
    this.optionsText = ["Sắp xếp nhân viên đúng vị trí", "Lập kế hoạch", "Quản lý giờ công trung bình", "Theo dõi năng suất lao động", "Quản lý mức lương phải trả", "Không thể kiểm soát"];
    this.state = {
      currentPopup: 0,
      showFeedback: false,
      showPopup: false,
      attempts: 0,
      correctAnswer: false,
      reset: 0,
      enableSubmit: false,
      continueClicked: false,
      optionArray: [1, 2, 3, 4, 5, 6]
    }
  }

  submitAnswer() {
    this.setState({
      showFeedback: true,
      attempts: this.state.attempts + 1
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
    var test = this.randomNumber()
    this.setState({
      showFeedback: false,
      reset: !this.state.reset,
      enableSubmit: false,
      optionArray: test
    })
  }

  continue() {
    this.setState({attempts: 5, continueClicked: true})
  }

  displayFeedback() {
    const {attempts, correctAnswer, showFeedback} = this.state;
    if (correctAnswer) {
      return (
        <div>
          {showFeedback && <div className="feedback-container">
            <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
            Rất tốt
            {attempts > 0 && <span className="button_div try-again__button">
              <button name="submit" className="button" onClick={this.continue.bind(this)}>Tiếp tục</button>
            </span>
            }
          </div>
          }
        </div>
      )
    } else {
    return (
      <div>
        {showFeedback && <div className="feedback-container">
          <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
          Bạn chưa chọn được các câu trả lời đúng
          {attempts > 0 && <span className="button_div try-again__button">
              <button name="submit" className="button" onClick={this.tryAgain.bind(this)}>Thử lại lần nữa</button>
          </span>
          }
        </div>
        }
      </div>
    )
  }
  }

  openPopup(currentPopup) {
    this.setState({showPopup:true, currentPopup: currentPopup})
  }

  getPopupContent(currentPopup) {
    var currentPopup = this.state.currentPopup;
    switch (parseInt(currentPopup)) {
      case 1:
        return (
          <div className="pop_container1">
            <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
            <span className="text">Đúng rồi – việc phân bố nhân viên có nhiều kinh nghiệm vào những vị trí quan trọng trong giờ cao điểm hoặc phân công chính xác vị trí cho nhân viên mới tại giờ cao điểm cũng ảnh hưởng rất nhiều</span>
          </div>
        );
        break;

      case 2:
        return (
          <div className="pop_container1">
            <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
            <span className="text">Tuyệt – mục tiêu của việc lên lịch làm việc là nhằm đảm bảo mục tiêu về COL, doanh thu & dịch vụ. Việc tối ưu lịch làm giúp bạn đạt được các mục tiêu đó.</span>
          </div>
        );
        break;

      case 3:
        return (
          <div className="pop_container1">
            <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
            <span className="text">Đúng rồi – mức lương trung bình phải trả trong quán được xác định bằng cách chia tổng chi phí COL cho tổng sô giờ công. </span>
          </div>
        );
        break;

      case 4:
        return (
          <div className="pop_container1">
            <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
            <span className="text">Đúng rồi – bạn phải theo dõi năng suất lao động theo doanh thu/giờ hoặc số lượt khách/giờ để xem hiệu quả làm việc của nhân viên</span>
          </div>
        );
        break;

      case 5:
        return (
          <div className="pop_container1">
            <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
            <span className="text">Rất tốt – các nhân viên có mức lương khác nhau. Một trong những cách để quản lý chi phí lao động là cân bằng mức lương và đảm bảo dịch vụ tốt nhất.a</span>
          </div>
        );
        break;

      case 6:
        return (
          <div className="pop_container1">
            <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
            <span className="text">Rất tiếc – đây không phải là đáp án đúng vì….</span>
          </div>
        );
        break;

    }
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

  handleClick() {
    this.setState({enableSubmit: true})
  }

  randomNumber () {
    let max = 6;
    let random = [];
    var _html;
    for(let i = 0;i<max ; i++){
        let temp = Math.floor(Math.random()*max) +1;
        if(random.indexOf(temp) == -1){
            random.push(temp);
        } else {
         i--;
       }
     }

     return random;
  }


  displayContent() {
    const {currentPopup, correctAnswer, enableSubmit} = this.state;

    if (!correctAnswer) {
      return (
        <div>
          <MediaQuery query='(min-device-width: 1224px)'>
            <div className="question-container">
              <div className="choice-container__row" >
                <div className="choice-container__cell">
                  {this.state.optionArray.map((num, index) => {
                    return (
                      <label key={index}>
                        <Checkbox ref={"checkbox"+num} key={this.state.reset} onClick={this.handleClick.bind(this)}/>
                        {this.optionsText[num-1]}
                      </label>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="button-container">
              Chọn câu trả lời đúng cho câu hỏi sau đây.
              <span className="button_div">
                <button name="submit" className={enableSubmit?"button":"submit_btn disable-event"} onClick={this.submitAnswer.bind(this)}>Gửi</button>
              </span>
            </div>
          </MediaQuery>
          <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
            <div className="question-container">
              <div className="choice-container__row" >
                <div className="choice-container__cell">
                  {this.state.optionArray.map((num, index) => {
                    return (
                      <label key={index}>
                        <Checkbox ref={"checkbox"+num} key={this.state.reset} onClick={this.handleClick.bind(this)}/>
                        {this.optionsText[num-1]}
                      </label>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="button-container">
              Chọn câu trả lời đúng cho câu hỏi sau đây.
              <span className="button_div">
                <button name="submit" className={enableSubmit?"button":"submit_btn disable-event"} onClick={this.submitAnswer.bind(this)}>Gửi</button>
              </span>
            </div>
          </MediaQuery>
          <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
            <div className="question-container">
              <div className="choice-container__row" >
                <div className="choice-container__cell">
                  {this.state.optionArray.map((num, index) => {
                    return (
                      <label key={index}>
                        <Checkbox ref={"checkbox"+num} key={this.state.reset} onClick={this.handleClick.bind(this)}/>
                        {this.optionsText[num-1]}
                      </label>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="button-container">
              Chọn câu trả lời đúng cho câu hỏi sau đây.
              <span className="button_div">
                <button name="submit" className={enableSubmit?"button":"submit_btn disable-event"} onClick={this.submitAnswer.bind(this)}>Gửi</button>
              </span>
            </div>
          </MediaQuery>
          {this.displayFeedback()}
        </div>
      )
    }
    else if (correctAnswer && !this.state.continueClicked) {
      return (
        <div>
          <MediaQuery query='(min-device-width: 1224px)'>
            <div className="question-container">
              <div className="choice-container__row" >
                <div className="choice-container__cell">
                  {this.state.optionArray.map((num, index) => {
                    return (
                      <label key={index}>
                        <Checkbox ref={"checkbox"+num} key={this.state.reset} onClick={this.handleClick.bind(this)}/>
                        {this.optionsText[num-1]}
                      </label>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="button-container">
              Chọn câu trả lời đúng cho câu hỏi sau đây.
              <span className="button_div">
                <button name="submit" className={enableSubmit?"button":"submit_btn disable-event"} onClick={this.submitAnswer.bind(this)}>Gửi</button>
              </span>
            </div>
          </MediaQuery>
          <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
            <div className="question-container">
              <div className="choice-container__row" >
                <div className="choice-container__cell">
                  {this.state.optionArray.map((num, index) => {
                    return (
                      <label key={index}>
                        <Checkbox ref={"checkbox"+num} key={this.state.reset} onClick={this.handleClick.bind(this)}/>
                        {this.optionsText[num-1]}
                      </label>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="button-container">
              Chọn câu trả lời đúng cho câu hỏi sau đây.
              <span className="button_div">
                <button name="submit" className={enableSubmit?"button":"submit_btn disable-event"} onClick={this.submitAnswer.bind(this)}>Gửi</button>
              </span>
            </div>
          </MediaQuery>
          <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
            <div className="question-container">
              <div className="choice-container__row" >
                <div className="choice-container__cell">
                  {this.state.optionArray.map((num, index) => {
                    return (
                      <label key={index}>
                        <Checkbox ref={"checkbox"+num} key={this.state.reset} onClick={this.handleClick.bind(this)}/>
                        {this.optionsText[num-1]}
                      </label>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="button-container">
              Chọn câu trả lời đúng cho câu hỏi sau đây.
              <span className="button_div">
                <button name="submit" className={enableSubmit?"button":"submit_btn disable-event"} onClick={this.submitAnswer.bind(this)}>Gửi</button>
              </span>
            </div>
          </MediaQuery>
          {this.displayFeedback()}
        </div>
      )
    }
    else if(this.state.continueClicked) {
      return (
        <div>
            <div className="question-container">
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label className={currentPopup === 1?"selected":""} onClick={this.openPopup.bind(this, 1)}>
                    + Sắp xếp nhân viên đúng vị trí
                  </label>
                  <label className={currentPopup === 2?"selected":""} onClick={this.openPopup.bind(this, 2)}>
                    + Lập kế hoạch
                  </label>
                  <label className={currentPopup === 3?"selected":""} onClick={this.openPopup.bind(this, 3)}>
                    + Quản lý giờ công trung bình
                  </label>
                  <label className={currentPopup === 4?"selected":""} onClick={this.openPopup.bind(this, 4)}>
                    + Theo dõi năng suất lao động
                  </label>
                  <label className={currentPopup === 5?"selected":""} onClick={this.openPopup.bind(this, 5)}>
                    + Quản lý mức lương phải trả
                  </label>
                  <label className={currentPopup === 6?"selected":""} onClick={this.openPopup.bind(this, 6)}>
                    + Không thể kiểm soát
                  </label>
                </div>
              </div>
            </div>
          {this.displayPopup()}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="static-page4">
        <MediaQuery query='(min-device-width: 1224px)'>
          <div className="content">
            <div className="background">
              <div className="activity-container">
                <div className="activity-instruction__text">
                     <span className="img_icon">

                    <img src="app/assets/images/template/q_icon.png" />
                    </span>
                   <span className="question">
                    Câu hỏi 1: làm thể nào để có thể kiểm soát chi phí lao động nhưng vẫn duy trì tiêu chuẩn? <br/><br/>
                     Giải quyết chênh lệch chi phí nhân công.
                  </span>
                </div>
                {this.displayContent()}
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
          <div className="content">
            <div className="background">
              <div className="activity-container">
                <div className="activity-instruction__text">
                     <span className="img_icon">

                    <img src="app/assets/images/template/q_icon.png" />
                    </span>
                   <span className="question">
                    Câu hỏi 1: làm thể nào để có thể kiểm soát chi phí lao động nhưng vẫn duy trì tiêu chuẩn?<br/><br/>
                     Giải quyết chênh lệch chi phí nhân công.
                  </span>
                </div>
                  {this.displayContent()}
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
          <div className="content">
            <div className="background">
              <div className="activity-container">
                <div className="activity-instruction__text">
                      <span className="img_icon">

                    <img src="app/assets/images/template/q_icon.png" />
                    </span>
                   <span className="question">
                    Câu hỏi 1: làm thể nào để có thể kiểm soát chi phí lao động nhưng vẫn duy trì tiêu chuẩn?<br/><br/>
                     Giải quyết chênh lệch chi phí nhân công.
                  </span>

                </div>
                {this.displayContent()}
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
}
