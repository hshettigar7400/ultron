import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import {routes} from '../config/routes.js';
import SideBar from 'react-sidebar';

export default class PageLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
    this.updateDimensions();
  }

  componentWillUnmount() {
   window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  updateDimensions() {
    var pageLoaderHeight = document.body.clientHeight - 65;
    if (this.refs.pageLoader) {
      this.refs.pageLoader.style.height= `${pageLoaderHeight}px`;
    }
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  render() {
    const route = routes[this.props.currentPage-1];
    return (
      <div className="page-loader" ref="pageLoader">
        <SideBar sidebar={<b>Sidebar content</b>}
           open={this.state.sidebarOpen}
           onSetOpen={this.onSetSidebarOpen}
           overlayClassName="menu-overlay-style"
           pullRight={true}
           rootClassName="menu-custom-style"
           sidebarClassName="menu-style">
           <b>{}</b>
        </SideBar>

        <Router>
            {
              <Route
                key={this.props.currentPage}
                path={this.path}
                component={route.comp}
                />
            }
        </Router>
      </div>
    )
  }
}
