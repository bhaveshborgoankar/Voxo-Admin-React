import user1 from '../../assets/images/users/1.jpg';
import user2 from '../../assets/images/users/2.jpg';
import user3 from '../../assets/images/users/3.jpg';
import user4 from '../../assets/images/users/4.jpg';
import user5 from '../../assets/images/users/5.jpg';
export const AllUserColumn = [
  {
    selector: (row) => row.user,
    name: 'User',
  },
  {
    selector: (row) => row.name,
    name: 'Name',
  },
  {
    selector: (row) => row.phone,
    name: 'Phone',
  },
  {
    selector: (row) => row.email,
    name: 'Email',
  },
  {
    selector: (row) => row.country,
    name: 'Country',
  },
  {
    selector: (row) => row.lastlogin,
    name: 'Last Login',
  },
  {
    selector: (row) => row.options,
    name: 'Options',
  },
];
export const AllUserData = [
  {
    user: <img src={user1} alt='users' height={45} width={45} />,
    name: (
      <a href='#javascript'>
        <span className='d-block '>Lorraine D. McDowell</span>
        <span>Essex Court</span>
      </a>
    ),
    phone: '+255-485-2430',
    email: 'LorraineDMcDowell@dayrep.com',
    country: 'Denver',
    lastlogin: '3 Days',
    options: (
      <ul className='d-flex'>
        <li>
          <a href='order-detail.html'>
            <span className='lnr lnr-eye'></span>
          </a>
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
    user: <img src={user2} alt='users' height={45} width={45} />,
    name: (
      <a href='#javascript'>
        <span className='d-block '>Caroline L. Harris</span>
        <span>Essex Court</span>
      </a>
    ),
    phone: '+158-963-2430',
    email: 'CarolineLHarris@rhyta.com',
    country: 'Clifton',
    lastlogin: '10 Days',
    options: (
      <ul className='d-flex'>
        <li>
          <a href='order-detail.html'>
            <span className='lnr lnr-eye'></span>
          </a>
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
    user: <img src={user4} alt='users' height={45} width={45} />,
    name: (
      <a href='#javascript'>
        <span className='d-block '>lucy j. Morile</span>
        <span>Essex Court</span>
      </a>
    ),
    phone: '+963-147-2430',
    email: 'LucyMorile456@gmail.com',
    country: 'Austin Avenue',
    lastlogin: '10 Days',
    options: (
      <ul className='d-flex'>
        <li>
          <a href='order-detail.html'>
            <span className='lnr lnr-eye'></span>
          </a>
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
    user: <img src={user5} alt='users' height={45} width={45} />,
    name: (
      <a href='#javascript'>
        <span className='d-block '>Lorna M. Bonner</span>
        <span>Essex Court</span>
      </a>
    ),
    phone: '+023-638-2430',
    email: 'KevinAMillett@jourrapide.com',
    country: 'Barfield Lane',
    lastlogin: '6 Days',
    options: (
      <ul className='d-flex'>
        <li>
          <a href='order-detail.html'>
            <span className='lnr lnr-eye'></span>
          </a>
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
    user: <img src={user1} alt='users' height={45} width={45} />,
    name: (
      <a href='#javascript'>
        <span className='d-block '>Jennifer A. Straight</span>
        <span>Essex Court</span>
      </a>
    ),
    phone: '+978-321-2430',
    email: 'JenniferAStraight@rhyta.com',
    country: 'Blackwell Street',
    lastlogin: '7 Days',
    options: (
      <ul className='d-flex'>
        <li>
          <a href='order-detail.html'>
            <span className='lnr lnr-eye'></span>
          </a>
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
    user: <img src={user3} alt='users' height={45} width={45} />,
    name: (
      <a href='#javascript'>
        <span className='d-block '>Louise J. Stiles</span>
        <span>Essex Court</span>
      </a>
    ),
    phone: '+800-002-2430',
    email: 'KevinAMillett@jourrapide.com',
    country: 'Coleraine',
    lastlogin: '5 Days',
    options: (
      <ul className='d-flex'>
        <li>
          <a href='order-detail.html'>
            <span className='lnr lnr-eye'></span>
          </a>
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
    user: <img src={user2} alt='users' height={45} width={45} />,
    name: (
      <a href='#javascript'>
        <span className='d-block '>Caroline L. Harris</span>
        <span>Essex Court</span>
      </a>
    ),
    phone: '+786-325-2430',
    email: 'czxc@packiu.com',
    country: 'Long Island City',
    lastlogin: '7 Days',
    options: (
      <ul className='d-flex'>
        <li>
          <a href='order-detail.html'>
            <span className='lnr lnr-eye'></span>
          </a>
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
    user: <img src={user1} alt='users' height={45} width={45} />,
    name: (
      <a href='#javascript'>
        <span className='d-block'>Richard A. Johnson</span>
        <span>Essex Court</span>
      </a>
    ),
    phone: '+120-203-2430',
    email: 'RichardJohnson@rhyta.com',
    country: 'Florence',
    lastlogin: '12 Days',
    options: (
      <ul className='d-flex'>
        <li>
          <a href='order-detail.html'>
            <span className='lnr lnr-eye'></span>
          </a>
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
    user: <img src={user5} alt='users' height={45} width={45} />,
    name: (
      <a href='#javascript'>
        <span className='d-block '>Lorraine D. McDowell</span>
        <span>Essex Court</span>
      </a>
    ),
    phone: '+500-630-2430',
    email: 'Lorraineradshaw@teleworm.us',
    country: 'Philadelphia',
    lastlogin: '13 Days',
    options: (
      <ul className='d-flex'>
        <li>
          <a href='order-detail.html'>
            <span className='lnr lnr-eye'></span>
          </a>
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
    user: <img src={user4} alt='users' height={45} width={45} />,
    name: (
      <a href='#javascript'>
        <span className='d-block '>Dillon J. Bradshaw</span>
        <span>Essex Court</span>
      </a>
    ),
    phone: '+120-362-2430',
    email: 'EverettCGreen@rhyta.com',
    country: 'Fair Oaks',
    lastlogin: '1 Day',
    options: (
      <ul className='d-flex'>
        <li>
          <a href='order-detail.html'>
            <span className='lnr lnr-eye'></span>
          </a>
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
    user: <img src={user3} alt='users' height={45} width={45} />,
    name: (
      <a href='#javascript'>
        <span className='d-block '>Caroline L. Harris</span>
        <span>Essex Court</span>
      </a>
    ),
    phone: '+802-370-2430',
    email: 'EverettCGreen@rhyta.com',
    country: 'America',
    lastlogin: '12 Day',
    options: (
      <ul className='d-flex'>
        <li>
          <a href='order-detail.html'>
            <span className='lnr lnr-eye'></span>
          </a>
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

export const AccountData = [
  {
    id: 1,
    title: 'Product Related Permission',
    child: [
      { id: 1, subTitle: 'Add Product', span1: 'Allow', span2: 'Deny', name: 'opinion' },
      { id: 2, subTitle: 'Update Product', span1: 'Allow', span2: 'Deny', name: 'Update' },
      { id: 3, subTitle: 'Delete Product', span1: 'Allow', span2: 'Deny', name: 'Update' },
      { id: 4, subTitle: 'Apply Product', span1: 'Allow', span2: 'Deny', name: 'Update' },
    ],
  },
  {
    id: 2,
    title: 'Category Related Permission',
    child: [
      { id: 1, subTitle: 'Add Product', span1: 'Allow', span2: 'Deny', name: 'opinion' },
      { id: 2, subTitle: 'Update Product', span1: 'Allow', span2: 'Deny', name: 'Update' },
      { id: 3, subTitle: 'Delete Product', span1: 'Allow', span2: 'Deny', name: 'Update' },
      { id: 4, subTitle: 'Apply Product', span1: 'Allow', span2: 'Deny', name: 'Update' },
    ],
  },
];
