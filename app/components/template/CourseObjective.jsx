import React from 'react';
import MediaQuery from 'react-responsive';
import FontAwesome from 'react-fontawesome';

export default class CourseObjective extends React.Component {
  constructor(props) {
    super(props);
  }
 

  render() {
    return (
      <div className="static-page2" >
        <MediaQuery query='(min-device-width: 1024px)'>
        <div className="content">
      		<div className="bg">
      			<div className="intro">
      				<div className="flex-container">
                        <h1 className="intro_head">COURSE OBJECTIVES</h1>
                            <p>By the end of this short course,you will be able to:</p>
                            <div className="icon_text_grp">
                                <span className="check_outer_box"><FontAwesome className="font-awesome-icon" name='check' /></span>
                                <span className="kaizen_text">Define Kaizen</span>
                            </div>
      		        </div>
      			</div>
      		</div>
      	</div>
            </MediaQuery>
        <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
            <div className="content">
      		<div className="bg">
      			<div className="intro">
      				<div className="flex-container">
                        <h1 className="intro_head">COURSE OBJECTIVES</h1>
                            <p>By the end of this short course,you will be able to:</p>
                            <div className="icon_text_grp">
                                <span className="check_outer_box"><FontAwesome className="font-awesome-icon" name='check' /></span>
                                <span className="kaizen_text">Define Kaizen</span>
                            </div>
      		        </div>
      			</div>

      		</div>
      	</div>
            </MediaQuery>
        <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
            <div className="content">
      		<div className="bg">
      			<div className="intro">
      				<div className="flex-container">
                        <h1 className="intro_head">COURSE OBJECTIVES</h1>
                        <div className="container_sm">
                            <p>By the end of this short course,you will be able to:</p>
                            <div className="icon_text_grp">
                                <span className="check_outer_box"><FontAwesome className="font-awesome-icon" name='check' /></span>
                                <span className="kaizen_text">Define Kaizen</span>
                            </div>
                        </div>
      		        </div>
      			</div>

      		</div>
      	</div>
            </MediaQuery>
      </div>
    )
  }
}
