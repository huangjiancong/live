import Vue from 'vue'
import Router from 'vue-router'
import vueInstall from './vueInstall';

Vue.use(Router)
Vue.use(vueInstall)

// route-level code splitting
const index = r => require(['../views/index.vue'], r)
const productDetails = r => require(['../views/productDetails.vue'], r)
const courseFilterList = r => require(['../views/courseFilterList.vue'], r)

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    // scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: '/',
        name: 'index',
        component: index
      },
      {
        path: '/productDetails/:courseId?',
        name: 'productDetails',
        component: productDetails
      },
      {
        path: '/courseFilterList/:grade?/:subject?',
        name: 'courseFilterList',
        component: courseFilterList
      }


    ]
  })
}


