import React from 'react';
import MediaQuery from 'react-responsive';

export default class StaticPage6 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="static-page6">
       <MediaQuery query='(min-device-width: 1024px)'>
        <div className="content">
          <div className="bg">
            <div className="intro white">
              <div className="flex-main-content">
                  <h1 className="white intro_head"><span className="intr_sub_span">Les</span>son Summary</h1>
                  <p className="intro_sub_heading_2">In this module, you learned about:</p>
                
                <ul className="intro_sub_heading_list">
                    <li>
                       Code of conduct is about the guidelines that employees need to follow during their tenure in the organization
                    </li>

                    <li>
                        There are various aspects of code including:
                    </li>

                    <ul>
                        <li>
                           Intellectual assets
                        </li>

                        <li>
                            Gifts and entertainment
                        </li>

                        <li>
                            External communication
                        </li>
                        <li>
                            Conflict of interest
                        </li>
                        <li>
                            Media policy
                        </li>
                    </ul>
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
                  <h1 className="white intro_head"><span className="intr_sub_span">Les</span>son Summary</h1>
                  <p className="intro_sub_heading_2">In this module, you learned about:</p>
                
                <ul className="intro_sub_heading_list">
                    <li>
                       Code of conduct is about the guidelines that employees need to follow during their tenure in the organization
                    </li>

                    <li>
                        There are various aspects of code including:
                    </li>

                    <ul>
                        <li>
                           Intellectual assets
                        </li>

                        <li>
                            Gifts and entertainment
                        </li>

                        <li>
                            External communication
                        </li>
                        <li>
                            Conflict of interest
                        </li>
                        <li>
                            Media policy
                        </li>
                    </ul>
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
                  <h1 className="white intro_head"><span className="intr_sub_span">Les</span>son Summary</h1>
                  <p className="intro_sub_heading_2">In this module, you learned about:</p>
                
                <ul className="intro_sub_heading_list">
                    <li>
                       Code of conduct is about the guidelines that employees need to follow during their tenure in the organization
                    </li>

                    <li>
                        There are various aspects of code including:
                    </li>

                    <ul>
                        <li>
                           Intellectual assets
                        </li>

                        <li>
                            Gifts and entertainment
                        </li>

                        <li>
                            External communication
                        </li>
                        <li>
                            Conflict of interest
                        </li>
                        <li>
                            Media policy
                        </li>
                    </ul>
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
