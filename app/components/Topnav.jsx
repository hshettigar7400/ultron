import React from 'react';
export default class TopNav extends React.Component {
  constructor(props) {
    var uagent = navigator.userAgent.toLowerCase();
    super(props);
    this.state = {
      isiPad: uagent.search("mobile") > -1,
    }
  }

  render() {
    return (
      <div className="header-nav">
        <div className="button-container">
          <div className="button-box">
            <a aria-disabled="false" aria-label="menu" aria-pressed="false" href="#" onClick={this.props.onMenuClick} role="button" >
              <span className="icon-tools"></span>
            </a>
          </div>
          {/*<div className="button-box">
            <a aria-disabled="false" aria-label="resources" aria-pressed="false" href="#" role="button" >
              <span className="icon-resources"></span>
            </a>
          </div>
          <div className="button-box">
            <a aria-disabled="false" aria-label="glossary" aria-pressed="false" href="#" role="button" >
              <span className="icon-glossary"></span>
            </a>
          </div>*/}
          <div className="button-box">
            <a aria-disabled="false" aria-label="playPause" aria-pressed="false" href="#" role="button" >
              <span className="icon-playPause"></span>
            </a>
          </div>
          <div className="button-box">
            <a aria-disabled="false" aria-label="back" aria-pressed="false"
              className={(this.props.currentPageNumber !== 1)? "tabindex" : "tabindex disabled"} href="#"
              onClick={this.props.onLoadPrev.bind(null, this)} role="button" >
              <span className="icon-back"></span>
            </a>
          </div>
          <div className="nav-comp-container">
            <div className="page-counter clearfix">
              <span className="page-number">{this.props.currentPageNumber}</span>
              <span className="page-separator">|</span>
              <span className="total-pages">{this.props.totalPages}</span>
            </div>
          </div>
          <div className="button-box">
            <a aria-disabled="false" aria-label="next" aria-pressed="false"
              className={(this.props.currentPageNumber !== this.props.totalPages)? "tabindex" : "tabindex disabled"} href="#"
              onClick={this.props.onLoadNext.bind(null, this)} role="button"
              >
              <span className="icon-next"></span>
            </a>
          </div>
          <div className="button-box">
            <a aria-disabled="false" aria-label="transcript" aria-pressed="false" href="#" role="button" >
              <span className="icon-transcript"></span>
            </a>
          </div>
          <div className="button-box">
            <a aria-disabled="false" aria-label="menu" aria-pressed="false" href="#" onClick={this.props.onMenuClick} role="button" >
              <span className="icon-menu"></span>
            </a>
          </div>
        {/*  <div className="button-box">
            <a aria-disabled="false" aria-label="help" aria-pressed="false" href="#" role="button" >
              <span className="icon-help"></span>
            </a>
          </div>

          {!this.state.isiPad &&
            <div className="button-box">
              <a aria-disabled="false" aria-label="audio" aria-pressed="false" href="#" role="button" >
                <span className="icon-audio"></span>
              </a>
            </div>
          }
          <div className="button-box">
            <a aria-disabled="false" aria-label="replay" aria-pressed="false" href="#" role="button" >
              <span className="icon-replay"></span>
            </a>
          </div>
          <div className="button-box">
            <a aria-disabled="false" aria-label="playPause" aria-pressed="false" href="#" role="button" >
              <span className="icon-playPause"></span>
            </a>
          </div>*/}

        </div>
      </div>
    )
  }
}
