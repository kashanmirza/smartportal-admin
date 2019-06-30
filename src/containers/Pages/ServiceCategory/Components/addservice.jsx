import React from 'react';
import PropTypes from 'prop-types';
import { Control, Form, Errors } from 'react-redux-form';
import { Col, Row, Label, Button } from 'reactstrap';
import Helper from '../../../../shared/Helper/Helper';
import { ServicesCategoriesProps } from '../../../../shared/prop-types/ReducerProps';

const required = val => val && val.length;

const AddServiceCategory = (props) => {
  // eslint-disable-next-line max-len
  const parentServiceCategoryNameList = Helper.getUniqueList([
    ...new Set(props.serviceCategories.serviceCategories.map(service => service.parentServiceCategoryNameEn)),
  ]);

  return (
    <Form model="addServiceCategory" onSubmit={values => props.onSubmit(values)}>
      <Row className="form-group">
        <Col sm={6}>
          <Label htmlFor="firstname" md={12}>
            Parent Service Category
          </Label>
          <Col md={12}>
            <Control.select
              model=".parentServiceCategoryId"
              id="parentServiceCategoryId"
              name="parentServiceCategoryId"
              placeholder="Parent Service Category"
              className="form-control"
            >
              {parentServiceCategoryNameList.map(item => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </Control.select>
          </Col>
        </Col>
        <Col sm={6}>
          <Label htmlFor="serviceCategorySequence" md={12}>
            Service Category Sequence
          </Label>
          <Col md={12}>
            <Control.text
              model=".serviceCategorySequence"
              id="serviceCategorySequence"
              name="serviceCategorySequence"
              placeholder="Service Category Sequence"
              className="form-control"
              validators={{
                required,
              }}
            />
            <Errors
              className="text-danger"
              model=".serviceCategorySequence"
              show="touched"
              messages={{
                required: 'Required',
              }}
            />
          </Col>
        </Col>
        <Col sm={6}>
          <Label htmlFor="serviceCategoryNameEn" md={12}>
            Service Category Name En
          </Label>
          <Col md={12}>
            <Control.text
              model=".serviceCategoryNameEn"
              id="serviceCategoryNameEn"
              name="serviceCategoryNameEn"
              placeholder="Service Category Name EN"
              className="form-control"
              validators={{
                required,
              }}
            />
            <Errors
              className="text-danger"
              model=".serviceCategoryNameEn"
              show="touched"
              messages={{
                required: 'Required',
              }}
            />
          </Col>
        </Col>
        <Col sm={6}>
          <Label htmlFor="serviceCategoryNameAr" md={12}>
            Service Category Name Ar
          </Label>
          <Col md={12}>
            <Control.text
              model=".serviceCategoryNameAr"
              id="serviceCategoryNameAr"
              name="serviceCategoryNameAr"
              placeholder="Service Category Name AR"
              className="form-control"
              validators={{
                required,
              }}
            />
            <Errors
              className="text-danger"
              model=".serviceCategoryNameAr"
              show="touched"
              messages={{
                required: 'Required',
              }}
            />
          </Col>
        </Col>
        <Col sm={6}>
          <Label htmlFor="serviceCategoryDescEn" md={12}>
            Service Category Description EN
          </Label>
          <Col md={12}>
            <Control.textarea
              model=".serviceCategoryDescEn"
              id="serviceCategoryDescEn"
              name="serviceCategoryDescEn"
              placeholder="Service Category Description EN"
              className="form-control"
              validators={{
                required,
              }}
            />
            <Errors
              className="text-danger"
              model=".serviceCategoryDescEn"
              show="touched"
              messages={{
                required: 'Required',
              }}
            />
          </Col>
        </Col>
        <Col sm={6}>
          <Label htmlFor="serviceCategoryDescAr" md={12}>
            Service Category Description AR
          </Label>
          <Col md={12}>
            <Control.textarea
              model=".serviceCategoryDescAr"
              id="serviceCategoryDescAr"
              name="serviceCategoryDescAr"
              placeholder="Service Category Description AR"
              className="form-control"
              validators={{
                required,
              }}
            />
            <Errors
              className="text-danger"
              model=".serviceCategoryDescAr"
              show="touched"
              messages={{
                required: 'Required',
              }}
            />
          </Col>
        </Col>
        <Col sm={6}>
          <Col md={12} className="mt-3">
            <Control.checkbox model=".active" id="active" name="active" />
            <Label htmlFor="active" className="ml-2">
              Active Status
            </Label>
          </Col>
        </Col>
        <Col sm={6}>
          <div />
        </Col>
        <Col>
          <Button type="submit" color="primary" className="mt-4">
            Save
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

AddServiceCategory.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  serviceCategories: ServicesCategoriesProps.isRequired,
};

export default AddServiceCategory;
