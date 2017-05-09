import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PageLoader from './PageLoader';

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

  loadHeader() {
    return (
      <Header ref="header"/>
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
        totalPages={13}
      />
    )
  }

  render() {
    return (
      <div>
        {this.loadHeader()}
        {this.state.currentPage && this.pageLoader()}
        {this.loadFooter()}
      </div>
    )
  }
}
