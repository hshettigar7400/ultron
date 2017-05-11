import React from 'react';
import MediaQuery from 'react-responsive';

export default class StaticPage3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="static-page3">
        <div className="content">
        <div className="bg">
         <MediaQuery query='(min-device-width: 1224px)'>

                <div className="intro white">
                  <div className="flex-container">
                    <div className="left-side">
                      <div className="intro_heading">
                        <h1>Our Goal</h1>
                      </div>
                      <div className="intro_para">
                        <span>Our goal is to help you be better prepared by knowing what to expect, which will make a positive impression with the SEC, and keep you focused on your work.</span>
                      </div>
                    </div>
                  </div>
                </div>
          </MediaQuery>
          <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
                <div className="intro white">
                  <div className="flex-container">
                    <div className="left-side">
                      <div className="intro_heading">
                        <h1>Our Goal</h1>
                      </div>
                      <div className="intro_para">
                        <span>Our goal is to help you be better prepared by knowing what to expect, which will make a positive impression with the SEC, and keep you focused on your work.</span>
                      </div>
                    </div>
                  </div>
                </div>
          </MediaQuery>
          <MediaQuery query='(min-device-width: 320px) and (max-device-width: 736px)'>
                <div className="intro white">
                  <div className="flex-container">
                    <div className="left-side">
                      <div className="intro_heading">
                        <h1>Our Goal</h1>
                      </div>
                      <div className="intro_para">
                        <span>Our goal is to help you be better prepared by knowing what to expect, which will make a positive impression with the SEC, and keep you focused on your work.</span>
                      </div>
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
