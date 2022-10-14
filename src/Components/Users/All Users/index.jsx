import React from 'react';
import DataTable from 'react-data-table-component';
import { PlusSquare } from 'react-feather';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { AllUserss } from '../../../Constant';
import { AllUserColumn, AllUserData } from '../../../Data/Users/AllUser';
import Pagination from '../../CommonComponents/Pagination';
import TitleHeading from '../../CommonComponents/TitleHeading';
const AllUsers = () => {
  return (
    <>
      <TitleHeading btn={true} title={AllUserss} />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <div>
                  <div className='table-responsive table-desi'>
                    <DataTable data={AllUserData} columns={AllUserColumn} selectableRows pagination />
                  </div>
                </div>
              </CardBody>
              <Pagination />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AllUsers;
