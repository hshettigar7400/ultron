import React from 'react';
import MediaQuery from 'react-responsive';

export default class StaticPage5 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="static-page5">
       <MediaQuery query='(min-device-width: 1024px)'>
        <div className="content">
          <div className="bg">
            <div className="intro white">
              <div className="flex-main-content">
                <h1 className="white intro_head"><span className="intr_sub_span">Gen</span>eral Guidelines</h1>
                
                <ul className="intro_sub_heading_list">
                    <li>
                        Code of Conduct sets forth the policies with which each of us must comply.
                    </li>

                    <li>
                        Additionally, it is important that all of us comply with  all applicable laws and regulations that govern us.
                    </li>

                    <li>
                        The Code will help all employees understand their responsibilities and obligations, and provide guidance when faced with an ethical dilemma or conflict of interest at work.
                    </li>
                    
                    <li>
                        THE COMPANY is concerned not only with results, but also with how those results are achieved.
                    </li>
                    
                    <li>
                        THE COMPANY will never accept efforts or activities to achieve results through illegal or unethical dealings
                    </li>
                    
                    <li>
                        Any violation of this Code may result in disciplinary action, including termination from employment.
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
                <h1 className="white intro_head"><span className="intr_sub_span">Gen</span>eral Guidelines</h1>
                
                <ul className="intro_sub_heading_list">
                    <li>
                        Code of Conduct sets forth the policies with which each of us must comply.
                    </li>

                    <li>
                        Additionally, it is important that all of us comply with  all applicable laws and regulations that govern us.
                    </li>

                    <li>
                        The Code will help all employees understand their responsibilities and obligations, and provide guidance when faced with an ethical dilemma or conflict of interest at work.
                    </li>
                    
                    <li>
                        THE COMPANY is concerned not only with results, but also with how those results are achieved.
                    </li>
                    
                    <li>
                        THE COMPANY will never accept efforts or activities to achieve results through illegal or unethical dealings
                    </li>
                    
                    <li>
                        Any violation of this Code may result in disciplinary action, including termination from employment.
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
                <h1 className="white intro_head"><span className="intr_sub_span">Gen</span>eral Guidelines</h1>
                <ul className="intro_sub_heading_list">
                    <li>
                        Code of Conduct sets forth the policies with which each of us must comply.
                    </li>

                    <li>
                        Additionally, it is important that all of us comply with  all applicable laws and regulations that govern us.
                    </li>

                    <li>
                        The Code will help all employees understand their responsibilities and obligations, and provide guidance when faced with an ethical dilemma or conflict of interest at work.
                    </li>
                    
                    <li>
                        THE COMPANY is concerned not only with results, but also with how those results are achieved.
                    </li>
                    
                    <li>
                        THE COMPANY will never accept efforts or activities to achieve results through illegal or unethical dealings
                    </li>
                    
                    <li>
                        Any violation of this Code may result in disciplinary action, including termination from employment.
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
