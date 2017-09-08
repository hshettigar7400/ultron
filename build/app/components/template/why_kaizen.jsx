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
            <div className="intro">
              <div className="flex-container">
                    <h1 className="intro_head">Why Kaizen</h1>
                    <div className="fade-in">
                        <ul className="">
                            <li>
                                Focussed improvement effort results in quantum improvement in focus areas. To enhance all round performance thousands of small improvements would have been made throughout the system
                            </li>
                            <li>
                                Continuous small improvements by everybody in all areas of operation is the most powerful way to reduce variations and defects  that are caused by common causes
                            </li>
                        </ul>
                        <div>
                            <img className ="img_kaizen" src="app/assets/images/template/scrn4_img.png" draggable="false"/>
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
            <div className="intro ">
              <div className="flex-container">
                  <h1 className="intro_head">Why Kaizen</h1>
                  <div className="fade-in">
                  <ul className="">
                        <li>
                            Focussed improvement effort results in quantum improvement in focus areas. To enhance all round performance thousands of small improvements would have been made throughout the system
                        </li>
                        <li>
                            Continuous small improvements by everybody in all areas of operation is the most powerful way to reduce variations and defects  that are caused by common causes
                        </li>
                    </ul>
                    <div>
                        <img className ="img_kaizen" src="app/assets/images/template/scrn4_img.png" draggable="false"/>
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
            <div className="intro">
              <div className="flex-container">
                  <h1 className="intro_head">Why Kaizen</h1>
                  <div className="fade-in">
                  <ul className="">
                        <li>
                            Focussed improvement effort results in quantum improvement in focus areas. To enhance all round performance thousands of small improvements would have been made throughout the system
                        </li>
                        <li>
                            Continuous small improvements by everybody in all areas of operation is the most powerful way to reduce variations and defects  that are caused by common causes
                        </li>
                    </ul>
                    <div>
                        <img className ="img_kaizen" src="app/assets/images/template/scrn4_img_sm.png" draggable="false"/>
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
