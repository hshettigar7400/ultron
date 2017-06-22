import React from 'react';
import MediaQuery from 'react-responsive';
import update from 'react/lib/update';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import MultiBackend, {TouchTransition, Preview} from 'react-dnd-multi-backend';
import DropContainer from './common/DropContainer';
import DragContainer from './common/DragContainer';
import ItemTypes from './common/ItemTypes';

var userAnswer = [0,0,0,0];
const correctAnswer = [1,0,1,1];
const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend
    }, {
      backend: TouchBackend({enableMouseEvents: true}), // Note that you can call your backends with options
      preview: true,
      transition: TouchTransition
    }
  ]
};

class StaticPage3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activityState: 1,
      isPopup1Open: false,
      isPopup2Open: false,
      isPopup3Open: false,
      isPopup4Open: false,
      currentPopup: 0,
      btnArr: [0,0,0,0],
      attempts: 0,
      dragbox: [
        {
          accepts: [
            ItemTypes.STAR
          ],
          lastDroppedItem: null
        },{
          accepts: [
            ItemTypes.STAR
          ],
          lastDroppedItem: null
        },{
          accepts: [
            ItemTypes.STAR
          ],
          lastDroppedItem: null
        },{
          accepts: [
            ItemTypes.STAR
          ],
          lastDroppedItem: null
        }
      ],
      dropbox: [
        {
          name: 'star',
          type: ItemTypes.STAR
        }, {
          name: 'star',
          type: ItemTypes.STAR
        }
      ],
      droppedBoxNames: [],
      answer: [
        1, 2
      ],
      showFeedback: false,
      correctAnswer: false,
      enableSubmit: false,
      enableClick: false,
      feedbacText: ""
    };
  }

  getPopupContent() {
    var currentPopup = this.state.currentPopup;
    switch (parseInt(currentPopup)) {
      case 1:
        return (
          <div className="pop_container1">
            <span className="close-btn icon-close" onClick={this.closePopup1.bind(this)}></span>
            <span className="text">Nguyên nhân gây chênh lệch là do dự đoán sales không chính xác</span>
          </div>
        );
        break;

      case 2:
        return (
          <div className="pop_container2">
            <span className="close-btn icon-close" onClick={this.closePopup1.bind(this)}></span>
            <span className="text">Không thể xác định được nguyên nhân</span>
          </div>
        );
        break;
      case 3:
        return (
          <div className="pop_container3">
            <span className="close-btn icon-close" onClick={this.closePopup1.bind(this)}></span>
            <span className="text">Nguyên nhân có thể do thực thi kế hoạch kém, năng suất lao động thấp & lương trung bình cao</span>
          </div>
        );
        break;
      case 4:
        return (
          <div className="pop_container4">
            <span className="close-btn icon-close" onClick={this.closePopup1.bind(this)}></span>
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

  openInitialPopup (currentPopup) {
    console.log('currentPopup: ', currentPopup);
    this.setState({
      isPopup1Open: false,
      isPopup2Open: false,
      isPopup3Open: false,
      isPopup4Open: false,
      currentPopup: currentPopup,
    });

    let btnArr = this.state.btnArr;
    btnArr[currentPopup-1] = 1;

    this.setState({
      btnArr
    });

    let cnt = 0;
    for(let i = 0; i < this.state.btnArr.length; i++) {
      if(this.state.btnArr[i] == 1)
        cnt++;
    }

    if(cnt == this.state.btnArr.length)
      this.setState({
        activityState: 2
      });

    switch (currentPopup) {
      case 1:
        this.setState({
          isPopup1Open: true
        })
        break;
      case 2:
        this.setState({
          isPopup2Open: true
        })
        break;
      case 3:
        this.setState({
          isPopup3Open: true
        })
        break;
      case 4:
        this.setState({
          isPopup4Open: true
        })
        break;
    }
  }

  closePopup1() {
    console.log('testing');
    this.setState({
      isPopup1Open: false,
      isPopup2Open: false,
      isPopup3Open: false,
      isPopup4Open: false
    })
  }

  generatePreview(type, item, style) {
    Object.assign(style, {
      backgroundColor: item.color,
      width: '30px',
      height: '60px',
      padding: '0 15px'
    });
    return <img src="app/assets/images/template/star.png"/>;
  }

  componentDidMount() {
    userAnswer = [0,0,0,0];
  }

  handleDrop(index, item) {
    const {name} = item;
    userAnswer[index] = 1;
    this.setState({enableSubmit: true})
    this.setState(update(this.state, {
      dragbox: {
        [index]: {
          lastDroppedItem: {
            $set: item
          }
        }
      },
      droppedBoxNames: name
        ? {
          $push: [name]
        }
        : {}
    }));
  }

  isDropped(boxName) {
    return this.state.droppedBoxNames.indexOf(boxName) > -1;
  }

  closePopup() {
    this.setState({showFeedback: false});
  }

  tryAgain() {
    userAnswer = [0,0,0,0];
    this.setState({
      attempts: this.state.attempts + 1,
      enableSubmit: false,
      droppedBoxNames:[],
      showFeedback: false,
      dragbox: [
        {
          accepts: [
            ItemTypes.STAR
          ],
          lastDroppedItem: null
        },{
          accepts: [
            ItemTypes.STAR
          ],
          lastDroppedItem: null
        },{
          accepts: [
            ItemTypes.STAR
          ],
          lastDroppedItem: null
        },{
          accepts: [
            ItemTypes.STAR
          ],
          lastDroppedItem: null
        }
      ]
    })
  }

  showFeedback() {
    const {correctAnswer, feedbacText, showFeedback} = this.state;
    if(correctAnswer){
      return (
        <div>
          {showFeedback && <div className="feedback-container">
          <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
          <span className="feedback-text">{feedbacText}</span>
          </div>}
        </div>
      )
    }
    else {
      if (this.state.attempts < 3) {
        return (
          <div>
            {showFeedback && <div className="feedback-container">
            <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
            <span className="button_div try-again__button">
              {feedbacText}
              <a href="#" className="button" onClick={this.tryAgain.bind(this)}>Thử lại lần nữa</a>
            </span>
            </div>}
          </div>
        )
      }
      else {
        return (
          <div>
            {showFeedback && <div className="feedback-container">
            <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
            <span className="button_div">
              Thử lại lần nữa, Vui lòng xem lại gợi ý của người thứ 1, 3, 4 cho đáp án đúng
            </span>
            </div>}
          </div>
        )
      }
    }
  }

  submitAnswer() {
    if(userAnswer.toString()  === correctAnswer.toString() ) {
      this.setState({
        correctAnswer:true,
        enableClick: true,
        feedbacText: "Chính xác. Nhấp vào từng người để xem phản hồi của họ"
      })
    }
    else {
      this.setState({
        correctAnswer:false,
        feedbacText: "Bạn chưa chọn được các câu trả lời đúng"
      })
    }
    this.setState({showFeedback: true, enableSubmit: false});
    if (this.state.attempts >= 3) {
      this.setState({enableClick: true, activityState: 1});
    }
  }

  handleClick(id) {
    switch (id) {
      case 1:
      return (
        <div>
          {<div className="feedback-container">
          <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
          fsdfsfsdf
          </div>}
        </div>
      )
    }
  }

  render() {
    const { dragbox, dropbox, enableSubmit, enableClick} = this.state;
    return (
      <div className="static-page3">
        <MediaQuery query='(min-device-width: 1224px)'>
          <div className="content">
            <div className="background">
              <div className="intro white">

                <div className="top-header">
                  Chênh lệch COL – các nguyên nhân gây chênh lệch có thể là?
                </div>
                <div className="instruction_text black">
                  <div className="instruction_img">
                    <img src="app/assets/images/template/hand_icon.png"/></div>
                  Nhấp vào từng người để xem lời khuyên, kéo ngôi sao vào người có lời khuyên tốt
                  <DragContainer name="star" type={ItemTypes.STAR} isDisable={(this.state.activityState == 1)? true : false} isDropped={this.isDropped("star")} key={1} closePopup1={this.closePopup1.bind(this)}>

                  </DragContainer>
                </div>

                <div className="flex-container">
                  <div className="pop1">
                    {this.displayPopup1()}
                  </div>
                  <div className="pop2">
                    {this.displayPopup2()}
                  </div>
                  <div className="pop3">
                    {this.displayPopup3()}
                  </div>
                  <div className="pop4">
                    {this.displayPopup4()}
                  </div>
                  <DropContainer
                    accepts={[ItemTypes.STAR]}
                    lastDroppedItem={dragbox[0].lastDroppedItem}
                    onDrop={item => this.handleDrop(0, item)}
                    imagePath="app/assets/images/template/pic01.png"
                    enableClick={this.state.enableClick}
                    openInitialPopup={this.openInitialPopup.bind(this)}
                    id={1}
                    key={1} />

                    <DropContainer
                      accepts={[ItemTypes.STAR]}
                      lastDroppedItem={dragbox[1].lastDroppedItem}
                      onDrop={item => this.handleDrop(1, item)}
                      imagePath="app/assets/images/template/pic02.png"
                      enableClick={this.state.enableClick}
                      openInitialPopup={this.openInitialPopup.bind(this)}
                      id={2}
                      key={2} />

                    <DropContainer
                      accepts={[ItemTypes.STAR]}
                      lastDroppedItem={dragbox[2].lastDroppedItem}
                      onDrop={item => this.handleDrop(2, item)}
                      imagePath="app/assets/images/template/pic03.png"
                      enableClick={this.state.enableClick}
                      openInitialPopup={this.openInitialPopup.bind(this)}
                      id={3}
                      key={3} />

                    <DropContainer
                      accepts={[ItemTypes.STAR]}
                      lastDroppedItem={dragbox[3].lastDroppedItem}
                      onDrop={item => this.handleDrop(3, item)}
                      imagePath="app/assets/images/template/pic04.png"
                      enableClick={this.state.enableClick}
                      openInitialPopup={this.openInitialPopup.bind(this)}
                      id={4}
                      key={4} />
                </div>

                <div className={(this.state.activityState == 1) ? "button_box hide-element":" button_box show-element"}>
                  <button name="submit" className={enableSubmit?"submit_btn":"submit_btn disable-event"} onClick={this.submitAnswer.bind(this)}>Gửi đi</button>
                </div>
              </div>

            </div>
            {this.showFeedback()}
          </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)'>
          <div className="content">
            <div className="background">
              <div className="intro white">

                <div className="top-header">
                  Chênh lệch COL – các nguyên nhân gây chênh lệch có thể là?
                </div>
                <div className="instruction_text black">
                  <div className="instruction_img">
                    <img src="app/assets/images/template/hand_icon.png"/></div>
                      Nhấp vào từng người để xem lời khuyên, kéo ngôi sao vào người có lời khuyên tốt
                      <DragContainer name="star" type={ItemTypes.STAR} isDisable={(this.state.activityState == 1)? true : false} isDropped={this.isDropped("star")} key={1} closePopup1={this.closePopup1.bind(this)}>

                      </DragContainer>
                </div>

                <div className="flex-container">
                  <div className="pop1">
                    {this.displayPopup1()}
                  </div>
                  <div className="pop2">
                    {this.displayPopup2()}
                  </div>
                  <div className="pop3">
                    {this.displayPopup3()}
                  </div>
                  <div className="pop4">
                    {this.displayPopup4()}
                  </div>
                  <DropContainer
                    accepts={[ItemTypes.STAR]}
                    lastDroppedItem={dragbox[0].lastDroppedItem}
                    onDrop={item => this.handleDrop(0, item)}
                    imagePath="app/assets/images/template/pic01.png"
                    enableClick={this.state.enableClick}
                    openInitialPopup={this.openInitialPopup.bind(this)}
                    id={1}
                    key={1} />

                    <DropContainer
                      accepts={[ItemTypes.STAR]}
                      lastDroppedItem={dragbox[1].lastDroppedItem}
                      onDrop={item => this.handleDrop(1, item)}
                      imagePath="app/assets/images/template/pic02.png"
                      enableClick={this.state.enableClick}
                      openInitialPopup={this.openInitialPopup.bind(this)}
                      id={2}
                      key={2} />

                    <DropContainer
                      accepts={[ItemTypes.STAR]}
                      lastDroppedItem={dragbox[2].lastDroppedItem}
                      onDrop={item => this.handleDrop(2, item)}
                      imagePath="app/assets/images/template/pic03.png"
                      enableClick={this.state.enableClick}
                      openInitialPopup={this.openInitialPopup.bind(this)}
                      id={3}
                      key={3} />

                    <DropContainer
                      accepts={[ItemTypes.STAR]}
                      lastDroppedItem={dragbox[3].lastDroppedItem}
                      onDrop={item => this.handleDrop(3, item)}
                      imagePath="app/assets/images/template/pic04.png"
                      enableClick={this.state.enableClick}
                      openInitialPopup={this.openInitialPopup.bind(this)}
                      id={4}
                      key={4} />
                </div>

                <div className={(this.state.activityState == 1) ? "button_box hide-element":"button_box show-element"}>
                  <button name="submit" className={enableSubmit?"submit_btn":"submit_btn disable-event"} onClick={this.submitAnswer.bind(this)}>Gửi đi</button>
                </div>
              </div>

            </div>
            {this.showFeedback()}
          </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait)'>
          <div className="content">
            <div className="background">
              <div className="intro white">

                <div className="top-header">
                  Chênh lệch COL – các nguyên nhân gây chênh lệch có thể là?
                </div>
                <div className="instruction_text black">
                  <div className="instruction_img">
                    <img src="app/assets/images/template/hand_icon.png"/></div>
                      Nhấp vào từng người để xem lời khuyên, kéo ngôi sao vào người có lời khuyên tốt
                      <DragContainer name="star" type={ItemTypes.STAR} isDisable={(this.state.activityState == 1)? true : false} isDropped={this.isDropped("star")} key={1} closePopup1={this.closePopup1.bind(this)}>

                      </DragContainer>
                </div>

                <div className="flex-container">
                  <div className="flex-container__row">
                    <div className="pop1">
                      {this.displayPopup1()}
                    </div>
                    <div className="pop2">
                      {this.displayPopup2()}
                    </div>
                    <div className="pop3">
                      {this.displayPopup3()}
                    </div>
                    <div className="pop4">
                      {this.displayPopup4()}
                    </div>
                  <DropContainer
                    accepts={[ItemTypes.STAR]}
                    lastDroppedItem={dragbox[0].lastDroppedItem}
                    onDrop={item => this.handleDrop(0, item)}
                    imagePath="app/assets/images/template/pic01.png"
                    enableClick={this.state.enableClick}
                    openInitialPopup={this.openInitialPopup.bind(this)}
                    id={1}
                    key={1} />

                    <DropContainer
                      accepts={[ItemTypes.STAR]}
                      lastDroppedItem={dragbox[1].lastDroppedItem}
                      onDrop={item => this.handleDrop(1, item)}
                      imagePath="app/assets/images/template/pic02.png"
                      enableClick={this.state.enableClick}
                      openInitialPopup={this.openInitialPopup.bind(this)}
                      id={2}
                      key={2} />
                  </div>
                  <div className="flex-container__row">

                    <DropContainer
                      accepts={[ItemTypes.STAR]}
                      lastDroppedItem={dragbox[2].lastDroppedItem}
                      onDrop={item => this.handleDrop(2, item)}
                      imagePath="app/assets/images/template/pic03.png"
                      enableClick={this.state.enableClick}
                      openInitialPopup={this.openInitialPopup.bind(this)}
                      id={3}
                      key={3} />

                    <DropContainer
                      accepts={[ItemTypes.STAR]}
                      lastDroppedItem={dragbox[3].lastDroppedItem}
                      onDrop={item => this.handleDrop(3, item)}
                      imagePath="app/assets/images/template/pic04.png"
                      enableClick={this.state.enableClick}
                      openInitialPopup={this.openInitialPopup.bind(this)}
                      id={4}
                      key={4} />
                  </div>
                </div>

                <div className={(this.state.activityState == 1) ? "button_box hide-element":" button_box show-element"}>
                  <button name="submit" className={enableSubmit?"submit_btn":"submit_btn disable-event"} onClick={this.submitAnswer.bind(this)}>Gửi đi</button>
                </div>
              </div>

            </div>
            {this.showFeedback()}
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
                      Nhấp vào từng người để xem lời khuyên, kéo ngôi sao vào người có lời khuyên tốt
                      <DragContainer name="star" type={ItemTypes.STAR} isDisable={(this.state.activityState == 1)? true : false} isDropped={this.isDropped("star")} key={1} closePopup1={this.closePopup1.bind(this)}>

                      </DragContainer>
                </div>
              </div>
              <div className="flex-container">
                <div className="flex-container__row">
                  <div className="pop1">
                    {this.displayPopup1()}
                  </div>
                  <div className="pop2">
                    {this.displayPopup2()}
                  </div>
                  <div className="pop3">
                    {this.displayPopup3()}
                  </div>
                  <div className="pop4">
                    {this.displayPopup4()}
                  </div>
                  <DropContainer
                    accepts={[ItemTypes.STAR]}
                    lastDroppedItem={dragbox[0].lastDroppedItem}
                    onDrop={item => this.handleDrop(0, item)}
                    imagePath="app/assets/images/template/pic01.png"
                    enableClick={this.state.enableClick}
                    openInitialPopup={this.openInitialPopup.bind(this)}
                    id={1}
                    key={1} />

                    <DropContainer
                      accepts={[ItemTypes.STAR]}
                      lastDroppedItem={dragbox[1].lastDroppedItem}
                      onDrop={item => this.handleDrop(1, item)}
                      imagePath="app/assets/images/template/pic02.png"
                      enableClick={this.state.enableClick}
                      openInitialPopup={this.openInitialPopup.bind(this)}
                      id={2}
                      key={2} />
                  </div>
                  <div className="flex-container__row">
                    <DropContainer
                      accepts={[ItemTypes.STAR]}
                      lastDroppedItem={dragbox[2].lastDroppedItem}
                      onDrop={item => this.handleDrop(2, item)}
                      imagePath="app/assets/images/template/pic03.png"
                      enableClick={this.state.enableClick}
                      openInitialPopup={this.openInitialPopup.bind(this)}
                      id={3}
                      key={3} />

                    <DropContainer
                      accepts={[ItemTypes.STAR]}
                      lastDroppedItem={dragbox[3].lastDroppedItem}
                      onDrop={item => this.handleDrop(3, item)}
                      imagePath="app/assets/images/template/pic04.png"
                      enableClick={this.state.enableClick}
                      openInitialPopup={this.openInitialPopup.bind(this)}
                      id={4}
                      key={4} />
                </div>
              </div>

              <div className={(this.state.activityState == 1) ? "button_box hide-element":" button_box show-element"}>
                <button name="submit" className={enableSubmit?"submit_btn":"submit_btn disable-event"} onClick={this.submitAnswer.bind(this)}>Gửi đi</button>
              </div>
            </div>
            {this.showFeedback()}
          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default DragDropContext(MultiBackend(HTML5toTouch))(StaticPage3);
