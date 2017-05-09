import React from 'react';

export default class StaticPage3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="static-page3">
        <div className="content">
          <div className="bg">
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
          </div>
        </div>
      </div>
    )
  }
}
