import React from 'react';
import MediaQuery from 'react-responsive';

export default class StaticPage1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="static-page1">
        <MediaQuery query='(min-device-width: 1024px)'>
          <div className="content">
            <div className="bg">
              <div className="intro white">
                <div className="flex-container">
                    <div className="intro_heading">
                      <h1><span className="intr_sub_span">Intr</span>oduction to the Code of Conduct</h1>
                    </div>
                    
                    <div className="intro_pop_up">
                      
                    </div>
                    
                    <div className="intro_sub_heading">
                      <p>Select the envelope to read a message from our CEO.</p>
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
                  <div className="intro_heading">
                      <h1><span className="intr_sub_span">Intr</span>oduction to the Code of Conduct</h1>
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
                    <div className="intro_heading">
                      <h1><span className="intr_sub_span">Intr</span>oduction to the Code of Conduct</h1>
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
