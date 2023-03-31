import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cccbb332 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _1432e5f6 = () => interopDefault(import('..\\pages\\basicPlan\\index.vue' /* webpackChunkName: "pages/basicPlan/index" */))
const _9d234504 = () => interopDefault(import('..\\pages\\businessPlan\\index.vue' /* webpackChunkName: "pages/businessPlan/index" */))
const _586a3333 = () => interopDefault(import('..\\pages\\permiumPlan\\index.vue' /* webpackChunkName: "pages/permiumPlan/index" */))
const _2eb4dfaa = () => interopDefault(import('..\\pages\\success\\index.vue' /* webpackChunkName: "pages/success/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/en",
    component: _cccbb332,
    name: "index___en"
  }, {
    path: "/fa",
    component: _cccbb332,
    name: "index___fa"
  }, {
    path: "/en/basicPlan",
    component: _1432e5f6,
    name: "basicPlan___en"
  }, {
    path: "/en/businessPlan",
    component: _9d234504,
    name: "businessPlan___en"
  }, {
    path: "/en/permiumPlan",
    component: _586a3333,
    name: "permiumPlan___en"
  }, {
    path: "/en/success",
    component: _2eb4dfaa,
    name: "success___en"
  }, {
    path: "/fa/basicPlan",
    component: _1432e5f6,
    name: "basicPlan___fa"
  }, {
    path: "/fa/businessPlan",
    component: _9d234504,
    name: "businessPlan___fa"
  }, {
    path: "/fa/permiumPlan",
    component: _586a3333,
    name: "permiumPlan___fa"
  }, {
    path: "/fa/success",
    component: _2eb4dfaa,
    name: "success___fa"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
