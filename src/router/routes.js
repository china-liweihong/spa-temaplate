export default [
  {
    path: '',
    redirect: '/index'
  },

  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index.vue'),
    meta: { auth: true, title: '首页' }
  },

  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue'),
    meta: { auth: true, title: '404' }
  }
];
