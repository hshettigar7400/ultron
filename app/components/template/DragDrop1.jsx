import React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import MultiBackend, { TouchTransition, Preview } from 'react-dnd-multi-backend';
import DropContainer from './common/DropContainer';
import DragContainer from './common/DragContainer';

const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend
    },
    {
      backend: TouchBackend({enableMouseEvents: true}), // Note that you can call your backends with options
      preview: true,
      transition: TouchTransition
    }
  ]
};

class DragDrop1 extends React.Component {
  constructor(props) {
    super(props);
  }

  generatePreview(type, item, style) {
    Object.assign(style, {backgroundColor: '#fff', color: '#000'});
    return <div className="drag-container">{item.name}</div>;
  }

  render() {
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
                    <table>
                      <tbody>
                        <tr>
                          <td className="quiz">
                            <div className="quiz_box">Are almost never announced in advance to reduce the chances of documents being destroyed.</div>
                          </td>
                          <td className="drop">
                            <div className="drop_box">
                            <DropContainer key={1}/>
                            </div>
                          </td>
                          <td className="drag">
                            <div className="drag_box">
                              <DragContainer name="Sweep Exams" key={1}/>
                              <Preview generator={this.generatePreview} />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="quiz">
                            <div className="quiz_box">Are held as SEC would like more information to determine whether additional guidance or regulation is required.
                            </div>
                          </td>
                          <td className="drop">
                            <div className="drop_box">
                                <DropContainer key={2}/>
                            </div>
                          </td>
                          <td className="drag">
                            <div className="drag_box">
                              <DragContainer name="Cause Exams" key={2}/>
                              <Preview generator={this.generatePreview} />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default DragDropContext(MultiBackend(HTML5toTouch))(DragDrop1);
