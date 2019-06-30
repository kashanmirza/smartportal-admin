import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Container, Row, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actions } from 'react-redux-form';
import DatatablePage from '../Components/DatatablePage';
import { fetchServiceCategory, postService } from '../../../redux/actions/serviceCategoriesActions';

import { ServicesCategoriesProps } from '../../../shared/prop-types/ReducerProps';
import datatablesHeader from '../../../shared/Data/datatablesHeader';
import FilterComponent from './Components/FilterComponent';
import AddService from './Components/addservice';


class ServiceCategory extends Component {
  static propTypes = {
    fetchServiceCategory: PropTypes.func.isRequired,
    resetAddForm: PropTypes.func.isRequired,
    serviceCategories: ServicesCategoriesProps.isRequired,
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
    this.props.fetchServiceCategory();
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
    console.log(this.props.serviceCategories.serviceCategories);
    let servicedata = this.props.serviceCategories.serviceCategories;

    console.log(`service data: ${JSON.stringify(servicedata)}`);

    if (this.state.filter !== null) {
      // eslint-disable-next-line max-len
      servicedata = this.props.serviceCategories.serviceCategories.filter(x =>
        x.parentServiceCategoryNameEn === this.state.filter.parentServiceCategoryName);
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


    const servicefilterdata = servicedata.map(service => (
      {
        serviceCategoryNameEn: service.serviceCategoryNameEn,
        serviceCategoryDescEn: service.serviceCategoryDescEn,
        parentServiceCategoryNameEn: service.parentServiceCategoryNameEn,
        active: service.active ? activeStatus : inactiveStatus,

      }
    ));


    return (
      <Container className="dashboard">
        <Row>
          <Col md={8}>
            <h3 className="page-title">Service Category Management</h3>
          </Col>
          <Col md={4} className="text-right">
            <Button
              type="submit"
              color="primary"
              className="ml-auto"
              onClick={this.toggleModal}
            >
              Add Organisation
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FilterComponent
              serviceCategories={this.props.serviceCategories}
              handleSubmit={this.handleSubmit}
            />
          </Col>
        </Row>

        <Row>
          <Col md={12}>

            <DatatablePage data={servicefilterdata} columnsData={datatablesHeader.serviceCategory} />
          </Col>
        </Row>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="modal-lg">
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <AddService onSubmit={this.addServicesHandler} serviceCategories={this.props.serviceCategories} />
          </ModalBody>
        </Modal>

      </Container>
    );
  }
}


const mapStateToProps = state => ({
  serviceCategories: state.serviceCategories,
});

const mapDispatchToProps = dispatch => ({
  fetchServiceCategory: () => { dispatch(fetchServiceCategory()); },
  postService: data => dispatch(postService(data)),
  resetAddForm: () => { dispatch(actions.reset('addServiceCategory')); },
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceCategory));

