export const AllMenus = [
  {
    name: 'General',
    subHeading: 'Dashboard & Users',
    type: 'title',
    title: true,
    application: true,
    mainClasses: 'sidebar-main-title sidebar-main-title-3',
    class: 'sidebar-link sidebar-title link-nav',
  },
  {
    name: 'Dashboard',
    path: '/',
    type: 'link',
    icon: 'home',
  },
  {
    name: 'Users',
    active: false,
    icon: 'users',
    children: [
      {
        name: 'All users',
        path: '/all_users',
        type: 'link',
      },
      {
        name: 'Add new user',
        path: '/add_new_user',
        type: 'link',
      },
    ],
  },
  {
    name: 'Application',
    subHeading: 'Ready To Use Apps',
    type: 'title',
    mainClasses: 'sidebar-main-title sidebar-main-title-2',
    class: 'sidebar-main-title sidebar-main-title-2',
    application: true,
  },
  {
    name: 'Orders',
    icon: 'archive',
    active: false,
    children: [
      {
        name: 'Order List',
        path: '/order_list',
        type: 'link',
      },
      {
        name: 'Order Detail',
        path: '/order_detail',
        type: 'link',
      },
      {
        name: 'Order Tracking',
        path: '/order_tracking',
        type: 'link',
      },
    ],
  },
  {
    name: 'Vendors',
    icon: 'users',
    active: false,
    children: [
      {
        name: 'Vendor List',
        path: '/vendor_list',
        type: 'link',
      },
      {
        name: 'Create Vendor',
        path: '/create_vendor',
        type: 'link',
      },
    ],
  },
  {
    name: 'Localization',
    icon: 'users',
    active: false,
    children: [
      {
        name: 'Translation',
        path: '/translation',
        type: 'link',
      },
      {
        name: 'Currency Rate',
        path: '/currency_rate',
        type: 'link',
      },
      {
        name: 'Taxes',
        path: '/taxes',
        type: 'link',
      },
    ],
  },
  {
    name: 'Product',
    icon: 'box',
    active: false,
    children: [
      {
        name: 'Products',
        path: '/products',
        type: 'link',
      },
      {
        name: 'Add New Products',
        path: '/add_product',
        type: 'link',
      },
    ],
  },
  {
    name: 'Menus',
    icon: 'align-left',
    active: false,
    children: [
      {
        name: 'Menu Lists',
        path: '/menu_lists',
        type: 'link',
      },
      {
        name: 'Create Menu',
        path: '/create_menu',
        type: 'link',
      },
    ],
  },
  {
    name: 'Coupons',
    icon: 'tag',
    active: false,
    children: [
      {
        name: 'Coupon List',
        path: '/coupon_list',
        type: 'link',
      },
      {
        name: 'Create Coupon',
        path: '/create_coupon',
        type: 'link',
      },
    ],
  },
  {
    icon: 'star',
    name: 'Product Review',
    path: '/product_review',
    type: 'link',
  },
  {
    icon: 'archive',
    name: 'Invoice',
    path: '/invoice',
    type: 'link',
  },
  {
    icon: 'phone',
    name: 'Support Ticket',
    path: 'support_ticket',
    type: 'hyperlink',
  },
  {
    name: 'Settings',
    icon: 'settings',
    active: false,
    children: [
      {
        name: 'Profile Setting',
        path: '/profile_setting',
        type: 'link',
      },
    ],
  },
  {
    name: 'Reports',
    icon: 'file-text',
    path: '/reports',
    type: 'link',
  },
  {
    name: 'List Page',
    icon: 'list',
    path: '/list_page',
    type: 'link',
  },
  {
    name: 'Log In',
    icon: 'log-in',
    path: '/log_in',
    type: 'link',
  },
  {
    name: 'Forgot Password',
    icon: 'key',
    path: '/forgot_password',
    type: 'link',
  },
  {
    name: 'Register',
    icon: 'plus-circle',
    path: '/register',
    type: 'link',
  },
];
