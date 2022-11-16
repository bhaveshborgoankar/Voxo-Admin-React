import Dashboard from '../Components/Dashboard';
import AllUsers from '../Components/Users/All Users';
import AddNewUsers from '../Components/Users/Add New User';
import OrderListContain from '../Components/Orders/OrderList';
import OrderDetails from '../Components/Orders/OrderDetails';
import OrderTraching from '../Components/Orders/OrderTracking';
import Venderlist from '../Components/Venders/Venderlist';
import CreateVender from '../Components/Venders/CreateVendor';
import Products from '../Components/Products/Product';
import AddnewProductsContain from '../Components/Products/AddNewProducts';
import Translation from '../Components/Localization/Translation';
import CurrencyRate from '../Components/Localization/CurrencyRate';
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
  {
    path: '/order_list',
    name: 'order_list',
    Component: <OrderListContain />,
  },
  {
    path: '/order_detail',
    name: 'order_detail',
    Component: <OrderDetails />,
  },
  {
    path: '/order_tracking',
    name: 'order_tracking',
    Component: <OrderTraching />,
  },
  {
    path: '/vendor_list',
    name: 'vendor_list',
    Component: <Venderlist />,
  },
  {
    path: '/create_vendor',
    name: 'create_vendor',
    Component: <CreateVender />,
  },
  {
    path: '/translation',
    name: 'translation',
    Component: <Translation />,
  },
  {
    path: '/currency_rate',
    name: 'currency_rate',
    Component: <CurrencyRate />,
  },
  //   {
  //     path: '/taxes',
  //     name: 'taxes',
  //     Component: taxes,
  //   },
  {
    path: '/products',
    name: 'products',
    Component: <Products />,
  },
  {
    path: '/add_product',
    name: 'add_product',
    Component: <AddnewProductsContain />,
  },
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
