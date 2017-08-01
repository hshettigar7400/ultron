import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="course-logo header_child_width">
            <img src="app/assets/images/template/Tesseract_logo.png" />
        </div>

        <div id="courseTitle" className="course-title title header_child_width">
            <p className="header-title">{this.props.courseTitle}</p>
        </div>

        <div className="header_child_width course-menu-section">
            <div className="header_right_help header_span_inline">
                <span> ? </span>
            </div>
            <div className="header_right_toggle header_span_inline">
                <span>menu tab</span>
            </div>
        </div>
    </div>
    )
  }
}
