import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import MediaQuery from 'react-responsive';

export default class Introduction extends React.Component {
  constructor(props) {
    super(props);
  }

 

  render() {
    return (
      <div className="introduction">
        <MediaQuery query='(min-device-width: 1224px)'>
          <div className="content">
            <div className="bg">
              <div className="intro white">
                <div className="flex-main-content">
                    <h1 className="intro_head"><span className="intr_sub_span">Cou</span>rse introduction</h1>
                    <div className="main-container">
                        <div className="left-side">
                                <img src="../../app/assets/images/template/intro.png" />
                        </div>
                        
                        <div className="right-side">
                            <ul className="intro_sub_heading_list">
                                <li>
                                    Kaizen started in the year 1986.
                                </li>
                                
                                <li>
                                    Kaizen is an art of continuous improvement. It was originally introduced to the west by Masaaki imai in his book Kaizen: The key to Japan’s Competitive success in 1986. In the recent times, Kaizen is organized worldwide as an important pillar of an organization’s long-term competitive strategy.
                                </li>
                                <li>
                                    This course aims to uncover the basics of Kaizen and important insights to implement Kaizen.
                                </li>
                            </ul>
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
                <div className="flex-main-content">
                    <h1 className="intro_head"><span className="intr_sub_span">Cou</span>rse introduction</h1>
                      <div className="main-container">
                        <div className="left-side">
                                <img src="../../app/assets/images/template/intro.png" />
                        </div>
                        
                        <div className="right-side">
                            <ul className="intro_sub_heading_list">
                                <li>
                                    Kaizen started in the year 1986.
                                </li>
                                
                                <li>
                                    Kaizen is an art of continuous improvement. It was originally introduced to the west by Masaaki imai in his book Kaizen: The key to Japan’s Competitive success in 1986. In the recent times, Kaizen is organized worldwide as an important pillar of an organization’s long-term competitive strategy.
                                </li>
                                <li>
                                    This course aims to uncover the basics of Kaizen and important insights to implement Kaizen.
                                </li>
                            </ul>
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
                <div className="flex-main-content">
                    <h1 className="intro_head"><span className="intr_sub_span">Cou</span>rse introduction</h1>
                    <div className="mob_img">
                            <img src="../../app/assets/images/template/intro.png" />
                    </div>

                    <div>
                        <ul className="intro_sub_heading_list">
                            <li>
                                Kaizen started in the year 1986.
                            </li>

                            <li>
                                Kaizen is an art of continuous improvement. It was originally introduced to the west by Masaaki imai in his book Kaizen: The key to Japan’s Competitive success in 1986. In the recent times, Kaizen is organized worldwide as an important pillar of an organization’s long-term competitive strategy.
                            </li>
                            <li>
                                This course aims to uncover the basics of Kaizen and important insights to implement Kaizen.
                            </li>
                        </ul>
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
