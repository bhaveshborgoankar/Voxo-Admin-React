import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import TapTop from './TapTop';
const MainLayout = () => {
  return (
    <>
      <TapTop />
      <div className='page-wrapper compact-wrapper dark-sidebar' id='pageWrapper'>
        <Header />
        <div className='page-body-wrapper'>
          <Sidebar />
          <div className='page-body'>
            {/* <div> */}
            <Outlet />
            {/* </div> */}

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default MainLayout;
