import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TopNav from './TopNav';
import PageLoader from './PageLoader';
import MediaQuery from 'react-responsive';
import axios from 'axios';
import $ from "jquery";

export default class Shell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModule: 1,
      currentTopic: 1,
      currentPage: 1,
      menuOpen: false,
      menuData: {}
    };

  }

  componentWillMount() {
    axios.get(`app/assets/data/coursemenu.json`)
      .then(res => {
        this.setState({ menuData: res.data });
      });
  }

  loadNext() {
    this.setState({currentPage: this.state.currentPage + 1})
  }

  loadPrev() {
    this.setState({currentPage: this.state.currentPage - 1})
  }

  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  menuItemClicked(e){
   var pageId = e.target.dataset.pageId;
   this.setState({currentPage: parseInt(pageId)});
   this.toggleMenu();
  }

  showTopNav() {
    return (
      <TopNav
        currentPageNumber={this.state.currentPage}
        onLoadNext={this.loadNext.bind(this)}
        onLoadPrev={this.loadPrev.bind(this)}
        onMenuClick={this.toggleMenu.bind(this)}
        totalPages={8}
      />
    )
  }

  loadHeader() {
    return (
        <div>
          <MediaQuery query='(max-width: 680px)'>
            <TopNav
              currentPageNumber={this.state.currentPage}
              onLoadNext={this.loadNext.bind(this)}
              onLoadPrev={this.loadPrev.bind(this)}
              onMenuClick={this.toggleMenu.bind(this)}
              totalPages={8}
            />
          </MediaQuery>
          <MediaQuery query='(min-width: 680px)'>
            <Header ref="header" courseTitle={this.state.menuData.menu ? this.state.menuData.menu.courseTitle:""}/>
          </MediaQuery>
        </div>
    )
  }

  pageLoader() {
    return (
      <div>
        {this.state.menuData.menu && <PageLoader
        currentPage={this.state.currentPage}
        currentPage={this.state.currentPage}
        onCloseMenuClick={this.toggleMenu.bind(this)}
        menuList={this.state.menuData.menu ? this.state.menuData.menu : {}}
        menuOpen={this.state.menuOpen}
        menuItemClicked={this.menuItemClicked.bind(this)}
        />}
      </div>
    )
  }

  loadFooter() {
    return (
        <Footer
          currentPageNumber={this.state.currentPage}
          onLoadNext={this.loadNext.bind(this)}
          onLoadPrev={this.loadPrev.bind(this)}
          onMenuClick={this.toggleMenu.bind(this)}
          totalPages={8}
        />
    )
  }

  render() {
    return (
      <div>
        {this.loadHeader()}
        {this.state.currentPage && this.pageLoader()}
        <MediaQuery query='(min-width: 680px)'>
          {this.loadFooter()}
        </MediaQuery>

      </div>
    )
  }
}
