import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
};

const dragSource = {
  beginDrag(props) {
    console.log('tees');
    props.closePopup1();
    return {
      name: props.name,
    };
  },
};

@DragSource(props => props.type, dragSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
}))
export default class DragContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

    const { connectDragPreview } = this.props;
    const img = new Image();
    img.src = 'app/assets/images/template/star.png';
    img.onload = () => connectDragPreview(img);
  }

  render() {
    const { name, isDropped, isDragging, connectDragSource } = this.props;
    return (
      connectDragSource(
        <div onMouseDown={this.props.closePopup1} className={(this.props.isDisable) ? "drag-image__container disable-star" : "drag-image__container enable-star"}>
          <img src="app/assets/images/template/star.png" />
        </div>,
      )
    );
  }
}
