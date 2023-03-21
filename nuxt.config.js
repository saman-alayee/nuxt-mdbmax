export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mdbmax',
    script: [
      { src: 'https://js.stripe.com/v3' },
    ],
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/app.css',

  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/bootstrap-vue',

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  env: {
    STRIPE_PK: process.env.STRIPE_PK,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt', '@nuxtjs/axios', '@nuxtjs/i18n', 'nuxt-sweetalert2'


  ],

  i18n: {
    locales: ['en', 'fa'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          login: 'Login',
          lan: 'Language',
          stepOne: 'Subscription plan',
          stepTwo: 'Subscription duration',
          Basic: "Basic Trial ",
          Premium: "Premium",
          Business: "Business PUB",
          basicTime: "$2.00 / day",
          permiumTime: "$4.99 / month",
          businessTime: "$99.00 / month",
          featureOne:"Access to Full Content",
          featureTwo: "Cancel Anytime",
          featureThree: "Unlimited movies and TV shows",
          featureFour: "Resolution Access HD (720p)",
          featureFive: "Priority in Support",
          featureSix: "Priority Support in 24H",
          featureSeven: "Resolution Access 4K+HDR",
          featureEight: "No Advertisements",
          featureNine: "Advertise Your Business 5M CPM",
          choose:"Choose Plan"

        },
        fa: {
          login: 'ورود',
          lan: 'زبان',
          stepOne: 'طرح اشتراک',
          stepTwo: 'مدت زمان اشتراک',
          Basic: "دوره معمولی ",
          Premium: "ویژه",
          Business: "تجاری",
          basicTime: "$2.00 / روزانه",
          permiumTime: "$4.99 / ماهانه",
          businessTime: "$99.00 / ماهانه",
          featureOne: "دسترسی کامل به محتوا",
          featureTwo: "لغو اشتراک در هر زمانی",
          featureThree: "فیلم ها و سریال های نامحدود",
          featureFour:  "دسترسی به کیفیت HD (720p)  ",
          featureFive: "اولویت در پاسخگویی و پشتیبانی",
          featureSix: "اولویت در پاسخگویی و پشتیبانی 24 ساعته",
          featureSeven: "دسترسی به کیفیت 4K+HDR",
          featureEight: "بدون تبلیغات",
          featureNine: "بیزینس خود را 5 میلیون CPM تبلیغ کنید",
          choose: "انتخاب پلن"
        },

      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
