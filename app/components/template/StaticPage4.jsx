import React from 'react';
import MediaQuery from 'react-responsive';
import Checkbox from './common/Checkbox';
export default class StaticPage3 extends React.Component {
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
    this.setState({showFeedback: false, reset: 1})
  }

  displayFeedback() {
    const {attempts, correctAnswer, showFeedback} = this.state;
    let feebackText = "";
    if (correctAnswer) {
     
         this.setState({
          attempts: 2
      })
           
    } else {
      feebackText = "Bạn chưa chọn được các câu trả lời đúng";
    }
    return (
      <div>
        {showFeedback && <div className="feedback-container">
          <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
          {feebackText}
          {attempts > 0 && <span className="button_div try-again__button">
            <a href="#" className="button" onClick={this.tryAgain.bind(this)}>Thử lại lần nữa</a>
          </span>
          }
           
        </div>
}
      </div>
    )
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

  displayContent() {
    const {currentPopup} =this.state;
    if (this.state.attempts < 2) {
      return (
        <div>
          <MediaQuery query='(min-device-width: 1224px)'>
            <div className="question-container">
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                    <Checkbox ref="checkbox1" key={this.state.reset}/>
                    Sắp xếp nhân viên đúng vị trí
                  </label>
                </div>
                <div className="choice-container__cell">
                  <label>
                    <Checkbox ref="checkbox2" key={this.state.reset}/>
                    Lập kế hoạch
                  </label>
                </div>
              </div>
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                    <Checkbox ref="checkbox3" key={this.state.reset}/>
                    Quản lý giờ công trung bình
                  </label>
                </div>
                <div className="choice-container__cell">
                  <label>
                    <Checkbox ref="checkbox4" key={this.state.reset}/>
                    Theo dõi năng suất lao động
                  </label>
                </div>
              </div>
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                    <Checkbox ref="checkbox5" key={this.state.reset}/>
                    Quản lý mức lương phải trả
                  </label>
                </div>
                <div className="choice-container__cell">
                  <label>
                    <Checkbox ref="checkbox6" key={this.state.reset}/>
                    Không thể kiểm soát
                  </label>
                </div>
              </div>
            </div>
            <div className="button-container">
              Chọn câu trả lời đúng cho câu hỏi sau đây.
              <span className="button_div">
                <a href="#" className="button" onClick={this.submitAnswer.bind(this)}>Gửi</a>
              </span>
            </div>
          </MediaQuery>
          <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
            <div className="question-container">
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                    <Checkbox ref="checkbox1" key={this.state.reset}/>
                    Sắp xếp nhân viên đúng vị trí
                  </label>
                </div>
                <div className="choice-container__cell">
                  <label>
                    <Checkbox ref="checkbox2" key={this.state.reset}/>
                    Lập kế hoạch
                  </label>
                </div>
              </div>
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                    <Checkbox ref="checkbox3" key={this.state.reset}/>
                    Quản lý giờ công trung bình
                  </label>
                </div>
                <div className="choice-container__cell">
                  <label>
                    <Checkbox ref="checkbox4" key={this.state.reset}/>
                    Theo dõi năng suất lao động
                  </label>
                </div>
              </div>
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                    <Checkbox ref="checkbox5" key={this.state.reset}/>
                    Quản lý mức lương phải trả
                  </label>
                </div>
                <div className="choice-container__cell">
                  <label>
                    <Checkbox ref="checkbox6" key={this.state.reset}/>
                    Không thể kiểm soát
                  </label>
                </div>
              </div>
            </div>
            <div className="button-container">
              Chọn câu trả lời đúng cho câu hỏi sau đây.
              <span className="button_div">
                <a href="#" className="button" onClick={this.submitAnswer.bind(this)}>Gửi</a>
              </span>
            </div>
          </MediaQuery>
          <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
            <div className="question-container">
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                    <Checkbox ref="checkbox1" key={this.state.reset}/>
                    Sắp xếp nhân viên đúng vị trí
                  </label>
                </div>
              </div>
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                    <Checkbox ref="checkbox2" key={this.state.reset}/>
                    Lập kế hoạch
                  </label>
                </div>
              </div>
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                    <Checkbox ref="checkbox3" key={this.state.reset}/>
                    Quản lý giờ công trung bình
                  </label>
                </div>
              </div>
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                    <Checkbox ref="checkbox4" key={this.state.reset}/>
                    Theo dõi năng suất lao động
                  </label>
                </div>
              </div>
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                    <Checkbox ref="checkbox5" key={this.state.reset}/>
                    Quản lý mức lương phải trả
                  </label>
                </div>
              </div>
              <div className="choice-container__row">
                <div className="choice-container__cell">
                  <label>
                    <Checkbox ref="checkbox6" key={this.state.reset}/>
                    Không thể kiểm soát
                  </label>
                </div>
              </div>
            </div>
            <div className="button-container">
              Chọn câu trả lời đúng cho câu hỏi sau đây.
              <span className="button_div">
                <a href="#" className="button" onClick={this.submitAnswer.bind(this)}>Gửi</a>
              </span>
            </div>
          </MediaQuery>
          {this.displayFeedback()}
        </div>
      )
    } else {
      return (
        <div>
          <MediaQuery query='(min-device-width: 1224px)'>
            <div className="question-container">
            <div className="choice-container__row">
              <div className={currentPopup === 1?"choice-container__cell selected":"choice-container__cell"} onClick={this.openPopup.bind(this, 1)}>
                <label>
                  + Sắp xếp nhân viên đúng vị trí
                </label>
              </div>
              <div className={currentPopup === 2?"choice-container__cell selected":"choice-container__cell"} onClick={this.openPopup.bind(this, 2)}>
                <label>
                  + Lập kế hoạch
                </label>
              </div>
            </div>
            <div className="choice-container__row">
              <div className={currentPopup === 3?"choice-container__cell selected":"choice-container__cell"} onClick={this.openPopup.bind(this, 3)}>
                <label>
                  + Quản lý giờ công trung bình
                </label>
              </div>
              <div className={currentPopup === 4?"choice-container__cell selected":"choice-container__cell"} onClick={this.openPopup.bind(this, 4)}>
                <label>
                  + Theo dõi năng suất lao động
                </label>
              </div>
            </div>
            <div className="choice-container__row">
              <div className={currentPopup === 5?"choice-container__cell selected":"choice-container__cell"} onClick={this.openPopup.bind(this, 5)}>
                <label>
                  + Quản lý mức lương phải trả
                </label>
              </div>
              <div className={currentPopup === 6?"choice-container__cell selected":"choice-container__cell"} onClick={this.openPopup.bind(this, 6)}>
                <label>
                  + Không thể kiểm soát
                </label>
              </div>
            </div>
          </div>
          </MediaQuery>
          <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
            <div className="question-container">
            <div className="choice-container__row">
              <div className={currentPopup === 1?"choice-container__cell selected":"choice-container__cell"} onClick={this.openPopup.bind(this, 1)}>
                <label>
                  + Sắp xếp nhân viên đúng vị trí
                </label>
              </div>
            </div>
            <div className="choice-container__row">
              <div className={currentPopup === 2?"choice-container__cell selected":"choice-container__cell"} onClick={this.openPopup.bind(this, 2)}>
                <label>
                  + Lập kế hoạch
                </label>
              </div>
            </div>
            <div className="choice-container__row">
              <div className={currentPopup === 3?"choice-container__cell selected":"choice-container__cell"} onClick={this.openPopup.bind(this, 3)}>
                <label>
                  + Quản lý giờ công trung bình
                </label>
              </div>
            </div>
            <div className="choice-container__row">
              <div className={currentPopup === 4?"choice-container__cell selected":"choice-container__cell"} onClick={this.openPopup.bind(this, 4)}>
                <label>
                  + Theo dõi năng suất lao động
                </label>
              </div>
            </div>
            <div className="choice-container__row">
              <div className={currentPopup === 5?"choice-container__cell selected":"choice-container__cell"} onClick={this.openPopup.bind(this, 5)}>
                <label>
                  + Quản lý mức lương phải trả
                </label>
              </div>
            </div>
            <div className="choice-container__row">
              <div className={currentPopup === 6?"choice-container__cell selected":"choice-container__cell"} onClick={this.openPopup.bind(this, 6)}>
                <label>
                  + Không thể kiểm soát
                </label>
              </div>
            </div>
          </div>
          </MediaQuery>
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
                    Câu hỏi 1: làm thể nào để có thể kiểm soát chi phí lao động nhưng vẫn duy trì tiêu chuẩn?
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
                     <span>
                    
                    <img src="app/assets/images/template/q_icon.png" />
                    </span>
                    
                  <span>
                    Câu hỏi 1: làm thể nào để có thể kiểm soát chi phí lao động nhưng vẫn duy trì tiêu chuẩn?
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
                     <span>
                    
                    <img src="app/assets/images/template/q_icon.png" />
                    </span>
                    
                  <span>
                    Câu hỏi 1: làm thể nào để có thể kiểm soát chi phí lao động nhưng vẫn duy trì tiêu chuẩn?
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
