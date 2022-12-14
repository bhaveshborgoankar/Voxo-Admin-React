import React, { useContext } from 'react';
import { Grid } from 'react-feather';
import WhiteLogo from '../../assets/images/logo/logo-white.png';
import MainLogo from '../../assets/images/logo/logo.png';
import CreateContextToggle from '../../Helper/ToggleContext';
import SidebarNav from './SidebarNav';
const Sidebar = () => {
  const { sidebarToggle, setSidebarToggle } = useContext(CreateContextToggle);
  return (
    <div className={`sidebar-wrapper ${sidebarToggle ? 'close_icon' : ''}`}>
      <div>
        <div className='logo-wrapper logo-wrapper-center'>
          <a href='#javascript'>
            <img className='img-fluid for-dark' src={WhiteLogo} alt='' />
          </a>
          <div className='back-btn'>
            <i className='fa fa-angle-left'></i>
          </div>
          <div className='toggle-sidebar'>
            <Grid className='status_toggle middle sidebar-toggle' onClick={() => setSidebarToggle(!sidebarToggle)} />
          </div>
        </div>
        <div className='logo-icon-wrapper'>
          <a href='#javascript'>
            <img className='img-fluid main-logo' src={MainLogo} alt='logo' />
          </a>
        </div>
        <SidebarNav />
      </div>
    </div>
  );
};
export default Sidebar;
