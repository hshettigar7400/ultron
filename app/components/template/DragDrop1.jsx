import React from 'react';
import update from 'react/lib/update';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import MultiBackend, {TouchTransition, Preview} from 'react-dnd-multi-backend';
import DropContainer from './common/DropContainer';
import DragContainer from './common/DragContainer';
import ItemTypes from './common/ItemTypes';

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

class DragDrop1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragbox: [
        { accepts: [ItemTypes.SWEEPEXAMS, ItemTypes.CAUSEEXAMS], lastDroppedItem: null },
        { accepts: [ItemTypes.SWEEPEXAMS, ItemTypes.CAUSEEXAMS], lastDroppedItem: null },
      ],
      dropbox: [
        { name: 'Sweep Exams', type: ItemTypes.SWEEPEXAMS },
        { name: 'Cause Exams', type: ItemTypes.CAUSEEXAMS },
      ],
      droppedBoxNames: [],
      answer: [1,2],
      showFeedback: false
    };
  }

  generatePreview(type, item, style) {
   Object.assign(style, {backgroundColor: item.color, width: 'auto', height: '60px', padding: '0 15px'});
   return <div className="drag-container" style={style}>{item.name}</div>;
  }

  handleDrop(index, item) {
    const { name } = item;
    this.setState(update(this.state, {
      dragbox: {
        [index]: {
          lastDroppedItem: {
            $set: item,
          },
        },
      },
      droppedBoxNames: name ? {
        $push: [name],
      } : {},
    }));
  }

  isDropped(boxName) {
    if (this.state.droppedBoxNames.length === 2 ) {

    }
    return this.state.droppedBoxNames.indexOf(boxName) > -1;
  }

  displayFeedback() {
    return (
      <div className="feedback-container">
        <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
          Correct
      </div>
    )
  }

  render() {
    const { dragbox, dropbox } = this.state;
    return (
      <div className="dragdrop1">
        <div className="content">
          <div className="bg">
            <div className="container">
              <div className="summary">
                <div className="summary_heading">
                  <h1 className="white">Activity</h1>
                  <div className="summary_list white">
                    <span>
                      Can you match the type of examination to its respective description.</span><br/><br/>
                    <span className="instruction_text">
                      <img src="app/assets/images/template/hand_icon.png"/>
                      <span>Drag the exam type to its respective description and click Submit.</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="drag_drop white">
                <div className="activity">
                  <div className="flex_container">
                    <div className="quiz">
                      <div className="quiz_box">Are almost never announced in advance to reduce the chances of documents being destroyed.</div>
                      <div className="drop">
                        <div className="drop_box">
                          <DropContainer
                            accepts={[ItemTypes.SWEEPEXAMS, ItemTypes.CAUSEEXAMS]}
                            lastDroppedItem={dragbox[0].lastDroppedItem}
                            onDrop={item => this.handleDrop(0, item)}
                            key={0}
                          />
                        </div>
                      </div>
                      <div className="drag">
                        <div className="drag_box">
                          <DragContainer
                            name="Sweep Exams"
                            type={ItemTypes.SWEEPEXAMS}
                            isDropped={this.isDropped("Sweep Exams")}
                            key={1}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex_container">
                    <div className="quiz">
                      <div className="quiz_box">Are held as SEC would like more information to determine whether additional guidance or regulation is required.</div>
                      <div className="drop">
                        <div className="drop_box">
                          <DropContainer
                            accepts={[ItemTypes.SWEEPEXAMS, ItemTypes.CAUSEEXAMS]}
                            lastDroppedItem={dragbox[1].lastDroppedItem}
                            onDrop={item => this.handleDrop(1, item)}
                            key={1}
                          />
                        </div>
                      </div>
                      <div className="drag">
                        <div className="drag_box">
                          <DragContainer
                            name="Cause Exams"
                            type={ItemTypes.CAUSEEXAMS}
                            isDropped={this.isDropped("Cause Exams")}
                            key={2}
                          />
                        </div>
                          <Preview generator={this.generatePreview}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.showFeedback && this.displayFeedback()}
      </div>
    )
  }
}

export default DragDropContext(MultiBackend(HTML5toTouch))(DragDrop1);
