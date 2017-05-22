import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';

const boxTarget = {
  drop() {
    return { name: 'DropContainer' };
  },
};

@DropTarget(ItemTypes.DRAGCONTAINER, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
export default class DropContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;


    return connectDropTarget(
      <div className="drop-container">
      </div>,
    );
  }
}
