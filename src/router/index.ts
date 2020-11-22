import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/todoList',
    name: 'TodoList',
    component: () => import('../views/TodoList.vue')
  },
  {
    path: '/todoList2',
    name: 'TodoList2',
    component: () => import('../views/TodoList2.vue'),
    children: [{
      path: '',
      redirect: { name: 'add' }
    }, {
      path: '/add',
      name: 'add',
      component: () => import('@/components/Add.vue')
    }, {
      path: '/done',
      name: 'done',
      component: () => import('@/components/Done.vue')
    }, {
      path: '/delete',
      name: 'delete',
      component: () => import('@/components/Delete.vue')
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 激活增加active类
  linkExactActiveClass: 'active'
})

export default router
