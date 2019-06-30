import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Control, Form, Errors } from 'react-redux-form';
import { Col, Row, Label, Button } from 'reactstrap';
import { fetchDepartments } from '../../../../redux/actions/departmentsActions';
import { fetchOrganizations } from '../../../../redux/actions/organizationsActions';
import { fetchServiceSupportContracts } from '../../../../redux/actions/serviceSupportContractsActions';
import { fetchServiceTypes } from '../../../../redux/actions/serviceTypesActions';
import { fetchUsersByDepartmentID } from '../../../../redux/actions/usersByDepartmentIDActions';

import {
  OrganizationFilterProps,
  DepartmentsProps,
  ServiceTypesProps,
  ServiceSupportContractsProps,
  UsersByDepartmentIDProps,
} from '../../../../shared/prop-types/ReducerProps';

const required = val => val && val.length;

class AddService extends Component {
  static propTypes = {
    fetchDepartments: PropTypes.func.isRequired,
    fetchOrganizations: PropTypes.func.isRequired,
    fetchServiceSupportContracts: PropTypes.func.isRequired,
    fetchServiceTypes: PropTypes.func.isRequired,
    fetchUsersByDepartmentID: PropTypes.func.isRequired,
    organization: OrganizationFilterProps.isRequired,
    departments: DepartmentsProps.isRequired,
    serviceTypes: ServiceTypesProps.isRequired,
    serviceSupportContracts: ServiceSupportContractsProps.isRequired,
    users: UsersByDepartmentIDProps.isRequired,

    onSubmit: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchDepartments();
    this.props.fetchOrganizations();
    this.props.fetchServiceSupportContracts();
    this.props.fetchServiceTypes();
    this.props.fetchUsersByDepartmentID();
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    // console.log(`organization: ${JSON.stringify(this.props.organization)}`);

    // console.log(this.props.departments);
    // console.log(this.props.serviceTypes);
    // console.log(this.props.serviceSupportContracts);
    // console.log(this.props.users);

    return (
      <Form model="addService" onSubmit={values => this.props.onSubmit(values)}>
        <Row className="form-group">
          <Col sm={6}>
            <Label htmlFor="firstname" md={12}>
                Organization Name
            </Label>
            <Col md={12}>
              <Control.select
                model=".OrganizationId"
                id="OrganizationId"
                name="OrganizationId"
                placeholder="Organization Name"
                className="form-control"
              >
                {this.props.organization.organization.map(item => (
                  <option value={item.organizationId} key={item.organizationId}>
                    {item.organizationNameEn}
                  </option>
                  ))}
              </Control.select>
            </Col>
          </Col>
          <Col sm={6}>
            <Label htmlFor="firstname" md={12}>
                Service Type
            </Label>
            <Col md={12}>
              <Control.select
                model=".serviceTypeId"
                id="serviceTypeId"
                name="serviceTypeId"
                placeholder="Service Type"
                className="form-control"
              >
                {this.props.serviceTypes.serviceTypes.map(item => (
                  <option value={item.serviceTypeId} key={item.serviceTypeId}>
                    {item.serviceTypeCode}
                  </option>
                  ))}
              </Control.select>
            </Col>
          </Col>
          <Col sm={6}>
            <Label htmlFor="firstname" md={12}>
              Department Name
            </Label>
            <Col md={12}>
              <Control.select
                model=".serviceOwnerDepartmentId"
                id="serviceOwnerDepartmentId"
                name="serviceOwnerDepartmentId"
                placeholder="Department Name"
                className="form-control"
              >
                {this.props.departments.departments.map(item => (
                  <option value={item.departmentID} key={item.departmentID}>
                    {item.departmentName}
                  </option>
                  ))}
              </Control.select>
            </Col>
          </Col>
          <Col sm={6}>
            <Label htmlFor="firstname" md={12}>
              Service Contract Name
            </Label>
            <Col md={12}>
              <Control.select
                model=".serviceSupportContractId"
                id="serviceSupportContractId"
                name="serviceSupportContractId"
                placeholder="Service Contract Name"
                className="form-control"
              >
                {this.props.serviceSupportContracts.serviceSupportContracts.map(item => (
                  <option value={item.serviceSupportContractId} key={item.serviceSupportContractId}>
                    {item.serviceContractName}
                  </option>
                  ))}
              </Control.select>
            </Col>
          </Col>
          <Col sm={6}>
            <Label htmlFor="firstname" md={12}>
              User Name
            </Label>
            <Col md={12}>
              <Control.select
                model=".serviceOwnerUserId"
                id="serviceOwnerUserId"
                name="serviceOwnerUserId"
                placeholder="User Name"
                className="form-control"
              >
                {this.props.users.users.map(item => (
                  <option value={item.userId} key={item.userId}>
                    {item.userFirstName} {item.userLastName}
                  </option>
                  ))}
              </Control.select>
            </Col>
          </Col>
          <Col sm={6}>
            <div />
          </Col>

          <Col sm={6}>
            <Label htmlFor="serviceNameEn" md={12}>Service Name En</Label>
            <Col md={12}>
              <Control.text
                model=".serviceNameEn"
                id="serviceNameEn"
                name="serviceNameEn"
                placeholder="Service Name EN"
                className="form-control"
                validators={{
                  required,
              }}
              />
              <Errors
                className="text-danger"
                model=".serviceNameEn"
                show="touched"
                messages={{
                  required: 'Required',
              }}
              />
            </Col>

          </Col>
          <Col sm={6}>
            <Label htmlFor="serviceNameAr" md={12}>Service Name AR</Label>
            <Col md={12}>
              <Control.text
                model=".serviceNameAr"
                id="serviceNameAr"
                name="serviceNameAr"
                placeholder="Service Name AR"
                className="form-control"
                validators={{
                  required,
              }}
              />
              <Errors
                className="text-danger"
                model=".serviceNameAr"
                show="touched"
                messages={{
                  required: 'Required',
              }}
              />
            </Col>

          </Col>
          <Col sm={6}>
            <Label htmlFor="serviceNameEn" md={12}>Service Name En</Label>
            <Col md={12}>
              <Control.textarea
                model=".serviceDescriptionEn"
                id="serviceDescriptionEn"
                name="serviceDescriptionEn"
                placeholder="Service Description EN"
                className="form-control"
                validators={{
                  required,
              }}
              />
              <Errors
                className="text-danger"
                model=".serviceDescriptionEn"
                show="touched"
                messages={{
                  required: 'Required',
              }}
              />
            </Col>

          </Col>
          <Col sm={6}>
            <Label htmlFor="serviceDescriptionAr" md={12}>Service Name AR</Label>
            <Col md={12}>
              <Control.textarea
                model=".serviceDescriptionAr"
                id="serviceDescriptionAr"
                name="serviceDescriptionAr"
                placeholder="Service Description AR"
                className="form-control"
                validators={{
                  required,
              }}
              />
              <Errors
                className="text-danger"
                model=".serviceDescriptionAr"
                show="touched"
                messages={{
                  required: 'Required',
              }}
              />
            </Col>

          </Col>
          <Col sm={6}>
            <Label htmlFor="serviceLogoURL" md={12}>Service Logo URL</Label>
            <Col md={12}>
              <Control.text
                model=".serviceLogoURL"
                id="serviceLogoURL"
                name="serviceLogoURL"
                placeholder="Service Logo URL"
                className="form-control"
                validators={{
                  required,
              }}
              />
              <Errors
                className="text-danger"
                model=".serviceLogoURL"
                show="touched"
                messages={{
                  required: 'Required',
              }}
              />
            </Col>

          </Col>
          <Col sm={6}>
            <Label htmlFor="serviceAccessUrl" md={12}>Service Access URL</Label>
            <Col md={12}>
              <Control.text
                model=".serviceAccessUrl"
                id="serviceAccessUrl"
                name="serviceAccessUrl"
                placeholder="Service Access URL"
                className="form-control"
                validators={{
                  required,
              }}
              />
              <Errors
                className="text-danger"
                model=".serviceAccessUrl"
                show="touched"
                messages={{
                  required: 'Required',
              }}
              />
            </Col>

          </Col>
          <Col sm={6}>
            <Col md={12} className="mt-3">
              <Control.checkbox
                model=".active"
                id="active"
                name="active"
              />
              <Label htmlFor="active" className="ml-2">Active Status</Label>
            </Col>

          </Col>
          <Col sm={6}>
            <Col md={12} className="mt-3">
              <Control.checkbox
                model=".showSubscribeOption"
                id="showSubscribeOption"
                name="showSubscribeOption"
              />
              <Label htmlFor="showSubscribeOption" className="ml-2">Show Subscribe Option</Label>
            </Col>
          </Col>
          <Col>
            <Button type="submit" color="primary" className="mt-4">
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  organization: state.organization,
  departments: state.departments,
  serviceTypes: state.serviceTypes,
  serviceSupportContracts: state.serviceSupportContracts,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  fetchDepartments: () => {
    dispatch(fetchDepartments());
  },
  fetchOrganizations: () => {
    dispatch(fetchOrganizations());
  },
  fetchServiceSupportContracts: () => {
    dispatch(fetchServiceSupportContracts());
  },
  fetchServiceTypes: () => {
    dispatch(fetchServiceTypes());
  },
  fetchUsersByDepartmentID: () => {
    dispatch(fetchUsersByDepartmentID());
  },
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddService));
