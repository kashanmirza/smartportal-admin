import React from 'react';
import { Control, Form } from 'react-redux-form';
import { Col, Row, Label, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { ServicesProps } from '../../../../shared/prop-types/ReducerProps';
import Helper from '../../../../shared/Helper/Helper';


const FilterComponent = (props) => {
  // eslint-disable-next-line max-len
  const organizationTypeList = Helper.getUniqueList([...new Set(props.services.services.map(service => service.serviceTargetOrganizationType.trim()))]);
  const departmentList = [...new Set(props.services.services.map(service => service.departmentNameEn.trim()))];
  const statusList = ['All', 'Active', 'InActive'];


  return (

    <Form model="feedback" onSubmit={values => props.handleSubmit(values)}>
      <Row className="form-group">
        <Col sm={3}>
          <Row>
            <Label htmlFor="firstname" md={12}>
              Organization Type
            </Label>
            <Col md={12}>
              <Control.select
                model=".organizationType"
                id="organizationType"
                name="organizationType"
                placeholder="First Name"
                className="form-control"
              >
                {organizationTypeList.map(value => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </Control.select>
            </Col>
          </Row>
        </Col>
        <Col sm={3}>
          <Row>
            <Label htmlFor="lastname" md={12}>
              Department Name
            </Label>
            <Col md={12}>
              <Control.select
                model=".departmentName"
                id="departmentName"
                name="departmentName"
                placeholder="Department Name"
                className="form-control"
              >
                {departmentList.map(value => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </Control.select>
            </Col>
          </Row>
        </Col>
        <Col sm={3}>
          <Row>
            <Label htmlFor="lastname" md={12}>
              Status
            </Label>
            <Col md={12}>
              <Control.select
                model=".status"
                id="status"
                name="status"
                placeholder="status"
                className="form-control"
              >
                {statusList.map(value => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </Control.select>
            </Col>
          </Row>
        </Col>
        <Col sm={3}>
          <Button type="submit" color="primary" className="mt-4 btn-block">
            Filter
          </Button>
        </Col>
      </Row>

    </Form>
  );
};

FilterComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  services: ServicesProps.isRequired,
};

export default FilterComponent;
