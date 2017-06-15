import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

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
  }

  render() {
    const { accepts, isOver, imagePath, canDrop, connectDropTarget, lastDroppedItem } = this.props;
    const isActive = canDrop && isOver;
    return connectDropTarget(

      <div className="drop-container">
        <div className="box1">
          <a href="#">
            <img src={imagePath}/></a>
              {lastDroppedItem &&
                <span className="drop-container__image"><img src="app/assets/images/template/star.png"/></span>
              }
        </div>
      </div>,
    );
  }
}
