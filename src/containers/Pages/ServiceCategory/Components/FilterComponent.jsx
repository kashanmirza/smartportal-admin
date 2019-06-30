import React from 'react';
import { Control, Form } from 'react-redux-form';
import { Col, Row, Label, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { ServicesCategoriesProps } from '../../../../shared/prop-types/ReducerProps';
import Helper from '../../../../shared/Helper/Helper';


const FilterComponent = (props) => {
  // eslint-disable-next-line max-len
  const parentServiceCategoryNameList = Helper.getUniqueList([...new Set(props.serviceCategories.serviceCategories.map(service => service.parentServiceCategoryNameEn))]);
  const statusList = ['All', 'Active', 'InActive'];


  return (

    <Form model="ServiceCategoriesForm" onSubmit={values => props.handleSubmit(values)}>
      <Row className="form-group">
        <Col sm={4}>
          <Row>
            <Label htmlFor="parentServiceCategoryName" md={12}>
              Parent Service Category Name
            </Label>
            <Col md={12}>
              <Control.select
                model=".parentServiceCategoryName"
                id="parentServiceCategoryName"
                name="parentServiceCategoryName"
                placeholder="Parent Service Category Name"
                className="form-control"
              >
                {parentServiceCategoryNameList.map(value => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </Control.select>
            </Col>
          </Row>
        </Col>
        <Col sm={4}>
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
        <Col sm={4}>
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
  serviceCategories: ServicesCategoriesProps.isRequired,
};

export default FilterComponent;
