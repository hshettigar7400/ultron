import React from 'react';
import MenuList from './MenuList';

export default class MenuInnerList extends React.Component {
  constructor(props) {
    super(props);
  }

  getProgressColor(id) {
    if (window.pageStatusList[id] == 1)
      return "#ED1C22";
    }

  displayMenuList() {
    return (this.props.menuList.modules[0].topic[0].pages.map((page, index) => {
      return (
        <li onClick={this.props.onPageLinkClick} data-page-id={index + 1} key={index}>
          <a className="disable-event" data-page-id={index + 1}>{page.pageTitle}</a>
          <span className="menu-page-progress" style={{
            backgroundColor: this.getProgressColor(index)
          }}></span>
        </li>
      )
    }))
  }

  render() {
    return (
      <div>
        <div className="menu-header">
          <div className="menu-header-title">
            <label>Menu</label>
          </div>
          <div className="menu-close-button-container" onClick={this.props.onCloseMenuClick}>
            <a>
              <span className="icon-close"></span>
            </a>
          </div>
        </div>
        <div>
          <MenuList>
            <ul>
              {this.displayMenuList()}
            </ul>
          </MenuList>
        </div>
      </div>
    )
  }
}
