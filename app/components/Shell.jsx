import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TopNav from './TopNav';
import PageLoader from './PageLoader';
import MediaQuery from 'react-responsive';
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

  componentDidMount() {
    this.getMenuList();
  }

  getMenuList() {
    let menuData = {}
    $.ajax({
      url: 'app/assets/data/coursemenu.json',
      dataType: 'json',
      success: function(parsed_json){
        this.setState({menuData: parsed_json})
      }.bind(this)
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

  showTovNav() {
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
    debugger;
    const courseTitle = this.state.menuData ? this.state.menuData.menu.courseTitle : "";

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
            <Header ref="header" courseTitle={courseTitle}/>
          </MediaQuery>
        </div>
    )
  }

  pageLoader() {
    return (
      <PageLoader
      currentPage={this.state.currentPage}
      currentPage={this.state.currentPage}
      menuData={this.state.menuData}
      menuOpen={this.state.menuOpen}
      />
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
