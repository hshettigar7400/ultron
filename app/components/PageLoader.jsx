import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import {routes} from '../config/routes.js';
import SideBar from 'react-sidebar';
import MenuInnerList from './MenuInnerList';
import Dock from 'react-dock';
import HelpContent from './template/HelpContent';
import MediaQuery from 'react-responsive';

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

  hideHelp() {

  }

  loadMenuItem() {
    return (
      <MenuInnerList
        menuList={this.props.menuList}
        onPageLinkClick={this.props.menuItemClicked}
        onCloseMenuClick={this.props.onCloseMenuClick}
      />
    )
  }

  loadHelp() {
    return (
    <div className="help-container">
      <Dock
        position='top'
        isVisible={this.props.showHelp}
        duration={800}
        size={0.9}
        dockStyle={{position: 'absolute', height: 'auto', top: '66px'}}
        dimStyle={{position: 'relative', height: '100%'}}
        >
        <HelpContent closeHelp={this.hideHelp.bind(this)}/>
      </Dock>
    </div>
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
        <MediaQuery query='(min-width: 680px)'>
          {this.loadHelp()}
        </MediaQuery>
        
        {this.loadRouter()}
      </div>
    )
  }
}
