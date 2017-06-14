import React from 'react';
import Intro from './template/Intro';
import ConfigData from '../config/config';

export default class FrameWork extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  }

  componentWillUnmount() {
   window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    const windowHeight = window.innerHeight,
          windowWidth = window.innerWidth;
    if (this.refs) {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        document.body.style.minWidth = ConfigData.config.window.minWidth;
        document.body.style.height= "100%";
      }
      else {
        document.body.style.maxHeight= ConfigData.config.window.maxHeight;
        document.body.style.maxWidth= ConfigData.config.window.maxWidth;
        document.body.style.overflow= "hidden";
        document.body.style.margin= "0 auto";
        document.body.style.position= "relative";
      }
    }
  }

  render() {
    return (
      <div className="player" ref="container">
        <Intro />
      </div>
    )
  }
}
