export const PageComponentsAuthTheLogin = () => import('../..\\components\\pageComponents\\Auth\\TheLogin.vue' /* webpackChunkName: "components/page-components-auth-the-login" */).then(c => wrapFunctional(c.default || c))
export const PageComponentsMainBasicPlan = () => import('../..\\components\\pageComponents\\Main\\basicPlan.vue' /* webpackChunkName: "components/page-components-main-basic-plan" */).then(c => wrapFunctional(c.default || c))
export const PageComponentsMainBusinessPlan = () => import('../..\\components\\pageComponents\\Main\\businessPlan.vue' /* webpackChunkName: "components/page-components-main-business-plan" */).then(c => wrapFunctional(c.default || c))
export const PageComponentsMainPermiumPlan = () => import('../..\\components\\pageComponents\\Main\\permiumPlan.vue' /* webpackChunkName: "components/page-components-main-permium-plan" */).then(c => wrapFunctional(c.default || c))
export const PageComponentsMainSuccessPage = () => import('../..\\components\\pageComponents\\Main\\successPage.vue' /* webpackChunkName: "components/page-components-main-success-page" */).then(c => wrapFunctional(c.default || c))
export const PageComponentsMainThePlans = () => import('../..\\components\\pageComponents\\Main\\ThePlans.vue' /* webpackChunkName: "components/page-components-main-the-plans" */).then(c => wrapFunctional(c.default || c))
export const UIButtonBaseButton = () => import('../..\\components\\UI\\Button\\baseButton.vue' /* webpackChunkName: "components/u-i-button-base-button" */).then(c => wrapFunctional(c.default || c))
export const UICardsBaseCard = () => import('../..\\components\\UI\\Cards\\baseCard.vue' /* webpackChunkName: "components/u-i-cards-base-card" */).then(c => wrapFunctional(c.default || c))
export const UICardsPriceCard = () => import('../..\\components\\UI\\Cards\\priceCard.vue' /* webpackChunkName: "components/u-i-cards-price-card" */).then(c => wrapFunctional(c.default || c))
export const PageComponentsNavigationTheHeader = () => import('../..\\components\\pageComponents\\Navigation\\TheHeader.vue' /* webpackChunkName: "components/page-components-navigation-the-header" */).then(c => wrapFunctional(c.default || c))
export const UIInputSearchInput = () => import('../..\\components\\UI\\input\\searchInput.vue' /* webpackChunkName: "components/u-i-input-search-input" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
