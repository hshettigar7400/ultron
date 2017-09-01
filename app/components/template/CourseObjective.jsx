import React from 'react';
import MediaQuery from 'react-responsive';

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
      			<div className="intro white">
      				<div className="flex-container">
                        <h1 className="intro_head"><span className="intr_sub_span">Cou</span>rse Objectives</h1>
                        <div className="box-conatiner-top">
                            <div className="box-top-first">

                            </div>
                            <div className="box-top-second">
                                <p className="box-top-text">
                                    <span>By the end of this short course,</span><br />
                                    <span>You will be able to:</span>
                                </p>
                            </div>
                        </div>
                        
                        <div className="line" id="line1"></div>

                        <div className="box-conatiner-bottom">
                            <div className="box-bottom-first">

                            </div>
                            <div className="box-bottom-second">
                                  <p className="box-top-text">
                                    Define Kaizen
                                </p>  
                            </div>
                        </div>
      		        </div>
      			</div>
      		</div>
      	</div>
            </MediaQuery>
        <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
            <div className="content">
      		<div className="bg">
      			<div className="intro white">
      				<div className="flex-container">
                        <h1 className="intro_head"><span className="intr_sub_span">Cou</span>rse Objectives</h1>
                        <div className="box-conatiner-top">
                            <div className="box-top-first">

                            </div>
                            <div className="box-top-second">
                                <p className="box-top-text">
                                    <span>By the end of this short course,</span><br />
                                    <span>You will be able to:</span>
                                </p>
                            </div>
                        </div>
                        
                        <div className="line" id="line1"></div>

                        <div className="box-conatiner-bottom">
                            <div className="box-bottom-first">

                            </div>
                            <div className="box-bottom-second">
                                  <p className="box-top-text">
                                    Define Kaizen
                                </p>  
                            </div>
                        </div>
      		        </div>
      			</div>

      		</div>
      	</div>
            </MediaQuery>
        <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
            <div className="content">
      		<div className="bg">
      			<div className="intro white">
      				<div className="flex-container">
                        <h1 className="intro_head"><span className="intr_sub_span">Cou</span>rse Objectives</h1>
                        <div className="box-conatiner-top">
                            <div className="box-top-first">

                            </div>
                            <div className="box-top-second">
                                <p className="box-top-text">
                                    <span>By the end of this short course,</span><br />
                                    <span>You will be able to:</span>
                                </p>
                            </div>
                        </div>
                        
                        <div className="line" id="line1"></div>

                        <div className="box-conatiner-bottom">
                            <div className="box-bottom-first">

                            </div>
                            <div className="box-bottom-second">
                                  <p className="box-top-text">
                                    Define Kaizen
                                </p>  
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
