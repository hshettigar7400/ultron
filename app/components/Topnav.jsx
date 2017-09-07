import React from 'react';
import * as utils from './Utils';
import FontAwesome from 'react-fontawesome';

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isiPad: utils.isMobile
    }
  }

  getDoubleDigit(num) {
    return (num > 9)
      ? num
      : ('0' + num);
  }

  render() {
    return (
      <div className="header-nav">
            <div className="button-container">
                <div className="button-box">
                  <a aria-disabled="false" aria-label="menu" aria-pressed="false" href="#" onClick={this.props.onMenuClick} role="button">
                    <FontAwesome name='volume-up' />
                  </a>
                </div>
                
                  <div className="button-box">
                  <a aria-disabled="false" aria-label="menu" aria-pressed="false" href="#" onClick={this.props.onMenuClick} role="button">
                    <span className="bar_pause">||</span>
                  </a>
                </div>
                
                <div className="button-box">
                  <a aria-disabled="false" aria-label="playPause" aria-pressed="false"
                    className={this.props.isPlaying ? "" : "selected"} onClick={this.props.onPlayPause.bind(null, this)} role="button">
                    <span className="icon-playPause"></span>
                  </a>
                </div>
                
                <div className="button-box">
                  <a aria-disabled="false" aria-label="back" aria-pressed="false" className={(this.props.currentPageNumber !== 1)
                    ? "tabindex"
                    : "tabindex disabled"} href="#" onClick={this.props.onLoadPrev.bind(null, this)} role="button">
                    <FontAwesome name='angle-left' />
                  </a>
                </div>
                
                <div className="button-box white">  
                      <span className="page-number ">{this.getDoubleDigit(this.props.currentPageNumber)}</span>
                      <span className="page-separator "> / </span>
                      <span className="total-pages ">{this.getDoubleDigit(this.props.totalPages)}</span>
                </div>

                <div className="button-box">
                  <a aria-disabled="false" aria-label="next" aria-pressed="false" className={(this.props.currentPageNumber !== this.props.totalPages)
                    ? "tabindex"
                    : "tabindex disabled"} href="#" onClick={this.props.onLoadNext.bind(null, this)} role="button">
                    <FontAwesome name='angle-right' />
                  </a>
                </div>


                <div className="button-box">
                    <a aria-disabled="false" aria-label="resources" aria-pressed="false" href="#" role="button" >
                      <FontAwesome name='file-text-o' />
                    </a>
                </div>

                <div className="button-box">
                  <a aria-disabled="false" aria-label="menu" aria-pressed="false" href="#" onClick={this.props.onMenuClick} role="button">
                    <span className="icon-menu"></span>
                  </a>
                </div>
            </div>
      </div>
    )
  }
}
