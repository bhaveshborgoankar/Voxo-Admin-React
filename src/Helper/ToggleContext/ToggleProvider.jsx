import React, { useState } from 'react';
import CreateContextToggle from './index';
import UserImage from '../../assets/images/users/1.jpg';
import { Link } from 'react-router-dom';

const ToggleProvider = (props) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [getProducts, setGetProducts] = useState({
    productimage: <img src={UserImage} className='img-fluid' width={70} alt='' />,
    published: <span className={'lnr lnr-cross-circle'}></span>,
    qty: 1,
    option: (
      <ul>
        <li>
          <Link to={'/order_details'}>
            <span className='lnr lnr-eye'></span>
          </Link>
        </li>
        <li>
          <a href='#javascript'>
            <span className='lnr lnr-pencil'></span>
          </a>
        </li>
        <li>
          <a href='#javascript'>
            <span className='lnr lnr-trash'></span>
          </a>
        </li>
      </ul>
    ),
  });

  return <CreateContextToggle.Provider value={{ ...props, sidebarToggle, getProducts, setGetProducts, setSidebarToggle }}>{props.children}</CreateContextToggle.Provider>;
};
export default ToggleProvider;
