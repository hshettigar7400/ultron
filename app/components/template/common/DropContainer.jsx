import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import SkyLight from 'react-skylight';
import MediaQuery from 'react-responsive';

const dropTarget = {
  drop(props, monitor) {
    props.onDrop(monitor.getItem());
  },
};

@DropTarget(props => props.accepts, dropTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
export default class DropContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayId: 0,
      feedbackText: ""
    }
  }

  displayFeedback() {
    var popUpDesktop = {
      backgroundColor: '#ffffff',
      color: '#000000',
      width: '850',
      height: '110px',
      marginTop: '-25px',
      marginLeft: '-457px',
      top: '404px',
      padding: '25px'
    };
    var popUp = {
      backgroundColor: '#ffffff',
      color: '#000000',
      width: '78%',
      height: '110px',
      marginTop: '-25px',
      marginLeft: '-42%',
      padding: '25px'
    };

    var popUpMobile = {
      backgroundColor: '#ffffff',
      color: '#000000',
      width: '78%',
      height: '155px',
      marginTop: '-25px',
      marginLeft: '-47%',
      padding: '25px'
    };
    return (
      <div>
      <MediaQuery query='(min-device-width: 1224px)'>
        <SkyLight dialogStyles={popUpDesktop} hideOnOverlayClicked ref="simpleDialog" title="">
          <span dangerouslySetInnerHTML={{__html: this.state.feedbackText}}></span>
        </SkyLight>
      </MediaQuery>
      <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)'>
        <SkyLight dialogStyles={popUp} hideOnOverlayClicked ref="simpleDialog" title="">
          <span dangerouslySetInnerHTML={{__html: this.state.feedbackText}}></span>
        </SkyLight>
      </MediaQuery>
      <MediaQuery query='(min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait)'>
        <SkyLight dialogStyles={popUp} hideOnOverlayClicked ref="simpleDialog" title="">
          <span dangerouslySetInnerHTML={{__html: this.state.feedbackText}}></span>
        </SkyLight>
      </MediaQuery>
      <MediaQuery query='(min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) '>
        <SkyLight dialogStyles={popUpMobile} hideOnOverlayClicked ref="simpleDialog" title="">
          <span dangerouslySetInnerHTML={{__html: this.state.feedbackText}}></span>
        </SkyLight>
      </MediaQuery>
      </div>
    )
  }

  handleClick(id) {
    if (this.props.enableClick)
      this.refs.simpleDialog.show()
    else
      this.props.openInitialPopup(id);
    switch (id) {
      case 1:
        this.setState({
          feedbackText: "<p>Nguyên nhân gây chênh lệch là do dự đoán sales không chính xác.</p><p>Đúng rồi – so sánh mức dự đoán doanh thu với doanh thu thực tế, xem mức chênh lệch có nhiều hay không. Nếu doanh thu dự đoán tốt. Kiểm tra lịch làm việc</p>"
        })
        break;
      case 2:
        this.setState({
          feedbackText: "<p>Không thể xác định nguyên nhân</p><p>Rất tiếc – đây là câu trả lời sai</p>"
        })
        break;
      case 3:
        this.setState({
          feedbackText: "<p>Nguyên nhân có thể do thực thi kế hoạch kém, năng suất lao động thấp & lương trung bình cao</p><p>Tuyệt vời – bạn có thể kiểm tra giờ công thực tế với giờ kế hoạch nếu năng suất làm việc thấp. Lương trung bình cao đồng Nghĩa với việc năng suất cũng cao hơn</p>"
        })
        break;
      case 4:
        this.setState({
          feedbackText: "<p>Nguyên nhân gây chênh lệch là do lịch làmkhông chính xác.</p><p>Đúng rồi – bạn phải xem lại lịch làm việc của nhân viên xem có xếp quá nhiều nhân viên cho một ca làm việc, hoặc xem lại cách phân bổ nhân viên trong ca</p>"
        })
        break;
      default:

    }
  }

  render() {
    const { accepts, isOver, imagePath, onImageClick, canDrop, connectDropTarget, lastDroppedItem, id } = this.props;
    const isActive = canDrop && isOver;
    return connectDropTarget(

      <div className="drop-container">
        <div className="box1">
          <a href="#" onClick={this.handleClick.bind(this, id)}>
            <img src={imagePath}/></a>
              {lastDroppedItem &&
                <span className="drop-container__image"><img src="app/assets/images/template/star.png"/></span>
              }
        </div>
        {this.displayFeedback()}
      </div>,
    );
  }
}
