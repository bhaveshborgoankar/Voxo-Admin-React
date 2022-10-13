import React from 'react';
import DataTable from 'react-data-table-component';
import { PlusSquare } from 'react-feather';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { AllUserColumn, AllUserData } from '../../../Data/Users/AllUser';
import Pagination from '../../CommonComponents/Pagination';
const AllUsers = () => {
  return (
    <>
      <div className='title-header title-header-1'>
        <h5>All Users</h5>
        <form className='d-inline-flex'>
          <a href='#javascript' className='align-items-center btn btn-theme'>
            <PlusSquare />
            Add New
          </a>
        </form>
      </div>
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <div>
                  <div className='table-responsive table-desi'>
                    <DataTable data={AllUserData} columns={AllUserColumn} selectableRows pagination />
                    {/* <table className='user-table table table-striped'>
                      <thead>
                        <tr>
                          <th>
                            <span className='form-check user-checkbox'>
                              <input className='checkbox_animated' type='checkbox' value='' id='checkall' />
                            </span>
                            User
                          </th>
                          <th>Name</th>
                          <th>Phone</th>
                          <th>Email</th>
                          <th>Country</th>
                          <th>Last Login</th>
                          <th>Options</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className='form-check user-checkbox'>
                              <input className='checkbox_animated check-it' type='checkbox' value='' id='flexCheckDefault' />
                            </div>
                            <span>
                              <img src='assets/images/users/1.jpg' alt='users' />
                            </span>
                          </td>

                          <td>
                            <a href='javascript:void(0)'>
                              <span className='d-block '>Everett C. Green</span>
                              <span>Essex Court</span>
                            </a>
                          </td>

                          <td> +802-370-2430</td>

                          <td>EverettCGreen@rhyta.com</td>

                          <td className='font-primary'>America</td>

                          <td>1 Day</td>

                          <td>
                            <ul>
                              <li>
                                <a href='order-detail.html'>
                                  <span className='lnr lnr-eye'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-pencil'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-trash'></span>
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <span className='form-check user-checkbox'>
                              <input className='checkbox_animated check-it' type='checkbox' value='' id='flexCheckDefault1' />
                            </span>
                            <span>
                              <img src='assets/images/users/2.jpg' alt='users' />
                            </span>
                          </td>

                          <td>
                            <a href='javascript:void(0)'>
                              <span className='d-block'>Caroline L. Harris</span>
                              <span>Davis Lane</span>
                            </a>
                          </td>

                          <td> + 720-276-9403</td>

                          <td>CarolineLHarris@rhyta.com</td>

                          <td className='font-primary'>Denver</td>

                          <td>1 Day</td>

                          <td>
                            <ul>
                              <li>
                                <a href='order-detail.html'>
                                  <span className='lnr lnr-eye'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-pencil'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-trash'></span>
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <span className='form-check user-checkbox'>
                              <input className='checkbox_animated check-it' type='checkbox' value='' id='flexCheckDefault3' />
                            </span>
                            <span>
                              <img src='assets/images/users/3.jpg' alt='users' />
                            </span>
                          </td>

                          <td>
                            <a href='javascript:void(0)'>
                              <span className='d-block'>lucy j. Morile</span>
                              <span>Clifton</span>
                            </a>
                          </td>

                          <td> +351-756-654</td>

                          <td>LucyMorile456@gmail.com</td>

                          <td className='font-primary'>Clifton</td>

                          <td>3 Days</td>

                          <td>
                            <ul>
                              <li>
                                <a href='order-detail.html'>
                                  <span className='lnr lnr-eye'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-pencil'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-trash'></span>
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <span className='form-check user-checkbox'>
                              <input className='checkbox_animated check-it' type='checkbox' value='' id='flexCheckDefault4' />
                            </span>
                            <span>
                              <img src='assets/images/users/4.jpg' alt='users' />
                            </span>
                          </td>

                          <td>
                            <a href='javascript:void(0)'>
                              <span className='d-block'>Jennifer A. Straight</span>
                              <span>Brunswick</span>
                            </a>
                          </td>

                          <td> +912-265-1550</td>

                          <td>JenniferAStraight@rhyta.com</td>

                          <td className='font-primary'>Austin Avenue</td>

                          <td>3 Days</td>

                          <td>
                            <ul>
                              <li>
                                <a href='order-detail.html'>
                                  <span className='lnr lnr-eye'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-pencil'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-trash'></span>
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <span className='form-check user-checkbox'>
                              <input className='checkbox_animated check-it' type='checkbox' value='' id='flexCheckDefault5' />
                            </span>
                            <span>
                              <img src='assets/images/users/5.jpg' alt='users' />
                            </span>
                          </td>
                          <td>
                            <a href='javascript:void(0)'>
                              <span className='d-block'>Louise J. Stiles</span>
                              <span>Indianapolis</span>
                            </a>
                          </td>

                          <td> +304-921-8122</td>

                          <td>KevinAMillett@jourrapide.com</td>

                          <td className='font-primary'> Barfield Lane</td>

                          <td>3 Days</td>

                          <td>
                            <ul>
                              <li>
                                <a href='order-detail.html'>
                                  <span className='lnr lnr-eye'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-pencil'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-trash'></span>
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <span className='form-check user-checkbox'>
                              <input className='checkbox_animated check-it' type='checkbox' value='' id='flexCheckDefault7' />
                            </span>
                            <span>
                              <img src='assets/images/users/1.jpg' alt='users' />
                            </span>
                          </td>

                          <td>
                            <a href='javascript:void(0)'>
                              <span className='d-block'>Scott T. Thomas</span>
                              <span>Kotzebue</span>
                            </a>
                          </td>

                          <td> +907-442-8122</td>

                          <td>czxc@packiu.com</td>

                          <td className='font-primary'>Blackwell Street</td>

                          <td>4 Days</td>

                          <td>
                            <ul>
                              <li>
                                <a href='order-detail.html'>
                                  <span className='lnr lnr-eye'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-pencil'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-trash'></span>
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <span className='form-check user-checkbox'>
                              <input className='checkbox_animated check-it' type='checkbox' value='' id='flexCheckDefault8' />
                            </span>
                            <span>
                              <img src='assets/images/users/2.jpg' alt='users' />
                            </span>
                          </td>
                          <td>
                            <a href='javascript:void(0)'>
                              <span className='d-block'>Ricky M. Gaynor</span>
                              <span>Coleraine</span>
                            </a>
                          </td>
                          <td> +218-244-7026</td>

                          <td>KevinAMillett@jourrapide.com</td>

                          <td className='font-primary'>Coleraine</td>

                          <td>10 Days</td>

                          <td>
                            <ul>
                              <li>
                                <a href='order-detail.html'>
                                  <span className='lnr lnr-eye'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-pencil'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-trash'></span>
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <span className='form-check user-checkbox'>
                              <input className='checkbox_animated check-it' type='checkbox' value='' id='flexCheckDefault9' />
                            </span>
                            <span>
                              <img src='assets/images/users/3.jpg' alt='users' />
                            </span>
                          </td>

                          <td>
                            <a href='javascript:void(0)'>
                              <span className='d-block'>Dillon J. Bradshaw</span>
                              <span>Redbud Drive</span>
                            </a>
                          </td>

                          <td> + 347-649-7283</td>

                          <td>DillonJBradshaw@teleworm.us</td>

                          <td className='font-primary'>Long Island City</td>

                          <td>9 Days</td>

                          <td>
                            <ul>
                              <li>
                                <a href='order-detail.html'>
                                  <span className='lnr lnr-eye'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-pencil'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-trash'></span>
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <span className='form-check user-checkbox'>
                              <input className='checkbox_animated check-it' type='checkbox' value='' id='flexCheckDefault0' />
                            </span>
                            <span>
                              <img src='assets/images/users/4.jpg' alt='users' />
                            </span>
                          </td>

                          <td>
                            <a href='javascript:void(0)'>
                              <span className='d-block'>Lorna M. Bonner</span>
                              <span>Broadway Street</span>
                            </a>
                          </td>
                          <td> +843-765-6166</td>

                          <td>LornaMBonner@teleworm.us</td>

                          <td className='font-primary'>Florence</td>

                          <td>6 Days</td>

                          <td>
                            <ul>
                              <li>
                                <a href='order-detail.html'>
                                  <span className='lnr lnr-eye'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-pencil'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-trash'></span>
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <span className='form-check user-checkbox'>
                              <input className='checkbox_animated check-it' type='checkbox' value='' id='flexCheckDefault10' />
                            </span>
                            <span>
                              <img src='assets/images/users/5.jpg' alt='users' />
                            </span>
                          </td>

                          <td>
                            <a href='javascript:void(0)'>
                              <span className='d-block'>Richard A. Johnson</span>
                              <span>Garrett Street</span>
                            </a>
                          </td>

                          <td>+ 267-948-4207</td>

                          <td>RichardAJohnson@rhyta.com</td>

                          <td className='font-primary'>Philadelphia</td>

                          <td>6 Days</td>

                          <td>
                            <ul>
                              <li>
                                <a href='order-detail.html'>
                                  <span className='lnr lnr-eye'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-pencil'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-trash'></span>
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <span className='form-check user-checkbox'>
                              <input className='checkbox_animated check-it' type='checkbox' value='' id='flexCheckDefault11' />
                            </span>
                            <span>
                              <img src='assets/images/users/1.jpg' alt='users' />
                            </span>
                          </td>

                          <td>
                            <a href='javascript:void(0)'>
                              <span className='d-block'>Lorraine D. McDowell</span>
                              <span>Woodland Terrace</span>
                            </a>
                          </td>

                          <td>+ 916-942-7555</td>

                          <td>LorraineDMcDowell@dayrep.com</td>

                          <td className='font-primary'>Fair Oaks</td>

                          <td>7 Days</td>

                          <td>
                            <ul>
                              <li>
                                <a href='order-detail.html'>
                                  <span className='lnr lnr-eye'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-pencil'></span>
                                </a>
                              </li>

                              <li>
                                <a href='javascript:void(0)'>
                                  <span className='lnr lnr-trash'></span>
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table> */}
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
