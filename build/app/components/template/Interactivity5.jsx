import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import MediaQuery from 'react-responsive';

export default class Interactivity5 extends React.Component {
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
            <div className="popup_icon_head">
                <FontAwesome className="popup_icon" name='info-circle' /><h1 className="popup-container-heading"><span className="intr_sub_span">Intellect</span>ual and Information Assets</h1>    
            </div>
            
            <ul className="popup-container-text">
                <li>
                    Intellectual Property
                </li>
                
                <li>
                    Use of THE COMPANY Information Technology Assets
                </li>
                <li>
                    Accurate Records and Records Retention
                </li>
            </ul>
          </div>

        );
        break;
      case 2:
        return (
          <div className="flex-container-inner">
                <div className="popup_icon_head">
                    <FontAwesome className="popup_icon" name='gift' /><h1 className="popup-container-heading"><span className="intr_sub_span">Gif</span>ts and Entertainment</h1>    
                </div>
            
            <ul className="popup-container-text">
                <li>
                    Circumstances when any gift or entertainment cannot be accepted
                </li>
                
                <li>
                    Guidelines for offering gifts or entertainment
                </li>
                <li>
                    Guidelines and procedures for reporting receipt of gifts
                </li>
            </ul>
          </div>
        );
        break;
        case 3:
        return (
          <div className="flex-container-inner">
                <h1 className="popup-container-heading"><span className="intr_sub_span">Exter</span>nal Communication</h1>
                <div className="popup_icon_head">
                    <FontAwesome className="popup_icon" name='comments-o' /><h1 className="popup-container-heading"><span className="intr_sub_span">Exter</span>nal Communication</h1>   
                </div>
                <ul className="popup-container-text">
                    <li>
                        Agents / Consultants / Third Parties
                    </li>

                    <li>
                        Communicating with Regulators and Others
                    </li>
                    <li>
                        Political Activities
                    </li>
                    <li>
                        Privacy/ Confidentiality
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
          <span className="close-btn icon-close" onClick={this.closePopup.bind(this)}></span>
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

  closePopup() {
    this.setState({isPopupOpen: false})
  }

  render() {
    return (
      <div className="interactivity5">
        <MediaQuery query='(min-device-width: 1224px)'>
          <div className="content">
            <div className="bg">
              <div className="intro white">
                <div className="flex-main-content">
                    <h1 className="intro_head"><span className="intr_sub_span">Cod</span>e of Conduct aspects</h1>
                      <p className="intro_sub_heading_2">
                            The various aspects are:
                      </p>
                      <div>
                        <div className="left-side">
                            <div className="buttons">
                                <div className="intro_btn_benefit"  id="btn_01" onClick={this.openPopup.bind(this, 1)}>
                                    <span className="btn_text_cntr">Intellectual and Information Assets</span><FontAwesome className="btn_icon_rt" name='info-circle' />
                                </div>

                                <div className="intro_grp_benefit intro_btn_benefit" id="btn_02" onClick={this.openPopup.bind(this, 2)} >
                                    <span className="btn_text_cntr">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gifts and Entertainment</span><FontAwesome className="btn_icon_rt" name='gift' />
                                </div>

                                <div className="intro_grp_benefit intro_btn_benefit" id="btn_03" onClick={this.openPopup.bind(this, 3)}>
                                    <span className="btn_text_cntr">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;External Communication</span><FontAwesome className="btn_icon_rt" name='comments-o' />
                                </div>
                              </div>    
                          </div>

                          <div className="right-side">
                            {this.displayPopup()}
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
                    <h1 className="intro_head"><span className="intr_sub_span">Cod</span>e of Conduct aspects</h1>
                      <p className="intro_sub_heading_2">
                            The various aspects are:
                      </p>
                      <div className="tab_popup_container">
                        <div className="left-side">
                            <div className="buttons">
                                <div className="intro_btn_benefit" id="btn_01" onClick={this.openPopup.bind(this, 1)}>
                                    <span className="btn_text_cntr">Intellectual and Information Assets</span><FontAwesome className="btn_icon_rt" name='info-circle' />
                                </div>

                                <div className="intro_grp_benefit intro_btn_benefit" id="btn_02" onClick={this.openPopup.bind(this, 2)} >
                                    <span className="btn_text_cntr">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gifts and Entertainment</span><FontAwesome className="btn_icon_rt" name='gift' />
                                </div>

                                <div className="intro_grp_benefit intro_btn_benefit" id="btn_03" onClick={this.openPopup.bind(this, 3)}>
                                    <span className="btn_text_cntr">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;External Communication</span><FontAwesome className="btn_icon_rt" name='comments-o' />
                                </div>
                              </div>    
                          </div>

                          <div className="right-side">
                            {this.displayPopup()}
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
                    <h1 className="intro_head">Code of Conduct <br/><span className="intr_sub_span">asp</span>ects</h1>
                      <p className="intro_sub_heading_2">
                            The various aspects are:
                      </p>
                    
                      <div className="tab_popup_container">
                            <div className="intro_btn_benefit" id="btn_01" onClick={this.openPopup.bind(this, 1)}>
                                <span className="btn_text_cntr">Intellectual and Information Assets</span><FontAwesome className="btn_icon_rt" name='info-circle' />
                            </div>

                            <div className="intro_grp_benefit intro_btn_benefit" id="btn_02" onClick={this.openPopup.bind(this, 2)} >
                                <span className="btn_text_cntr">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gifts and Entertainment</span><FontAwesome className="btn_icon_rt" name='gift' />
                            </div>

                            <div className="intro_grp_benefit intro_btn_benefit" id="btn_03" onClick={this.openPopup.bind(this, 3)}>
                                <span className="btn_text_cntr">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;External Communication</span><FontAwesome className="btn_icon_rt" name='comments-o' />
                            </div>


                            <div>
                                {
                                    this.displayPopup()
                                }
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
