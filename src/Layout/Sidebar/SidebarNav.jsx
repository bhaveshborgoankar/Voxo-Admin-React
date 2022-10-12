import React from 'react';
import { ArrowLeft } from 'react-feather';
import { AllMenus } from './Menus';
const SidebarNav = () => {
  return (
    <nav className='sidebar-main'>
      <div className='left-arrow' id='left-arrow'>
        <ArrowLeft />
      </div>

      <div id='sidebar-menu'>
        <ul className='sidebar-links' id='simple-bar'>
          <li className='back-btn'></li>
          {AllMenus.map((elem) => {
            return (
              <>
                {elem.mainClasses ? (
                  <li className={elem.mainClasses ? elem.mainClasses : 'sidebar-list'}>
                    <div>
                      <h6 className='lan-1'>{elem.name}</h6>
                      <p className='lan-2'>{elem.subHeading}</p>
                    </div>
                  </li>
                ) : (
                  <>
                    <li className='sidebar-list'>
                      <a className='sidebar-link sidebar-title link-nav' href='#javascript'>
                        {elem.icon}
                        <span>{elem.name}</span>
                      </a>
                    </li>
                    <ul className='sidebar-submenu'>
                      {elem?.children?.map((item) => {
                        return (
                          <>
                            <li>
                              <a href='all-users.html'>{item.name}</a>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </>
                )}
              </>
            );
          })}
          {/* <li className='sidebar-main-title sidebar-main-title-3'>
            <div>
              <h6 className='lan-1'>General</h6>
              <p className='lan-2'>Dashboards &amp; Users.</p>
            </div>
          </li>

          <li className='sidebar-list'>
            <a className='sidebar-link sidebar-title link-nav' href='index.html'>
              <i data-feather='home'></i>
              <span>Dashboard</span>
            </a>
          </li>

          <li className='sidebar-list'>
            <a className='sidebar-link sidebar-title' href='#javascript'>
              <i data-feather='users'></i>
              <span>Users</span>
            </a>
            <ul className='sidebar-submenu'>
              <li>
                <a href='all-users.html'>All users</a>
              </li>
              <li>
                <a href='add-new-user.html'>Add new user</a>
              </li>
            </ul>
          </li>

          <li className='sidebar-main-title sidebar-main-title-2'>
            <div>
              <h6 className='lan-1'>Application</h6>
              <p className='lan-2'>Ready To Use Apps</p>
            </div>
          </li>

          <li className='sidebar-list'>
            <a className='sidebar-link sidebar-title' href='#javascript'>
              <i data-feather='archive'></i>
              <span>Orders</span>
            </a>
            <ul className='sidebar-submenu'>
              <li>
                <a href='order-list.html'>Order List</a>
              </li>
              <li>
                <a href='order-detail.html'>Order Detail</a>
              </li>
              <li>
                <a href='order-tracking.html'>Order Tracking</a>
              </li>
            </ul>
          </li>

          <li className='sidebar-list'>
            <a className='linear-icon-link sidebar-link sidebar-title' href='#javascript'>
              <i data-feather='users'></i>
              <span>Venders</span>
            </a>
            <ul className='sidebar-submenu'>
              <li>
                <a href='vendor-list.html'>Vendor List</a>
              </li>

              <li>
                <a href='create-vendor.html'>Create Vendor</a>
              </li>
            </ul>
          </li>

          <li className='sidebar-list'>
            <a className='linear-icon-link sidebar-link sidebar-title' href='#javascript'>
              <i data-feather='users'></i>
              <span>Localization</span>
            </a>
            <ul className='sidebar-submenu'>
              <li>
                <a href='translation.html'>Translation</a>
              </li>

              <li>
                <a href='currency-rates.html'>Currency Rates</a>
              </li>

              <li>
                <a href='taxes.html'>Taxes</a>
              </li>
            </ul>
          </li>

          <li className='sidebar-list'>
            <a className='linear-icon-link sidebar-link sidebar-title' href='#javascript'>
              <i data-feather='box'></i>
              <span>Product</span>
            </a>
            <ul className='sidebar-submenu'>
              <li>
                <a href='products.html'>Prodcts</a>
              </li>

              <li>
                <a href='add-new-product.html'>Add New Products</a>
              </li>
            </ul>
          </li>

          <li className='sidebar-list'>
            <a className='linear-icon-link sidebar-link sidebar-title' href='#javascript'>
              <i data-feather='align-left'></i>
              <span>Menus</span>
            </a>
            <ul className='sidebar-submenu'>
              <li>
                <a href='menu-lists.html'>Menu Lists</a>
              </li>

              <li>
                <a href='create-menu.html'>Create Menu</a>
              </li>
            </ul>
          </li>

          <li className='sidebar-list'>
            <a className='linear-icon-link sidebar-link sidebar-title' href='#javascript'>
              <i data-feather='tag'></i>
              <span>Coupons</span>
            </a>
            <ul className='sidebar-submenu'>
              <li>
                <a href='coupon-list.html'>Coupon List</a>
              </li>

              <li>
                <a href='create-coupon.html'>Create Coupon</a>
              </li>
            </ul>
          </li>

          <li className='sidebar-list'>
            <a className='sidebar-link sidebar-title link-nav' href='product-review.html'>
              <i data-feather='star'></i>
              <span>Product Review</span>
            </a>
          </li>

          <li className='sidebar-list'>
            <a className='sidebar-link sidebar-title link-nav' href='invoice.html'>
              <i data-feather='archive'></i>
              <span>Invoice</span>
            </a>
          </li>

          <li className='sidebar-list'>
            <a className='sidebar-link sidebar-title link-nav' href='support-ticket.html'>
              <i data-feather='phone'></i>
              <span>Support Ticket</span>
            </a>
          </li>

          <li className='sidebar-list'>
            <a className='linear-icon-link sidebar-link sidebar-title' href='#javascript'>
              <i data-feather='settings'></i>
              <span>Settings</span>
            </a>
            <ul className='sidebar-submenu'>
              <li>
                <a href='profile-setting.html'>Profile Setting</a>
              </li>
            </ul>
          </li>

          <li className='sidebar-list'>
            <a className='sidebar-link sidebar-title link-nav' href='reports.html'>
              <i data-feather='file-text'></i>
              <span>Reports</span>
            </a>
          </li>

          <li className='sidebar-list'>
            <a className='sidebar-link sidebar-title link-nav' href='list-page.html'>
              <i data-feather='list'></i>
              <span>List Page</span>
            </a>
          </li>

          <li className='sidebar-list'>
            <a className='sidebar-link sidebar-title link-nav' href='login.html'>
              <i data-feather='log-in'></i>
              <span>Log In</span>
            </a>
          </li>

          <li className='sidebar-list'>
            <a className='sidebar-link sidebar-title link-nav' href='forgot-password.html'>
              <i data-feather='key'></i>
              <span>Forgot Password</span>
            </a>
          </li>

          <li className='sidebar-list'>
            <a className='sidebar-link sidebar-title link-nav' href='sign-up.html'>
              <i data-feather='plus-circle'></i>
              <span>Register</span>
            </a>
          </li> */}
        </ul>
      </div>
      <div className='right-arrow' id='right-arrow'>
        <i data-feather='arrow-right'></i>
      </div>
    </nav>
  );
};
export default SidebarNav;
