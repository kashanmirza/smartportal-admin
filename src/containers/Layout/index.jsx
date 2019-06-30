import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Topbar from './topbar/Topbar';
import Sidebar from './sidebar/Sidebar';

import { changeThemeToDark, changeThemeToLight } from '../../redux/actions/themeActions';
import { changeMobileSidebarVisibility, changeSidebarVisibility } from '../../redux/actions/sidebarActions';
import { fetchServices } from '../../redux/actions/serviceActions';

import { SidebarProps, ServicesProps } from '../../shared/prop-types/ReducerProps';

class Layout extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    fetchServices: PropTypes.func.isRequired,
    changeSidebarVisibility: PropTypes.func.isRequired,
    changeMobileSidebarVisibility: PropTypes.func.isRequired,
    sidebar: SidebarProps.isRequired,
    services: ServicesProps.isRequired,
  };

  componentDidMount() {
    this.props.fetchServices();
  }

  changeSidebarVisibility = () => {
    this.props.changeSidebarVisibility();
  };

  changeMobileSidebarVisibility = () => {
    this.props.changeMobileSidebarVisibility();
  };

  changeToDark = () => {
    this.props.dispatch(changeThemeToDark());
  };

  changeToLight = () => {
    this.props.dispatch(changeThemeToLight());
  };

  render() {
    const layoutClass = classNames({
      layout: true,
      'layout--collapse': this.props.sidebar.collapse,
    });

    return (
      <div className={layoutClass}>
        <Topbar
          changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
          changeSidebarVisibility={this.changeSidebarVisibility}
        />
        <Sidebar
          sidebar={this.props.sidebar}
          services={this.props.services}
          changeToDark={this.changeToDark}
          changeToLight={this.changeToLight}
          changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
        />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  services: state.services,
  sidebar: state.sidebar,
});

const mapDispatchToProps = dispatch => ({
  fetchServices: () => { dispatch(fetchServices()); },
  changeSidebarVisibility: () => { dispatch(changeSidebarVisibility()); },
  changeMobileSidebarVisibility: () => { dispatch(changeMobileSidebarVisibility()); },
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout));

// export default withRouter(connect(state => ({
//   sidebar: state.sidebar,
// }))(Layout));
