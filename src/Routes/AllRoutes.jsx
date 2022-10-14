import Dashboard from '../Components/Dashboard';
import AllUsers from '../Components/Users/All Users';
import AddNewUsers from '../Components/Users/Add New User';
export const routes = [
  {
    path: '/',
    name: 'dashboard',
    Component: <Dashboard />,
  },
  {
    path: '/all_users',
    name: 'allUsers',
    Component: <AllUsers />,
  },
  {
    path: '/add_new_user',
    name: 'add_new_user',
    Component: <AddNewUsers />,
  },
  //   {
  //     path: '/order_list',
  //     name: 'order_list',
  //     Component: order_list,
  //   },
  //   {
  //     path: '/order_detail',
  //     name: 'order_detail',
  //     Component: order_detail,
  //   },
  //   {
  //     path: '/order_tracking',
  //     name: 'order_tracking',
  //     Component: order_tracking,
  //   },
  //   {
  //     path: '/vendor_list',
  //     name: 'vendor_list',
  //     Component: vendor_list,
  //   },
  //   {
  //     path: '/create_vendor',
  //     name: 'create_vendor',
  //     Component: create_vendor,
  //   },
  //   {
  //     path: '/translation',
  //     name: 'translation',
  //     Component: translation,
  //   },
  //   {
  //     path: '/currency_rate',
  //     name: 'currency_rate',
  //     Component: currency_rate,
  //   },
  //   {
  //     path: '/taxes',
  //     name: 'taxes',
  //     Component: taxes,
  //   },
  //   {
  //     path: '/products',
  //     name: 'products',
  //     Component: products,
  //   },
  //   {
  //     path: '/add_product',
  //     name: 'add_product',
  //     Component: add_product,
  //   },
  //   {
  //     path: '/menu_lists',
  //     name: 'menu_lists',
  //     Component: menu_lists,
  //   },
  //   {
  //     path: '/create_menu',
  //     name: 'create_menu',
  //     Component: create_menu,
  //   },
  //   {
  //     path: '/coupon_list',
  //     name: 'coupon_list',
  //     Component: coupon_list,
  //   },
  //   {
  //     path: '/create_coupon',
  //     name: 'create_coupon',
  //     Component: create_coupon,
  //   },
  //   {
  //     path: '/product_review',
  //     name: 'product_review',
  //     Component: product_review,
  //   },
  //   {
  //     path: '/invoice',
  //     name: 'invoice',
  //     Component: invoice,
  //   },
  //   {
  //     path: '/support_ticket',
  //     name: 'support_ticket',
  //     Component: support_ticket,
  //   },
  //   {
  //     path: '/profile_setting',
  //     name: 'profile_setting',
  //     Component: profile_setting,
  //   },
  //   {
  //     path: '/reports',
  //     name: 'reports',
  //     Component: reports,
  //   },
  //   {
  //     path: '/list_page',
  //     name: 'list_page',
  //     Component: list_page,
  //   },
  //   {
  //     path: '/log_in',
  //     name: 'log_in',
  //     Component: log_in,
  //   },
  //   {
  //     path: '/forgot_password',
  //     name: 'forgot_password',
  //     Component: forgot_password,
  //   },
  //   {
  //     path: '/register',
  //     name: 'register',
  //     Component: register,
  //   },
];
