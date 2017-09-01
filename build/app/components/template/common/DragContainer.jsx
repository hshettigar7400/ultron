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
    return {
      name: props.name,
    };
  },
};

@DragSource(props => props.type, dragSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export default class DragContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, isDropped, isDragging, connectDragSource } = this.props;
    return (
      connectDragSource(
        <div className={isDropped?"drag-container disable-drag" : "drag-container"}>
          {isDropped ?
          <span>{name}</span> :
          name
          }
        </div>,
      )
    );
  }
}
