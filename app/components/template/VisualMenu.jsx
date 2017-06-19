import React from 'react';
import Shell from '../Shell';
import * as utils from '../Utils';

export default class VisualMenu extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className="visual-menu-container">
        <div>This is Visual Menu Page</div>
        <button className="btn-primary">Start</button>
      </div>
    )
  }
}
