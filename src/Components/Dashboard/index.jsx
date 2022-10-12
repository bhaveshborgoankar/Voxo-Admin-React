import React from 'react';
const Dashboard = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-6 col-xxl-3 col-lg-6'>
          <div className='b-b-primary border-5 border-0 card o-hidden'>
            <div className='custome-1-bg b-r-4 card-body'>
              <div className='media align-items-center static-top-widget'>
                <div className='media-body p-0'>
                  <span className='m-0'>Total Earnings</span>
                  <h4 className='mb-0 counter'>
                    6659
                    <span className='badge badge-light-primary grow'>
                      <i data-feather='trending-up'></i>8.5%
                    </span>
                  </h4>
                </div>
                <div className='align-self-center text-center'>
                  <i data-feather='database'></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-sm-6 col-xxl-3 col-lg-6'>
          <div className='b-b-danger border-5 border-0 card o-hidden'>
            <div className=' custome-2-bg  b-r-4 card-body'>
              <div className='media static-top-widget'>
                <div className='media-body p-0'>
                  <span className='m-0'>Total Booking</span>
                  <h4 className='mb-0 counter'>
                    9856
                    <span className='badge badge-light-danger grow'>
                      <i data-feather='trending-down'></i>8.5%
                    </span>
                  </h4>
                </div>
                <div className='align-self-center text-center'>
                  <i data-feather='shopping-bag'></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-sm-6 col-xxl-3 col-lg-6'>
          <div className='b-b-secondary border-5 border-0  card o-hidden'>
            <div className=' custome-3-bg b-r-4 card-body'>
              <div className='media static-top-widget'>
                <div className='media-body p-0'>
                  <span className='m-0'>Reviews</span>
                  <h4 className='mb-0 counter'>
                    893
                    <span className='badge badge-light-secondary grow '>
                      <i data-feather='trending-up'></i>8.5%
                    </span>
                  </h4>
                </div>

                <div className='align-self-center text-center'>
                  <i data-feather='message-circle'></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-sm-6 col-xxl-3 col-lg-6'>
          <div className='b-b-success border-5 border-0 card o-hidden'>
            <div className=' custome-4-bg b-r-4 card-body'>
              <div className='media static-top-widget'>
                <div className='media-body p-0'>
                  <span className='m-0'>Total User</span>
                  <h4 className='mb-0 counter'>
                    45631
                    <span className='badge badge-light-success grow'>
                      <i data-feather='trending-down'></i>8.5%
                    </span>
                  </h4>
                </div>

                <div className='align-self-center text-center'>
                  <i data-feather='user-plus'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-4'>
          <div className='card o-hidden card-hover'>
            <div className='card-header border-0 pb-1'>
              <div className='card-header-title'>
                <h4>Earning</h4>
              </div>
            </div>
            <div className='card-body p-0'>
              <div id='bar-chart-earning'></div>
            </div>
          </div>
        </div>
        <div className='col-xl-8'>
          <div className='card o-hidden '>
            <div className='card-header border-0 pb-1'>
              <div className='card-header-title'>
                <h4>Revenue Report</h4>
              </div>
            </div>
            <div className='card-body p-0'>
              <div id='report-chart'></div>
            </div>
          </div>
        </div>
        <div className='col-xxl-4 col-md-6'>
          <div className='card o-hidden card-hover'>
            <div className='card-header border-0'>
              <div className='card-header-title'>
                <h4>Transactions</h4>
              </div>
            </div>

            <div className='card-body pt-0'>
              <div>
                <div className='table-responsive table-desi'>
                  <table className='user-table transactions-table table border-0'>
                    <tbody>
                      <tr>
                        <td>
                          <div className='transactions-icon'>
                            <i data-feather='shield'></i>
                          </div>
                          <div className='transactions-name'>
                            <h6>Wallets</h6>
                            <p>Starbucks</p>
                          </div>
                        </td>

                        <td className='lost'>-$74</td>
                      </tr>
                      <tr>
                        <td className='td-color-1'>
                          <div className='transactions-icon'>
                            <i data-feather='check'></i>
                          </div>
                          <div className='transactions-name'>
                            <h6>Bank Transfer</h6>
                            <p>Add Money</p>
                          </div>
                        </td>

                        <td className='success'>+$125</td>
                      </tr>
                      <tr>
                        <td className='td-color-2'>
                          <div className='transactions-icon'>
                            <i data-feather='dollar-sign'></i>
                          </div>
                          <div className='transactions-name'>
                            <h6>Paypal</h6>
                            <p>Add Money</p>
                          </div>
                        </td>

                        <td className='lost'>-$50</td>
                      </tr>
                      <tr>
                        <td className='td-color-3'>
                          <div className='transactions-icon'>
                            <i data-feather='credit-card'></i>
                          </div>
                          <div className='transactions-name'>
                            <h6>Mastercard</h6>
                            <p>Ordered Food</p>
                          </div>
                        </td>

                        <td className='lost'>-$40</td>
                      </tr>
                      <tr>
                        <td className='td-color-4 pb-0'>
                          <div className='transactions-icon'>
                            <i data-feather='trending-up'></i>
                          </div>
                          <div className='transactions-name'>
                            <h6>Transfer</h6>
                            <p>Refund</p>
                          </div>
                        </td>

                        <td className='success pb-0'>+$90</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xxl-4 col-md-6'>
          <div className='h-100'>
            <div className='card o-hidden card-hover'>
              <div className='card-header border-0'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='card-header-title'>
                    <h4>Visitors</h4>
                  </div>
                </div>
              </div>
              <div className='card-body pt-0'>
                <div className='pie-chart'>
                  <div id='pie-chart-visitors'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xxl-4 col-md-6'>
          <div className='card o-hidden card-hover'>
            <div className='card-header border-0'>
              <div className='card-header-title'>
                <h4>New & Update</h4>
              </div>
            </div>

            <div className='card-body pt-0'>
              <ul className='StepProgress'>
                <li className='StepProgress-item'>
                  <strong>Update Product</strong>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </li>
                <li className='StepProgress-item'>
                  <strong>James liked Nike Shoes</strong>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </li>
                <li className='StepProgress-item'>
                  <strong>john just buy your product</strong>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </li>
                <li className='StepProgress-item'>
                  <strong>Jihan dor just save your product</strong>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-xxl-4 col-md-6'>
          <div className='card o-hidden card-hover'>
            <div className='card-header border-0'>
              <div className='card-header-title'>
                <h4>To Do List</h4>
              </div>
            </div>

            <div className='card-body pt-0'>
              <ul className='to-do-list'>
                <li className='to-do-item'>
                  <div className='form-check user-checkbox'>
                    <input className='checkbox_animated check-it' type='checkbox' value='' id='flexCheckDefault' />
                  </div>
                  <div className='to-do-list-name'>
                    <strong>Pick up kids from school</strong>
                    <p>8 Hours</p>
                  </div>
                </li>
                <li className='to-do-item'>
                  <div className='form-check user-checkbox'>
                    <input className='checkbox_animated check-it' type='checkbox' value='' id='flexCheckDefault1' />
                  </div>
                  <div className='to-do-list-name'>
                    <strong>Prepare or presentation.</strong>
                    <p>8 Hours</p>
                  </div>
                </li>
                <li className='to-do-item'>
                  <div className='form-check user-checkbox'>
                    <input className='checkbox_animated check-it' type='checkbox' value='' id='flexCheckDefault2' />
                  </div>
                  <div className='to-do-list-name'>
                    <strong>Create invoice</strong>
                    <p>8 Hours</p>
                  </div>
                </li>
                <li className='to-do-item'>
                  <div className='form-check user-checkbox'>
                    <input className='checkbox_animated check-it' type='checkbox' value='' id='flexCheckDefault3' />
                  </div>
                  <div className='to-do-list-name'>
                    <strong>Meeting with Alisa</strong>
                    <p>8 Hours</p>
                  </div>
                </li>

                <li className='to-do-item'>
                  <form className='row g-2'>
                    <div className='col-lg-8'>
                      <input type='text' className='form-control' id='name' placeholder='Enter Task Name' />
                    </div>
                    <div className='col-lg-4'>
                      <button type='submit' className='btn btn-primary w-100'>
                        Add task
                      </button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-xxl-4 col-md-6'>
          <div className='card o-hidden card-hover'>
            <div className='card-header border-0'>
              <div className='card-header-title'>
                <h4>Recent Activity</h4>
              </div>
            </div>

            <div className='card-body pt-0'>
              <ul className='recent-activity'>
                <li className='recent-item'>
                  <div className='recent-icon'>
                    <span className='lnr lnr-calendar-full'></span>
                    <p>Calendar Updated</p>
                  </div>

                  <div className='recent-timer'>
                    <h6 className='color-1'>Just Now</h6>
                  </div>
                </li>
                <li className='recent-item'>
                  <div className='recent-icon'>
                    <i data-feather='alert-circle'></i>
                    <p>Commrnted on a post</p>
                  </div>

                  <div className='recent-timer'>
                    <h6 className='color-2'>5 Min</h6>
                  </div>
                </li>
                <li className='recent-item'>
                  <div className='recent-icon'>
                    <i data-feather='truck'></i>
                    <p>Order 392 shipped</p>
                  </div>

                  <div className='recent-timer'>
                    <h6 className='color-3'>12 Min</h6>
                  </div>
                </li>
                <li className='recent-item'>
                  <div className='recent-icon'>
                    <i data-feather='dollar-sign'></i>
                    <p>Invoice 653 has been paid</p>
                  </div>

                  <div className='recent-timer'>
                    <h6 className='color-4'>45 Min</h6>
                  </div>
                </li>
                <li className='recent-item'>
                  <div className='recent-icon'>
                    <span className='lnr lnr-user'></span>
                    <p>A new user has been added</p>
                  </div>

                  <div className='recent-timer'>
                    <h6 className='color-1'>1 Hr</h6>
                  </div>
                </li>
                <li className='recent-item mb-0'>
                  <div className='recent-icon'>
                    <span className='lnr lnr-select'></span>
                    <p>Finace report</p>
                  </div>

                  <div className='recent-timer'>
                    <h6 className='color-2'>Just Now</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-xxl-4 col-md-6'>
          <div className='card o-hidden card-hover'>
            <div className='card-header border-0'>
              <div className='card-header-title'>
                <h4>Browser States</h4>
              </div>
            </div>

            <div className='card-body pt-0'>
              <ul className='brower-states'>
                <li className='brower-item'>
                  <div className='browser-image'>
                    <img src='assets/images/brower-image/chrome.png' className='img-fluid' alt='' />
                    <h5>Chrome</h5>
                  </div>

                  <div className='browser-progressbar'>
                    <h6>84%</h6>
                  </div>
                </li>
                <li className='brower-item'>
                  <div className='browser-image'>
                    <img src='assets/images/brower-image/firefox.png' className='img-fluid' alt='' />
                    <h5>Firefox</h5>
                  </div>

                  <div className='browser-progressbar'>
                    <h6>48%</h6>
                  </div>
                </li>
                <li className='brower-item'>
                  <div className='browser-image'>
                    <img src='assets/images/brower-image/internet-explorer.png' className='img-fluid' alt='' />
                    <h5>internet Explorer</h5>
                  </div>

                  <div className='browser-progressbar'>
                    <h6>35%</h6>
                  </div>
                </li>
                <li className='brower-item'>
                  <div className='browser-image'>
                    <img src='assets/images/brower-image/opera.png' className='img-fluid' alt='' />
                    <h5>Opera Mini</h5>
                  </div>

                  <div className='browser-progressbar'>
                    <h6>55%</h6>
                  </div>
                </li>
                <li className='brower-item'>
                  <div className='browser-image'>
                    <img src='assets/images/brower-image/safari.png' className='img-fluid' alt='' />
                    <h5>Safari</h5>
                  </div>

                  <div className='browser-progressbar'>
                    <h6>20%</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
