import Vue from 'vue'
import Router from 'vue-router'

import ErrorPage from '@/components/404'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Password from '@/components/Password'
import Player from '@/components/Player'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Dashboard from '@/pages/Dashboard'

import auth from '@/utils/auth'

Vue.use(Router)

function requireAuth(to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
}

// const debug = process.env.NODE_ENV !== 'production'

export default new Router({
  base: __dirname,
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
      path: '/404',
      component: ErrorPage,
      name: 'ErrorPage'
    },
    {
      path: '/login',
      component: Login,
      name: 'Login'
    },
    {
      path: '/signup',
      component: Signup,
      name: 'Signup'
    },
    {
      path: '/password',
      component: Password,
      name: 'Password'
    },
    {
      path: '/home',
      component: Home,
      name: 'Home',
      beforeEnter: requireAuth
    },
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
      path: '/contact',
      component: Contact,
      name: 'Contact'
    },
    {
      path: '/player',
      component: Player,
      name: 'Player'
    },
    {
      path: '/logout',
      beforeEnter(to, from, next) {
        auth.logout()
        next('/login')
      }
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/404'
    }
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
