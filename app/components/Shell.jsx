import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PageLoader from './PageLoader';

export default class Shell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  loadNext() {
    this.setState({currentPage: this.state.currentPage + 1})
  }

  loadPrev() {
    this.setState({currentPage: this.state.currentPage - 1})
  }

  render() {
    return (
      <div>
        <Header ref="header"/>
        {this.state.currentPage && <PageLoader currentPage={this.state.currentPage}/>}
        <Footer
          currentPageNumber={this.state.currentPage}
          onLoadNext={this.loadNext.bind(this)}
          onLoadPrev={this.loadPrev.bind(this)}
          totalPages={3}
        />
      </div>
    )
  }
}
