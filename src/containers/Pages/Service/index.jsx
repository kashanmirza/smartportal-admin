import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Container, Row, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actions } from 'react-redux-form';
import DatatablePage from '../Components/DatatablePage';
import { fetchServices, postService } from '../../../redux/actions/serviceActions';

import { ServicesProps } from '../../../shared/prop-types/ReducerProps';
import datatablesHeader from '../../../shared/Data/datatablesHeader';
import FilterComponent from './Components/FilterComponent';
import AddService from './Components/addservice';


class ServicePage extends Component {
  static propTypes = {
    fetchServices: PropTypes.func.isRequired,
    resetAddForm: PropTypes.func.isRequired,
    services: ServicesProps.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      filter: null,
      isModalOpen: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchServices();
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }


  handleSubmit = (values) => {
    this.setState({ filter: values });
    // console.log(`Current State is: ${JSON.stringify(values)}`);
    alert(`Current State is: ${JSON.stringify(values)}`);
    // this.props.resetFeedbackForm();
  }

  addServicesHandler = (values) => {
    this.toggleModal();
    alert(`Current State is: ${JSON.stringify(values)}`);
    postService(values);
    this.props.resetAddForm();
  }

  render() {
    let servicedata = this.props.services.services;

    if (this.state.filter !== null) {
      // eslint-disable-next-line max-len
      servicedata = this.props.services.services.filter(x =>
        x.serviceTargetOrganizationType === this.state.filter.organizationType &&
        x.departmentNameEn === this.state.filter.departmentName);
      if (this.state.filter.status === 'Active') {
        servicedata = servicedata.filter(x =>
          x.active === true);
      } else if (this.state.filter.status === 'InActive') {
        servicedata = servicedata.filter(x =>
          x.active === false);
      }
    }

    const activeStatus = [<i key="active" className="fa fa-2x fa-circle m-auto active" aria-hidden="true" />, 'active'];
    // eslint-disable-next-line max-len
    const inactiveStatus = [<i key="inactive" className="fa fa-2x fa-circle m-auto inactive" aria-hidden="true" />, 'in-active'];
    // eslint-disable-next-line max-len
    //  const data = this.state.services.filter(service => service.serviceTargetOrganizationType === this.state.filter.organizationType);
    const servicefilterdata = servicedata.map(service => (
      {
        serviceCode: service.serviceCode,
        serviceNameEn: service.serviceNameEn,
        serviceTargetOrganizationType: service.serviceTargetOrganizationType,
        active: service.active ? activeStatus : inactiveStatus,
        serviceCategoryNameEn: service.serviceCategoryNameEn,
        departmentNameEn: service.departmentNameEn,
      }
    ));


    return (
      <Container className="dashboard">
        <Row>
          <Col md={8}>
            <h3 className="page-title">Service Management</h3>
          </Col>
          <Col md={4} className="text-right">
            <Button
              type="submit"
              color="primary"
              className="ml-auto"
              onClick={this.toggleModal}
            >
              Add Service
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FilterComponent services={this.props.services} handleSubmit={this.handleSubmit} />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <DatatablePage data={servicefilterdata} columnsData={datatablesHeader.service} />
          </Col>
        </Row>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="modal-lg">
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <AddService onSubmit={this.addServicesHandler} />
          </ModalBody>
        </Modal>

      </Container>
    );
  }
}


const mapStateToProps = state => ({
  services: state.services,
});

const mapDispatchToProps = dispatch => ({
  fetchServices: () => { dispatch(fetchServices()); },
  postService: data => dispatch(postService(data)),
  resetAddForm: () => { dispatch(actions.reset('addService')); },
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServicePage));

