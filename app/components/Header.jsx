import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="course-logo">
          <img src="/app/assets/images/ui/course-logo.png" />
        </div>
        <div className="title-holder clearfix">
          <div id="courseTitle" className="course-title title">
            <p>Medical Device Industry Overview</p>
          </div>
        </div>
        <div className="course-progress">
          <span id="course-progress__update"></span>
        </div>
      </div>
    )
  }
}
