import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import {routes} from '../config/routes.js';

export default class PageLoader extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props)
  }

  render() {
    const route = routes[this.props.currentPage-1];
    return (
      <Router>
        <div>
          {
            <Route
              key={this.props.currentPage}
              path={this.path}
              component={route.comp}
              />
          }
        </div>
      </Router>
    )
  }
}
