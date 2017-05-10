import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TopNav from './TopNav';
import PageLoader from './PageLoader';
import MediaQuery from 'react-responsive';

export default class Shell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      menuOpen: false
    };
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
            <Header ref="header"/>
          </MediaQuery>
        </div>
    )
  }

  pageLoader() {
    return (
      <PageLoader
      currentPage={this.state.currentPage}
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
