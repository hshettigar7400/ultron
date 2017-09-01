import React from 'react';
import * as utils from './Utils';
import FontAwesome from 'react-fontawesome';
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isiPad: utils.isMobile,
    }
  }

  getDoubleDigit(num) {
    return (num > 9) ? num : ('0'+num);
  }

  render() {
    return (
      <div className="footer">
        <div className="button-container">
          {/*<div className="button-box">
            <a aria-disabled="false" aria-label="menu" aria-pressed="false" href="#" onClick={this.props.onMenuClick} role="button" >
              <span className="icon-menu">?</span>
            </a>
          </div>*/}
          <div className="button-box">
            <a aria-disabled="false" aria-label="resources" aria-pressed="false" href="#" role="button" >
              <FontAwesome name='file-text-o' />
            </a>
          </div>
          {/*<div className="button-box">
            <a aria-disabled="false" aria-label="glossary" aria-pressed="false" href="#" role="button" >
              <span className="icon-glossary">?</span>
            </a>
          </div>
          <div className="button-box">
            <a aria-disabled="false" aria-label="help" aria-pressed="false" onClick={this.props.onHelpClick.bind(null, this)} role="button" >
              <span className="icon-help">?</span>
            </a>
          </div>
          <div className="button-box">
            <a aria-disabled="false" aria-label="transcript" aria-pressed="false"
                className={!this.props.showTranscript ? "" : "selected"} onClick={this.props.onTranscriptClick.bind(null, this)} role="button" >
              <span className="icon-transcript"></span>
            </a>
          </div>*/}
          
            <div className="button-box">
              <a aria-disabled="false" aria-label="audio" aria-pressed="false"
                className={this.props.audioVolume === 100 ? "" : "selected"} onClick={this.props.onToggleVolume.bind(null, this)} role="button" >
                <FontAwesome name='volume-up' />
              </a>
            </div>
         
          <div className="button-box">
            <a aria-disabled="false" aria-label="replay" aria-pressed="false" onClick={this.props.onReplay.bind(null, this)} role="button" >
              <FontAwesome name='refresh' />
            </a>
          </div>
          <div className="button-box">
            <a aria-disabled="false" aria-label="playPause" aria-pressed="false"
                className={this.props.isPlaying ? "" : "selected"} onClick={this.props.onPlayPause.bind(null, this)} role="button" >
              <FontAwesome name='play' /></a>
          </div>
          <div className="nav-comp-container">
            <a aria-disabled="false" aria-label="back" aria-pressed="false"
              className={(this.props.currentPageNumber !== 1)? "tabindex" : "tabindex"} href="#"
              onClick={this.props.onLoadPrev.bind(null, this)} role="button" >
              <FontAwesome name='angle-left' />
            </a>
          </div>
          <div className="nav-comp-container">
            <div className="page-counter clearfix">
              <span className="page-number">{this.getDoubleDigit(this.props.currentPageNumber)}</span>
              <span className="page-separator"> / </span>
              <span className="total-pages">{this.getDoubleDigit(this.props.totalPages)}</span>
            </div>
          </div>
          <div className="nav-comp-container">
            <a aria-disabled="false" aria-label="next" aria-pressed="false"
              className={(this.props.currentPageNumber !== this.props.totalPages)? "tabindex" : "tabindex disabled"} href="#"
              onClick={this.props.onLoadNext.bind(null, this)} role="button">
              <FontAwesome name='angle-right' />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
