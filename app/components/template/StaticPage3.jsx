import React from 'react';
import MediaQuery from 'react-responsive';

export default class StaticPage3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="static-page3">
       <MediaQuery query='(min-device-width: 1024px)'>
        <div className="content">
          <div className="bg">
            <div className="intro white">
              <div className="flex-container">
                    <h1><span className="intr_sub_span">Our</span> Goal</h1>
                  <div className="intro_para">
                    <span>Our goal is to help you be better prepared by knowing what to expect, which will keep you focused on your work. </span>
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
                    <h1><span className="intr_sub_span">Our</span> Goal</h1>
                  <div className="intro_para">
                    <span>Our goal is to help you be better prepared by knowing what to expect, which will keep you focused on your work. </span>
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
                    <h1><span className="intr_sub_span">Our</span> Goal</h1>
                  <div className="intro_para">
                    <span>Our goal is to help you be better prepared by knowing what to expect, which will keep you focused on your work. </span>
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
