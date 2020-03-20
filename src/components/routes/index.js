import { SignInSide, Dash, NoMatch, Home, Products, Product } from '../index';


const routes = [
  {
    path: '/',
    component: Home,
    roles: ['ADMIN', 'USERDEFAULT', 'USERMASTER'],
    permissions: ['READ_HOME'],
    private: true
  },
  {
    path: '/dash',
    component: Dash,
    roles: ['ADMIN', 'USERDEFAULT', 'USERMASTER'],
    permissions: ['READ_DASH'],
    private: true
  },
  {
    path: '/products',
    component: Products,
    roles: ['ADMIN', 'USERMASTER'],
    permissions: ['READ_PRODUCTS'],
    private: true
  },
  {
    path: '/products/:id',
    component: Product,
    roles: ['ADMIN', 'USERMASTER'],
    permissions: ['EDIT_PRODUCT'],
    private: true
  },
  {
    path: '/products/add',
    component: Product,
    roles: ['ADMIN', 'USERMASTER'],
    permissions: ['CREATE_PRODUCT'],
    private: true
  },
  {
    path: '*',
    component: NoMatch,
    roles: [],
    permissions: [],
    private: true
  },
  {
    path: '/login',
    component: SignInSide,
    roles: [],
    permissions: [],
    private: false
  },
]

export default routes;