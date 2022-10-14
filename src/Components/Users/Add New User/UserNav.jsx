import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Account, Permission } from '../../../Constant';
const UserNav = () => {
  return (
    <Nav className='nav-pills mb-3' id='pills-tab' role='tablist'>
      <NavItem>
        <NavLink className='active'>{Account}</NavLink>
      </NavItem>
      <NavItem role='presentation'>
        <NavLink>{Permission}</NavLink>
      </NavItem>
    </Nav>
  );
};
export default UserNav;
