import React from 'react';
import Intro from './template/Intro';

export default class FrameWork extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  }

  updateDimensions() {
    const windowHeight = window.innerHeight,
          windowWidth = window.innerWidth;
    if (this.refs) {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        this.refs.container.style.minWidth= "320px";
        this.refs.container.style.height= "100%";
      }
      else {
        this.refs.container.style.maxHeight= "650px";
        this.refs.container.style.maxWidth= "1010px";
        this.refs.container.style.overflow= "hidden";
        this.refs.container.style.margin= "0 auto";
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
