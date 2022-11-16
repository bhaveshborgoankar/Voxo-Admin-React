import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Taxess } from '../../Constant';
import TitleHeading from '../CommonComponents/TitleHeading';
const Taxes = () => {
  return (
    <>
      <TitleHeading title={Taxess} />
      <div class='title-header'>
        <h5>Texes</h5>
      </div>

      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <div className='table-responsive table-desi'>
                  <table class='user-table trans-table texes-table table table-striped'>
                    <thead>
                      <tr>
                        <th>Tax Detail</th>
                        <th>Tax Schedule</th>
                        <th>Tax Rate</th>
                        <th>Total Tax Amount</th>
                        <th>Options</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>USASTE-PS6N0</td>
                        <td>
                          USASTCITY-6 <span class='theme-color'>*</span>
                        </td>
                        <td>50%</td>
                        <td>4.78</td>
                        <td>
                          <ul>
                            <li>
                              <a href='order-detail.html'>
                                <span class='lnr lnr-eye'></span>
                              </a>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>
                                <span class='lnr lnr-pencil'></span>
                              </a>
                            </li>
                            <li>
                              <a href='javascript:void(0)'>
                                <span class='lnr lnr-trash'></span>
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Taxes;
