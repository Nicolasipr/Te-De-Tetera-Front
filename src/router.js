import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Index from './pages/Index'
import SingleProduct from './pages/SingleProduct'
import ShopGrid from './pages/ShopGrid'
import About from './pages/About'
import Contact from './pages/Contact'

const router = new VueRouter({
  routes: [
    { path: '',
    name: 'index',
    component: Index
  },
    { path: '/about',
      name: 'about',
      component: About
    },
    { path: '/contact',
      name: 'contact',
      component: Contact },
    { path: '/:type',
      name: 'shopGrid',
      component: ShopGrid,
      props: route => ({ type: route.params.type, filter: route.query.f })},
    { path: '/product/:id',
      name: 'product',
      component: SingleProduct, props: true },
  ],
})

export default router