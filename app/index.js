import React from 'react';
import ReactDOM from 'react-dom';
import FrameWork from './components/FrameWork.jsx';
import SCSS from './assets/stylesheet/application.scss';

const appData = {
  title: 'KAIZEN'
}

ReactDOM.render(
  <FrameWork data={appData} />, document.getElementById('container')
);
