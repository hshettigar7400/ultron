import React from 'react';
import update from 'react/lib/update';
import FontAwesome from 'react-fontawesome';
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

    if (this.state.droppedBoxNames.length === 2) {
      this.setState(update(this.state, {
        showFeedback: {$set: true},
      }));
    }
  }

  closeTab() {
    this.setState(update(this.state, {
      showFeedback: {$set: false},
    }));
  }

  isDropped(boxName) {
    return this.state.droppedBoxNames.indexOf(boxName) > -1;
  }

  displayFeedback() {
    return (
      <div className="feedback-container">
          That's Correct
      </div>
    )
  }

  render() {
    const { dragbox, dropbox } = this.state;
    return (
      <div className="dragdrop2">
        <div className="content">
          <div className="bg">
            <div className="container">
                <h1 className="white intro_head"><span className="intr_sub_span">Acti</span>vity <span><FontAwesome name='question-circle-o' className="question-circle"/></span></h1>   
                  <p className="intro_sub_heading">
                    Can you match the type of code to its respective description.
                  </p>

                  <p className="intro_sub_heading_2">
                        Drag the code to its respective description and click Submit.
                  </p>
                  <div className="drag_drop white">
                      <div className="flex_container">
                           <div className="quiz-left">
                                <div className="drag-drop-container">
                                      <div className="drag">
                                        <div className="drag_box">
                                          <DragContainer
                                            name="Conflict Of Interest"
                                            type={ItemTypes.SWEEPEXAMS}
                                            isDropped={this.isDropped("Sweep Exams")}
                                            key={1}
                                          />
                                        </div>
                                      </div>

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
                                </div>

                               <div className="drag-drop-container">
                                    <div className="drag">
                                        <div className="drag_box">
                                          <DragContainer
                                            name="Media Policy"
                                            type={ItemTypes.CAUSEEXAMS}
                                            isDropped={this.isDropped("Cause Exams")}
                                            key={2}
                                          />
                                        </div>
                                        <Preview generator={this.generatePreview}/>
                                    </div>

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
                               </div> 
                           </div>

                           <div className="quiz-right">
                                <div className="quiz_box_one quiz_box">Regarding contribution of articles or speaking to press</div>

                                <div className="quiz_box_two quiz_box">When an individual holds multiple positions that can influence decision making </div> 
                           </div>

                      </div>

                      {this.state.showFeedback && this.displayFeedback()}
                  </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default DragDropContext(MultiBackend(HTML5toTouch))(DragDrop1);
