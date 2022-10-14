import React from 'react';
import { Card, CardBody, Col, Container, Row, TabContent, TabPane } from 'reactstrap';
import { AddNewUser } from '../../../Constant';
import TitleHeading from '../../CommonComponents/TitleHeading';
import AccountTabData from './AccountTabData';
import PermissionTabData from './PermissionTabData';
import UserNav from './UserNav';
const AddNewUsers = () => {
  return (
    <>
      <TitleHeading title={AddNewUser} />
      <Container fluid={true}>
        <Row>
          <Col xs='12'>
            <Row>
              <Col sm='12'>
                <Card>
                  <CardBody>
                    <UserNav />
                    <TabContent className='tab-content' id='pills-tabContent'>
                      <TabPane className='fade show active' id='pills-home' role='tabpanel'>
                        <AccountTabData />
                      </TabPane>

                      <TabPane className='fade' id='pills-profile' role='tabpanel'>
                        <PermissionTabData />
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AddNewUsers;
