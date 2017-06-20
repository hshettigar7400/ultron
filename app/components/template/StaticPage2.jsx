import React from 'react';
import MediaQuery from 'react-responsive';

export default class StaticPage2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopup1Open: false,
      isPopup2Open: false,
      isPopup3Open: false,
      isPopup4Open: false,
      currentPopup: 0
    }

  }
  getPopupContent() {
    var currentPopup = this.state.currentPopup;
    switch (parseInt(currentPopup)) {
      case 1:
        return (
          <div className="pop_container1">
            <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
            <span className="text">Nguyên nhân gây chênh lệch là do dự đoán sales không chính xác</span>
          </div>
        );
        break;

      case 2:
        return (
          <div className="pop_container2">
            <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
            <span className="text">Không thể xác định được nguyên nhân</span>
          </div>
        );
        break;
      case 3:
        return (
          <div className="pop_container3">
            <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
            <span className="text">Nguyên nhân có thể do thực thi kế hoạch kém, năng suất lao động thấp & lương trung bình cao</span>
          </div>
        );
        break;

      case 4:
        return (
          <div className="pop_container4">
            <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
            <span className="text">Nguyên nhân có thể do xếp lịch làm việc không hiệu quả</span>
          </div>
        );
        break;

    }
  }

  displayPopup1() {
    return (
      <div>
        {this.state.isPopup1Open && <div className="popup-container">
          {this.getPopupContent()}
        </div>}
      </div>
    )
  }

  displayPopup2() {
    return (
      <div>
        {this.state.isPopup2Open && <div className="popup-container">
          {this.getPopupContent()}
        </div>}
      </div>
    )
  }

  displayPopup3() {
    return (
      <div>
        {this.state.isPopup3Open && <div className="popup-container">
          {this.getPopupContent()}
        </div>}
      </div>
    )
  }

  displayPopup4() {
    return (
      <div>
        {this.state.isPopup4Open && <div className="popup-container">
          {this.getPopupContent()}
        </div>}
      </div>
    )
  }

  openPopup1(currentPopup) {
    this.setState({
      isPopup1Open: true,
      isPopup2Open: false,
      isPopup3Open: false,
      isPopup4Open: false,
      currentPopup: currentPopup
    })
  }

  openPopup2(currentPopup) {
    this.setState({
      isPopup1Open: false,
      isPopup2Open: true,
      isPopup3Open: false,
      isPopup4Open: false,
      currentPopup: currentPopup
    })
  }

  openPopup3(currentPopup) {
    this.setState({
      isPopup1Open: false,
      isPopup2Open: false,
      isPopup3Open: true,
      isPopup4Open: false,
      currentPopup: currentPopup
    })
  }

  openPopup4(currentPopup) {
    this.setState({
      isPopup1Open: false,
      isPopup2Open: false,
      isPopup3Open: false,
      isPopup4Open: true,
      currentPopup: currentPopup
    })
  }

  closePopup() {
    this.setState({
      isPopup1Open: false,
      isPopup2Open: false,
      isPopup3Open: false,
      isPopup4Open: false
    })
  }

  render() {
    return (
      <div className="static-page2">
        <MediaQuery query='(min-device-width: 1244px)'>
          <div className="content">
            <div className="background">
              <div className="intro white">

                <div className="top-header">
                  Chênh lệch COL – các nguyên nhân gây chênh lệch có thể là?
                </div>
                <div className="instruction_text black">
                  <div className="instruction_img">
                    <img src="app/assets/images/template/hand_icon.png"/></div>
                  Nhấp vào từng người để xem lời khuyên.
                </div>
                <div className="flex-container">
                  <div className="box1">
                    <a href="#" onClick={this.openPopup1.bind(this, 1)}>
                      <img src="app/assets/images/template/pic01.png"/></a>
                    <div className="pop1">
                      {this.displayPopup1()}
                    </div>
                  </div>
                  <div className="box2">
                    <a href="#" onClick={this.openPopup2.bind(this, 2)}>
                      <img src="app/assets/images/template/pic02.png"/></a>
                    <div className="pop2">
                      {this.displayPopup2()}
                    </div>
                  </div>
                  <div className="box3">
                    <a href="#" onClick={this.openPopup3.bind(this, 3)}>
                      <img src="app/assets/images/template/pic03.png"/></a>
                    <div className="pop3">
                      {this.displayPopup3()}
                    </div>
                  </div>
                  <div className="box4">
                    <a href="#" onClick={this.openPopup4.bind(this, 4)}>
                      <img src="app/assets/images/template/pic04.png"/></a>
                    <div className="pop4">
                      {this.displayPopup4()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
          <div className="content">
            <div className="background">
              <div className="intro white">
                <div className="top-header">
                  Chênh lệch COL – các nguyên nhân gây chênh lệch có thể là?
                </div>
                <div className="instruction_text black">
                  <div className="instruction_img">
                    <img src="app/assets/images/template/hand_icon.png"/></div>
                  Nhấp vào từng người để xem lời khuyên.
                </div>
                <div className="flex-container">
                  <div className="box1">
                    <a href="#" onClick={this.openPopup1.bind(this, 1)}>
                      <img src="app/assets/images/template/pic01.png"/></a>
                    <div className="pop1">
                      {this.displayPopup1()}
                    </div>
                  </div>
                  <div className="box2">
                    <a href="#" onClick={this.openPopup2.bind(this, 2)}>
                      <img src="app/assets/images/template/pic02.png"/></a>
                    <div className="pop2">
                      {this.displayPopup2()}
                    </div>
                  </div>
                  <div className="box3">
                    <a href="#" onClick={this.openPopup3.bind(this, 3)}>
                      <img src="app/assets/images/template/pic03.png"/></a>
                    <div className="pop3">
                      {this.displayPopup3()}
                    </div>
                  </div>
                  <div className="box4">
                    <a href="#" onClick={this.openPopup4.bind(this, 4)}>
                      <img src="app/assets/images/template/pic04.png"/></a>
                    <div className="pop4">
                      {this.displayPopup4()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery query='(min-device-width: 320px) and (max-device-width: 480px) and (orientation: landscape)'>
          <div className="content">
            <h1 className="white">
              This course is best view in portrait Mode. Please reorient your mobile to portrait mode.
            </h1>
          </div>
        </MediaQuery>

        <MediaQuery query='(min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) '>
          <div className="content">
            <div className="background">
              <div className="intro white">
                <div className="top-header">
                  Chênh lệch COL – các nguyên nhân gây chênh lệch có thể là?
                </div>
                <div className="instruction_text black">
                  <div className="instruction_img">
                    <img src="app/assets/images/template/hand_icon.png"/></div>
                  Nhấp vào từng người để xem lời khuyên.
                </div>
                <div className="flex-container">
                  <div className="box1">
                    <a href="#" onClick={this.openPopup1.bind(this, 1)}>
                      <img src="app/assets/images/template/pic01.png"/></a>
                    <div className="pop1">
                      {this.displayPopup1()}
                    </div>
                  </div>
                  <div className="box2">
                    <a href="#" onClick={this.openPopup2.bind(this, 2)}>
                      <img src="app/assets/images/template/pic02.png"/></a>
                    <div className="pop2">
                      {this.displayPopup2()}
                    </div>
                  </div>
                  <div className="box3">
                    <a href="#" onClick={this.openPopup3.bind(this, 3)}>
                      <img src="app/assets/images/template/pic03.png"/></a>
                    <div className="pop3">
                      {this.displayPopup3()}
                    </div>
                  </div>
                  <div className="box4">
                    <a href="#" onClick={this.openPopup4.bind(this, 4)}>
                      <img src="app/assets/images/template/pic04.png"/></a>
                    <div className="pop4">
                      {this.displayPopup4()}
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
