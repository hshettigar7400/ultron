import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import {routes} from '../config/routes.js';
import SideBar from 'react-sidebar';

export default class PageLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: props.menuOpen
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
    this.updateDimensions();
    this.getMenuList();
  }

  getMenuList() {

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

  closeMenu() {
    this.setState({closeMenu: false})
  }

  loadMenuItem() {
    return (
      <b>Sidebar content</b>
    )
  }

  loadSideBar() {
    return (
      <SideBar
         sidebar={this.loadMenuItem()}
         contentClassName="menu-content-container"
         open={this.props.menuOpen}
         onSetOpen={this.closeMenu.bind(this)}
         overlayClassName="menu-overlay-style"
         pullRight={true}
         rootClassName="menu-custom-style"
         sidebarClassName="menu-style">
         <b>{}</b>
      </SideBar>
    )
  }

  loadRouter() {
    const route = routes[this.props.currentPage-1];
    return (
      <Router>
        {
          <Route
            key={this.props.currentPage}
            path={this.path}
            component={route.comp}
            />
        }
      </Router>
    )
  }

  render() {
    return (
      <div className="page-loader" ref="pageLoader">
        {this.loadSideBar()}
        {this.loadRouter()}
      </div>
    )
  }
}
