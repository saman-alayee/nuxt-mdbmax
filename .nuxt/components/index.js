export { default as PageComponentsAuthTheLogin } from '../..\\components\\pageComponents\\Auth\\TheLogin.vue'
export { default as PageComponentsNavigationTheHeader } from '../..\\components\\pageComponents\\Navigation\\TheHeader.vue'
export { default as PageComponentsMainBasicPlan } from '../..\\components\\pageComponents\\Main\\basicPlan.vue'
export { default as PageComponentsMainBusinessPlan } from '../..\\components\\pageComponents\\Main\\businessPlan.vue'
export { default as PageComponentsMainPermiumPlan } from '../..\\components\\pageComponents\\Main\\permiumPlan.vue'
export { default as PageComponentsMainSuccessPage } from '../..\\components\\pageComponents\\Main\\successPage.vue'
export { default as PageComponentsMainThePlans } from '../..\\components\\pageComponents\\Main\\ThePlans.vue'
export { default as UIButtonBaseButton } from '../..\\components\\UI\\Button\\baseButton.vue'
export { default as UICardsBaseCard } from '../..\\components\\UI\\Cards\\baseCard.vue'
export { default as UICardsPriceCard } from '../..\\components\\UI\\Cards\\priceCard.vue'
export { default as UIInputSearchInput } from '../..\\components\\UI\\input\\searchInput.vue'

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
