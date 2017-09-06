import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="course-logo">
            <img src="app/assets/images/template/logo_tafe.png" />
        </div>

        <div id="courseTitle" className="course-title">
            <p className="header-title">{this.props.courseTitle}</p>
        </div>

        <div className="course-menu-section">
            <p>
                <span className="question">  
                    ?
                </span>
                <span className="course-menu-icon">
                    <FontAwesome name='align-right' />
                </span>
            </p>
        </div>
    </div>
    )
  }
}
