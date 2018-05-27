import Vue from 'vue'
import Router from 'vue-router'

import ErrorPage from '@/components/404'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Password from '@/components/Password'

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
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      component: ErrorPage,
      name: 'ErrorPage'
    },
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      component: Dashboard,
      name: 'Dashboard'
    },
    {
      path: '/about',
      component: About,
      name: 'About'
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
      path: '/logout',
      beforeEnter(to, from, next) {
        auth.logout()
        next('/dashboard')
      }
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
