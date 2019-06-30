import React from 'react';
import { MDBDataTable } from 'mdbreact';
import PropTypes from 'prop-types';
import { Col, Button, Row } from 'reactstrap';


const DatatablePage = ({
  data, columnsData,
}) => {
  if (data && data.length > 0 && columnsData && columnsData.length > 0) {
    const tabledata = {
      columns: columnsData,
      rows: data,
    };

    console.log(tabledata);

    return (
      <Row>
        <Col sm={12} className="text-right">
          <Button outline color="light" size="sm" icon="fa fa-copy">Copy</Button>{' '}
          <Button outline color="light" size="sm">export</Button>{' '}
          <Button outline color="light" size="sm">Print</Button>{' '}
        </Col>
        <Col sm={12}>
          <MDBDataTable
            striped
            bordered
            hover
            data={tabledata}
          />
        </Col>
      </Row>
    );
  }
  return (
    <div />
  );
};

DatatablePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  columnsData: PropTypes.any.isRequired,
};

export default DatatablePage;
