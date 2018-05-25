import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import ErrorPage from '@/components/404'

import auth from '@/utils/auth'

Vue.use(Router)

function requireAuth(to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

// const debug = process.env.NODE_ENV !== 'production'

export default new Router({
  base: __dirname,
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/404', component: ErrorPage, name: 'ErrorPage' },
    {
      path: '/dashboard',
      component: Dashboard,
      name: 'Dashboard',
      beforeEnter: requireAuth
    },
    {
      path: '/about',
      component: About,
      name: 'About',
      beforeEnter: requireAuth
    },
    {
      path: '/home',
      component: Home,
      name: 'Home',
      beforeEnter: requireAuth
    },
    {
      path: '/contact',
      component: Contact,
      name: 'Contact'
    },
    {
      path: '/login',
      component: Login,
      name: 'Login'
    },
    {
      path: '/logout',
      beforeEnter(to, from, next) {
        auth.logout()
        next('/login')
      }
    },
    { path: '/', redirect: '/dashboard' },
    { path: '*', redirect: '/404' }
  ]
  // meta: {
  //   progress: {
  //     func: [
  //       { call: 'color', modifier: 'temp', argument: '#ffb000' },
  //       { call: 'fail', modifier: 'temp', argument: '#6e0000' },
  //       { call: 'location', modifier: 'temp', argument: 'top' },
  //       {
  //         call: 'transition',
  //         modifier: 'temp',
  //         argument: { speed: '1.5s', opacity: '0.6s', termination: 400 }
  //       }
  //     ]
  //   }
  // }
})
