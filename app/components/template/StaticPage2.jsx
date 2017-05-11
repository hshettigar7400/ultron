import React from 'react';

export default class StaticPage2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="static-page2">
        <div className="content">
      		<div className="bg">
      			<div className="intro white">
      				<div className="flex-container">
      					<div className="left-side">
      						<div className="intro_heading">
      							<h1>Course Objectives </h1>
      						</div>

      						<div className="intro_para">
      							<span>In this course, you will learn about:</span>
      						</div>

      						<div className="intro_list">
      							<ul>
      								<li>Structure of the US Securities and Exchange Commission (SEC)</li>
      								<li>Operations of SEC</li>
      								<li>Initiatives of National Examination program for SEC registered investment Advisers</li>
      							</ul>
      						</div>
      						<div className="btn">
      							<span className="instruction_img">
                      <img src="/app/assets/images/template/hand_icon.png" className ="middle_align"/>
                      <span className="instruction_text">Click the button to know more.</span>
                    </span>
                    <span>
                      <button id="btn_01">Benefits of this Course</button>
                    </span>
                  </div>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>
      </div>
    )
  }
}
