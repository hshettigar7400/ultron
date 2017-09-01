import React from 'react';
import * as utils from './Utils';
import Intro from './template/Intro';
import LanguageSelection from './template/LangSelection';
import ConfigData from '../config/Config';

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
      if(utils.isMobile) {
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

  loadIntro () {
      return (
        <Intro />
      )
  }

  loadLanguage () {
    return (
      <LanguageSelection />
    )
  }


  render() {
    let _page;
    if(ConfigData.config.course.openingPage == 1) {
      _page = <Intro />
    } else if(ConfigData.config.course.openingPage == 2 || ConfigData.config.course.openingPage == 3){
      _page = <LanguageSelection />
    }

    return (
      <div className="player" ref="container">
        {_page}
      </div>
    )
  }
}
