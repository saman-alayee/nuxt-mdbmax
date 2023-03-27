export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en","messages":{"en":{"login":"Login","lan":"Language","stepOne":"Subscription plan","stepTwo":"Subscription duration","Basic":"Basic Trial ","Premium":"Premium","Business":"Business PUB","basicTime":"$2.00 / day","permiumTime":"$4.99 / month","businessTime":"$99.00 / month","featureOne":"Access to Full Content","featureTwo":"Cancel Anytime","featureThree":"Unlimited movies and TV shows","featureFour":"Resolution Access HD (720p)","featureFour_permium":"Resolution Access Full HD (1080p)","featureFive":"Priority in Support","featureSix":"Priority Support in 24H","featureSeven":"Resolution Access 4K+HDR","featureEight":"No Advertisements","featureNine":"Advertise Your Business 5M CPM","choose":"Choose","headerText":"Select the duration of your plan. Longer plans offer better discounts!","paymentText":"Accepted Payment Methods","featureTextbasic_plan":"Basic Trial Plan","featureTextPremium":"Premium Plan","featureTextbasic":"Business PUB Plan","baaicPlan":"1 day subscription","trustText_one":"Please enter your real email during payment, so that if there is any problem with the financial transaction, we can follow up with you via email.","trustText_two":"If you cancel, your payment amount will be refunded to your account within a maximum of 14 days, minus your daily usage fee.","trustText_three":"Please note that purchasing a subscription to improve and maintain the site is temporarily active and may be removed or edited.","trustText_four":"If you agree to these terms, press the button below and complete your subscription purchase.","permiumPlan1":"1 month subscription:$4.99/month","permiumPlan3":"3 month subscription:$4/month","permiumPlan6":"6 month subscription:$3.66/month","permiumPlan12":"12 month subscription:$2.50/month","businessPlan1":"1 month subscription:$99.00/month","businessPlan3":"3 month subscription:$89.10/month","businessPlan6":"6 month subscription:$74.25/month","businessPlan12":"12 month subscription:$64.35/month","back":"Back","select":"Select","error":"error","textError":"Check your form ","okay":"okay","sucess":"success","email":"Email address ","username":"Username","password":"Password","account":"Create a new account","continue":"Continue","SSL":"Your information is protected by 256-bit SSL encryption","SSL_header":"SSL SECURE PAYMENT"},"fa":{"login":"ورود","lan":"زبان","sucess":"پرداخت موفقیت آمیز بود","stepOne":"طرح اشتراک","stepTwo":"مدت زمان اشتراک","Basic":"اشتراک آزمایشی ","Premium":"اشتراک ویژه ","Business":"اشتراک تجاری","basicTime":"$2.00 / روزانه","permiumTime":"$4.99 / ماهانه","businessTime":"$99.00 / ماهانه","featureOne":"دسترسی کامل به محتوا","featureTwo":"لغو اشتراک در هر زمانی","featureThree":"فیلم ها و سریال های نامحدود","featureFour":"دسترسی به کیفیت HD (720p)  ","featureFive":"اولویت در پاسخگویی و پشتیبانی","featureSix":"اولویت در پاسخگویی و پشتیبانی 24 ساعته","featureSeven":"دسترسی به همه کیفیت ","featureEight":"بدون تبلیغات","featureFour_permium":"دسترسی به کیفیت HD (1080p) ","featureNine":"بیزینس خود را 5 میلیون CPM تبلیغ کنید","choose":"انتخاب اشتراک","error":"به مشکل برخوردید","textError":"لطفا فرم خود را چک کیند","okay":"باشه","trustText_one":"در هنگام پرداخت ایمیل واقعی خود را وارد کنید، که اگر تراکنش مالی به مشکل خورد ما بتوانیم از طریق ایمیل شما پیگیری کنیم.","trustText_two":"در صورت انصراف مبلغ پرداختی شما با کسر استفاده روزانه شما، حداکثر ظرف 14 روز به حساب شما بازگردانده خواهد شد.","trustText_three":"توجه داشته خرید اشتراک برای بهبود و نگهداری سایت به طور موقت فعال میباشد، و امکان دارد حذف یا ویرایش شود.","trustText_four":"در صورتی که این شرایط را می‌پذیرد کلید زیر را فشار دهید و خرید اشتراک خود را کامل کنید.","headerText":"مدت زمان اشتراک خود را انتخاب کنید. اشتراک های طولانی تر شامل تخفیف های ویژه میشوند!","paymentText":"روش های پرداخت قابل قبول","featureTextbasic":"طرح آزمایشی پایه","featureTextPremium":"اشتراک ویژه ","featureTextbusiness":"اشتراک تجاری","baaicPlan":"اشتراک یک روزه ","permiumPlan1":"اشتراک یک ماهه $4.99/ماهانه ","permiumPlan3":" اشتراک سه ماهه $4.00/ماهانه ","permiumPlan6":"اشتراک شش ماهه $3.66/ماهانه ","permiumPlan12":"اشتراک دوازده ماهه $2.50/ماهانه ","businessPlan1":"اشتراک یک ماهه $99.00/ماهانه ","businessPlan3":"اشتراک سه ماهه $89.10/ماهانه ","businessPlan6":"اشتراک شش ماهه $74.25/ماهانه ","businessPlan12":"اشتراک دوازده ماهه $64.35/ماهانه ","back":"بازگشت","select":"انتخاب","SSL":" پرداخت امن با   SSL اطلاعات شما با رمزگذاری 256 بیتی SSL محافظت می‌شود.  ","SSL_header":"پرداخت امن SSL","email":"ایمیل","username":"نام کاربری","password":"رمز عبور ","account":" ایجاد حساب کاربری ","continue":"ادامه"}}},
  vueI18nLoader: false,
  locales: [{"code":"fa","name":"persian","dir":"rtl"},{"code":"en","name":"English","dir":"ltr"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieAge":365,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"fa","name":"persian","dir":"rtl"},{"code":"en","name":"English","dir":"ltr"}],
  localeCodes: ["fa","en"],
  additionalMessages: [],
}
export const localeFiles = {
  0: "{",
  1: "}",
}

export const localeMessages = {}
