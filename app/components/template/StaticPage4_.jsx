import React from 'react';
import MediaQuery from 'react-responsive';

export default class StaticPage4 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="static-page4">
       <MediaQuery query='(min-device-width: 1024px)'>
        <div className="content">
          <div className="bg">
            <div className="intro white">
              <div className="flex-main-content">
                <h1 className="white intro_head"><span className="intr_sub_span">Nee</span>d for Code Of Conduct</h1>
                <p className="intro_sub_heading_2">
                    Code of conduct is important to:
                </p>

                <ul className="intro_sub_heading_list">
                    <li>
                        Create healthy enviroment
                    </li>

                    <li>
                        Maintain safe working practices
                    </li>

                    <li>
                        Aware of one's responsibilities and duties
                    </li>
                    
                    <li>
                        Achieve your goals
                    </li>
                    
                    <li>
                        Increase organization's productivity
                    </li>
                </ul>
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
                <h1 className="white intro_head"><span className="intr_sub_span">Nee</span>d for Code Of Conduct</h1>
                <p className="intro_sub_heading_2">
                    Code of conduct is important to:
                </p>

                <ul className="intro_sub_heading_list">
                    <li>
                        Create healthy enviroment
                    </li>

                    <li>
                        Maintain safe working practices
                    </li>

                    <li>
                        Aware of one's responsibilities and duties
                    </li>
                    
                    <li>
                        Achieve your goals
                    </li>
                    
                    <li>
                        Increase organization's productivity
                    </li>
                </ul>
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
                <h1 className="white intro_head">Need for<br/><span className="intr_sub_span">Cod</span>e Of Conduct</h1>
                <p className="intro_sub_heading_2">
                    Code of conduct is important to:
                </p>

                <ul className="intro_sub_heading_list">
                    <li>
                        Create healthy enviroment
                    </li>

                    <li>
                        Maintain safe working practices
                    </li>

                    <li>
                        Aware of one's responsibilities and duties
                    </li>
                    
                    <li>
                        Achieve your goals
                    </li>
                    
                    <li>
                        Increase organization's productivity
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </MediaQuery>
      </div>
    )
  }
}
