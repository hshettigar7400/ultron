import React from 'react';
import MediaQuery from 'react-responsive';

export default class StaticPage1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="static-page1">
        <MediaQuery query='(min-device-width: 1224px)'>
          <div className="content">
            <div className="bg">
              <div className="intro white">
                <div className="flex-container">
                  <div className="left-side">
                    <div className="intro_heading">
                      <h1>Introduction to SEC </h1>
                    </div>
                    <div className="intro_para">
                      <p>As an investment adviser, you need to be aware of all the rules and laws pertaining to the United States securities regulation. </p>
                      <span>Securities and Exchange Commission (Sec):</span>
                    </div>
                    <div className="intro_list">
                      <ul>
                        <li>Makes the rules</li>
                        <li>Enforces policy</li>
                        <li>Oversees the markets</li>
                      </ul>
                    </div>
                  </div>
                  <div className="right-side">
                    <img src="/app/assets/images/template/image1.jpg" /></div>
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
                  <div className="left-side">
                    <div className="intro_heading">
                      <h1>Introduction to SEC </h1>
                    </div>
                    <div className="intro_para">
                      <p>As an investment adviser, you need to be aware of all the rules and laws pertaining to the United States securities regulation. </p>
                      <span>Securities and Exchange Commission (Sec):</span>
                    </div>
                    <div className="intro_list">
                      <ul>
                        <li>Makes the rules</li>
                        <li>Enforces policy</li>
                        <li>Oversees the markets</li>
                      </ul>
                    </div>
                  </div>
                  <div className="right-side">
                    <img src="/app/assets/images/template/image1.jpg" /></div>
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
                  <div className="left-side">
                    <div className="intro_heading">
                      <h1>Introduction to SEC </h1>
                    </div>
                    <div className="intro_para">
                      <p>As an investment adviser, you need to be aware of all the rules and laws pertaining to the United States securities regulation. </p>
                      <span>Securities and Exchange Commission (Sec):</span>
                    </div>
                    <div className="intro_list">
                      <ul>
                        <li>Makes the rules</li>
                        <li>Enforces policy</li>
                        <li>Oversees the markets</li>
                      </ul>
                    </div>
                  </div>
                  <div className="right-side">
                    <img src="/app/assets/images/template/image1.jpg" /></div>
                  </div>
                </div>
              </div>
            </div>
        </MediaQuery>
      </div>
        )
      }
    }
