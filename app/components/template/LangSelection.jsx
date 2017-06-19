import React from 'react';
import LangConfig from '../../config/LangConfig';
import Select from 'react-select';
import MediaQuery from 'react-responsive';
import * as utils from '../Utils';
import Shell from '../Shell';
import Intro from './Intro';
import VisualMenu from './VisualMenu';

export default class LanguageSelection extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedLanguage: ""
    }
  }

  onSelectChange (val) {
    console.log('Selected: ', val);
    this.setState({
      isStartCourse: false,
      selectedLanguage: val.value
    });
    utils.selectedLanguage = this.state.selectedLanguage;
  }

  startCourse () {
    this.setState({isStartCourse: true})
  }

  render () {
    if(this.state.isStartCourse) {
      if(utils.configData.course.openingPage == 2)
        if(utils.configData.course.hasVisualMenu)
          return (
            <VisualMenu />
          )
        else
          return (
            <Shell />
          )
      else if(utils.configData.course.openingPage == 3)
        return (
          <Intro />
        )
    } else {
      return (
        <div className='langSelection-container'>
          <div className="lang-select-holder">
            <div>Select Your Language</div>
            <div>
              <Select name="lang-selection" autofocus options={LangConfig.LangConfig} onChange={this.onSelectChange.bind(this)} value={this.state.selectedLanguage} />
            </div>
            <button className="btn-primary start-btn" onClick={this.startCourse.bind(this)}>Start</button>
          </div>
        </div>
      )
    }
  }
}
