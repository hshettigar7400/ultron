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
            <div className="button-box">
            </div>
            <div className="button-box button-border">
              <a aria-disabled="false" aria-label="transcript" aria-pressed="false"
                  className={!this.props.showTranscript ? "" : "selected"} onClick={this.props.onTranscriptClick.bind(null, this)} role="button" >
                <FontAwesome name='cc' />
              </a>
            </div>

            <div className="button-box button-border">
              <a aria-disabled="false" aria-label="audio" aria-pressed="false"
                onClick={this.props.onToggleVolume.bind(null, this)} role="button" >
                <FontAwesome name={this.props.audioVolume === 100?"volume-up":"volume-down"} />
              </a>
            </div>

            <div className="button-box button-border">
                <a aria-disabled="false" aria-label="replay" aria-pressed="false" onClick={this.props.onReplay.bind(null, this)} role="button" >
                  <FontAwesome name='refresh' />
                </a>
            </div>

            <div className="button-box button-border">
                <a aria-disabled="false" aria-label="playPause" aria-pressed="false"
                   onClick={this.props.onPlayPause.bind(null, this)} role="button" >
                  <FontAwesome name={this.props.isPlaying ?"pause":"play"} /></a>
            </div>

            <div className="button-box button_ctrl">
                <a aria-disabled="false" aria-label="back" aria-pressed="false"
                  className={(this.props.currentPageNumber !== 1)? "tabindex" : "tabindex disabled"} href="#"
                  onClick={this.props.onLoadPrev.bind(null, this)} role="button" >
                  <FontAwesome name='angle-left' />
                </a>
            </div>

            <div className="button-box">
                <div className="page-counter clearfix">
                  <span className="page-number">{this.getDoubleDigit(this.props.currentPageNumber)}</span>
                  <span className="page-separator"> / </span>
                  <span className="total-pages">{this.getDoubleDigit(this.props.totalPages)}</span>
                </div>
            </div>

            <div className="button-box button_ctrl">
                <a aria-disabled="false" aria-label="next" aria-pressed="false"
                  className={(this.props.currentPageNumber !== this.props.totalPages)? "tabindex" : "tabindex disabled"} href="#"
                  onClick={this.props.onLoadNext.bind(null, this)} role="button">
                  <FontAwesome name='angle-right' />
                </a>
            </div>

      </div>
    )
  }
}
