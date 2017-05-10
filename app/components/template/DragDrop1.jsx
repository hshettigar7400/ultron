import React from 'react';

export default class DragDrop1 extends React.Component {
  constructor(props) {
    super(props);
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
                    <span> Can you match the type of examination to its respective description.</span><br/><br/>
                    <span className="instruction_text">
                      <img src="/app/assets/images/template/hand_icon.png"/>
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
                        <td className="quiz"><div className="quiz_box">Are almost never announced in advance to reduce the chances of documents being destroyed.</div></td>
                        <td className="drop">
                          <div className="drop_box"></div>
                        </td>
                        <td className="drag">
                          <div className="drag_box">
                            <button id="btn_01">Sweep Exams</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="quiz">
                          <div className="quiz_box">Are held as SEC would like more information to determine whether additional guidance or regulation is required. </div>
                        </td>
                        <td className="drop">
                          <div className="drop_box"></div>
                        </td>
                        <td className="drag">
                          <div className="drag_box">
                            <button id="btn_01">Cause Exams</button>
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
