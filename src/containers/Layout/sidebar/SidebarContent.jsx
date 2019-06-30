import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import { MENU } from '../../../shared/Data/menu';


class SidebarContent extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    this.props.onClick();
  };

  render() {
    const menu = MENU.map((item) => {
      let submenuList;
      let submenuItem;
      if (item.menu && item.menu.length > 0) {
        // eslint-disable-next-line max-len
        submenuList = item.menu.map(submenu => (<SidebarLink title={submenu.title} route={submenu.route} onClick={this.hideSidebar} />));
      } else {
        // eslint-disable-next-line max-len
        submenuItem = (<SidebarLink title={item.title} route={item.route} icon={item.icon} onClick={this.hideSidebar} />);
      }

      if (submenuList != null) {
        return (
          <ul className="sidebar__block">
            {submenuItem}
            <SidebarCategory title={item.title} icon={item.icon}>
              {submenuList}
            </SidebarCategory>
          </ul>
        );
      }
      return (
        <ul className="sidebar__block">
          {submenuItem}
        </ul>
      );
    });


    return (
      <div className="sidebar__content">
        {menu}
      </div>
    );
  }
}

export default SidebarContent;
