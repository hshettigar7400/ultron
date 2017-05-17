import React from 'react';
import MediaQuery from 'react-responsive';

export default class StaticPage3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="static-page5">
        <div className="content">
        <div className="bg">
         <MediaQuery query='(min-device-width: 1224px)'>
        <div className="container">
        <div className="summary">
        <div className="summary_heading">
        <h1 className="white">Lesson Summary</h1></div>

        <div className="summary_list white">
        <span> In this module you learned about:</span>
        <ul>
        <li>The National Examination Program ("NEP"), generally follows a risk-based approach in the selection of examination candidates.</li>
        <li className="line_height">There are three kinds of examinations:</li>
        <ul>
        <li>Traditional Examination </li>
        <li>Dual registrant exams </li>
        <li>Presence Exam</li>
        </ul>
        </ul>
        </div>
        </div>
        </div>
        </MediaQuery>

        <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
        <div className="container">
        <div className="summary">
        <div className="summary_heading">
        <h1 className="white">Lesson Summary</h1></div>

        <div className="summary_list white">
        <span> In this module you learned about:</span>
        <ul>
        <li>The National Examination Program ("NEP"), generally follows a risk-based approach in the selection of examination candidates.</li>
        <li className="line_height">There are three kinds of examinations:</li>
        <ul>
        <li>Traditional Examination </li>
        <li>Dual registrant exams </li>
        <li>Presence Exam</li>
        </ul>
        </ul>
        </div>
        </div>
        </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
        <div className="container">
        <div className="summary">
        <div className="summary_heading">
        <h1 className="white">Lesson Summary</h1></div>

        <div className="summary_list white">
        <span> In this module you learned about:</span>
        <ul className="uls_leftside">
        <li>The National Examination Program ("NEP"), generally follows a risk-based approach in the selection of examination candidates.</li>
        <li className="line_height">There are three kinds of examinations:</li>
        <ul>
        <li>Traditional Examination </li>
        <li>Dual registrant exams </li>
        <li>Presence Exam</li>
        </ul>
        </ul>
        </div>
        </div>
        </div>
        </MediaQuery>

</div>
</div>
      </div>
    )
  }
}
