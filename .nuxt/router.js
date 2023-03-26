import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cccbb332 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _28c4d427 = () => interopDefault(import('..\\pages\\Pricing\\index.vue' /* webpackChunkName: "pages/Pricing/index" */))
const _2eb4dfaa = () => interopDefault(import('..\\pages\\success\\index.vue' /* webpackChunkName: "pages/success/index" */))
const _18c62036 = () => interopDefault(import('..\\pages\\Pricing\\basicPlan\\index.vue' /* webpackChunkName: "pages/Pricing/basicPlan/index" */))
const _1a75fb3e = () => interopDefault(import('..\\pages\\Pricing\\businessPlan\\index.vue' /* webpackChunkName: "pages/Pricing/businessPlan/index" */))
const _f5d0451a = () => interopDefault(import('..\\pages\\Pricing\\permiumPlan\\index.vue' /* webpackChunkName: "pages/Pricing/permiumPlan/index" */))

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
    path: "/en/Pricing",
    component: _28c4d427,
    name: "Pricing___en"
  }, {
    path: "/en/success",
    component: _2eb4dfaa,
    name: "success___en"
  }, {
    path: "/fa/Pricing",
    component: _28c4d427,
    name: "Pricing___fa"
  }, {
    path: "/fa/success",
    component: _2eb4dfaa,
    name: "success___fa"
  }, {
    path: "/en/Pricing/basicPlan",
    component: _18c62036,
    name: "Pricing-basicPlan___en"
  }, {
    path: "/en/Pricing/businessPlan",
    component: _1a75fb3e,
    name: "Pricing-businessPlan___en"
  }, {
    path: "/en/Pricing/permiumPlan",
    component: _f5d0451a,
    name: "Pricing-permiumPlan___en"
  }, {
    path: "/fa/Pricing/basicPlan",
    component: _18c62036,
    name: "Pricing-basicPlan___fa"
  }, {
    path: "/fa/Pricing/businessPlan",
    component: _1a75fb3e,
    name: "Pricing-businessPlan___fa"
  }, {
    path: "/fa/Pricing/permiumPlan",
    component: _f5d0451a,
    name: "Pricing-permiumPlan___fa"
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
