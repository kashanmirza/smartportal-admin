import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DatatablePage from '../Components/DatatablePage';
import { fetchUsersByDepartmentID } from '../../../redux/actions/usersByDepartmentIDActions';

import { UsersByDepartmentIDProps } from '../../../shared/prop-types/ReducerProps';
import datatablesHeader from '../../../shared/Data/datatablesHeader';

class UserManagment extends Component {
  static propTypes = {
    fetchUsersByDepartmentID: PropTypes.func.isRequired,
    users: UsersByDepartmentIDProps.isRequired,
  };

  componentDidMount() {
    this.props.fetchUsersByDepartmentID();
  }


  render() {
    const servicedata = this.props.users.users;

    console.log(`service data: ${JSON.stringify(servicedata)}`);

    const activeStatus = [<i key="active" className="fa fa-2x fa-circle m-auto active" aria-hidden="true" />, 'active'];
    // eslint-disable-next-line max-len
    const inactiveStatus = [<i key="inactive" className="fa fa-2x fa-circle m-auto inactive" aria-hidden="true" />, 'in-active'];


    const servicefilterdata = servicedata.map(service => (
      {
        userName: service.userName,
        userType: service.userType,
        userFirstName: service.userFirstName,
        userLastName: service.userLastName,
        emailAddress: service.emailAddress,
        lastLoginDate: service.lastLoginDate,
        active: service.active ? activeStatus : inactiveStatus,
      }
    ));


    return (
      <Container className="dashboard">
        <Row>
          <Col md={8}>
            <h3 className="page-title">User Management</h3>
          </Col>
        </Row>
        <Row>
          <Col md={12}>

            <DatatablePage data={servicefilterdata} columnsData={datatablesHeader.userManagement} />
          </Col>
        </Row>
      </Container>
    );
  }
}


const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  fetchUsersByDepartmentID: () => { dispatch(fetchUsersByDepartmentID()); },
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserManagment));

