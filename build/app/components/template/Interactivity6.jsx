import React from 'react';
import FontAwesome from 'react-fontawesome';
import MediaQuery from 'react-responsive';

export default class Interactivity6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
      currentPopup: 0
    }
  }

  getPopupContent() {
    var currentPopup = this.state.currentPopup;
    switch (parseInt(currentPopup)) {
      case 1:
        return (
          <div className="flex-container-inner">
            <ul className="popup-container-text">
                <li>
                    Employees can face conflict of interest situations when they are involved in multiple interests, financial or otherwise. The proximity to decision making center could possibly corrupt the motivation or decision-making of that individual
                </li>
            </ul>
          </div>

        );
        break;
      case 2:
        return (
          <div className="flex-container-inner">
            <ul className="popup-container-text">
                <li>
                    Employees need to contact the media center or the HR before speaking to the media
                </li>
                
                <li>
                   Employees in general are refrained from speaking to media
                </li>
                <li>
                    To contribute articles to print media, employees need to take written permission from the concerned authority
                </li>
            </ul>
          </div>
        );
        break;
       
    }
  }

  displayPopup() {
    return (
      <div>
        {this.state.isPopupOpen && <div className="popup-container">
          {this.getPopupContent()}
        </div>}
      </div>
    )
  }

  openPopup(currentPopup) {
    this.setState({isPopupOpen: true, currentPopup: currentPopup})
      var activeNode = document.querySelectorAll(".active");
      if (activeNode.length > 0)
      activeNode[0].classList.remove('active');
      
      var currentNode = document.getElementById("btn_0"+currentPopup)
      currentNode.classList.add('active');
  }


  render() {
    return (
      <div className="interactivity6">
        <MediaQuery query='(min-device-width: 1224px)'>
          <div className="content">
            <div className="bg">
              <div className="intro white">
                <div className="flex-main-content">
                    <h1 className="intro_head"><span className="intr_sub_span">Som</span>e Additional Pointers</h1>
                      <p className="intro_sub_heading_2">
                            Click each tab to learn more.
                      </p>
                      <div className="buttons">
                            <div className="intro_btn_benefit tab_btn_rt" id="btn_01" onClick={this.openPopup.bind(this, 1)}>
                                Conflicts of interest
                            </div>

                            <div className="intro_btn_benefit" id="btn_02" onClick={this.openPopup.bind(this, 2)} >
                                Media Policy
                            </div>
                      </div>    
                         
                      <div>
                         {this.displayPopup()}
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
                    <h1 className="intro_head"><span className="intr_sub_span">Som</span>e Additional Pointers</h1>
                      <p className="intro_sub_heading_2">
                            Click each tab to learn more.
                      </p>
                      <div className="buttons">
                            <div className="intro_btn_benefit tab_btn_rt" id="btn_01" onClick={this.openPopup.bind(this, 1)}>
                                Conflicts of interest
                            </div>

                            <div className="intro_btn_benefit" id="btn_02" onClick={this.openPopup.bind(this, 2)} >
                                Media Policy
                            </div>
                      </div>    
                         
                      <div>
                         {this.displayPopup()}
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
                    <h1 className="intro_head">Some <br/><span className="intr_sub_span">Add</span>itional Pointers</h1>
                      <p className="intro_sub_heading_2">
                            Click each tab to learn more.
                      </p>
                      <div className="buttons">
                            <div className="intro_btn_benefit tab_btn_rt" id="btn_01" onClick={this.openPopup.bind(this, 1)}>
                                Conflicts of interest
                            </div>

                            <div className="intro_btn_benefit" id="btn_02" onClick={this.openPopup.bind(this, 2)} >
                                Media Policy
                            </div>
                      </div>    
                         
                      <div>
                         {this.displayPopup()}
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
