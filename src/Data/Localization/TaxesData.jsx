import { Link } from 'react-router-dom';

export const TaxesHeading = [
  {
    name: 'Tax Detail',
    selector: (row) => row.taxdetail,
  },
  {
    name: 'Tax Schedule',
    selector: (row) => row.taxschedule,
  },
  {
    name: 'Tax Rate',
    selector: (row) => row.taxrate,
  },
  {
    name: 'Total Tax Amount',
    selector: (row) => row.Totaltaxamount,
  },
  {
    name: 'Options',
    selector: (row) => row.option,
  },
];

export const TaxesData = [
  {
    taxdetail: 'USASTE-PS6N0',
    taxschedule: (
      <>
        USASTCITY-6 <span class='theme-color'>*</span>
      </>
    ),
    taxrate: '10%',
    Totaltaxamount: '15.24',
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
  },
  {
    taxdetail: 'USASTE-PS6N0',
    taxschedule: (
      <>
        USASTCITY-6 <span className='theme-color'>*</span>
      </>
    ),
    taxrate: '18%',
    Totaltaxamount: '5.29',
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
  },
  {
    taxdetail: 'USASTE-PS6N0',
    taxschedule: (
      <>
        USASTCITY-6 <span class='theme-color'>*</span>
      </>
    ),
    taxrate: '25%',
    Totaltaxamount: '4.78',
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
  },
  {
    taxdetail: 'USASTE-PS6N0',
    taxschedule: (
      <>
        USASTCITY-6 <span class='theme-color'>*</span>
      </>
    ),
    taxrate: '40%',
    Totaltaxamount: '3.20',
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
  },
  {
    taxdetail: 'USASTE-PS6N0',
    taxschedule: (
      <>
        USASTCITY-6 <span class='theme-color'>*</span>
      </>
    ),
    taxrate: '80%',
    Totaltaxamount: '8.4',
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
  },
  {
    taxdetail: 'USASTE-PS6N0',
    taxschedule: (
      <>
        USASTCITY-6 <span class='theme-color'>*</span>
      </>
    ),
    taxrate: '80%',
    Totaltaxamount: '8.4',
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
  },
];
