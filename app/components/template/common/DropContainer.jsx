import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import {
    DropTarget
} from 'react-dnd';

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
        const {
            accepts,
            isOver,
            canDrop,
            connectDropTarget,
            lastDroppedItem
        } = this.props;
        const isActive = canDrop && isOver;
        return connectDropTarget( <
            div className = "drop-container" > {
                lastDroppedItem &&
                <
                div className = "drag-container" > {
                    lastDroppedItem.name
                } < /div>
            } <
            /div>,
        );
    }
}
