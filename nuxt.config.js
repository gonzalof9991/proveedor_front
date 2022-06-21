export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    fallback: true
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Proovedor | Dashboard',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style.scss',
    '@/assets/transition.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/bootstrap.js'
  ],

  firebase: {
    config:{
      apiKey: 'AIzaSyC3i98K1c4UOesUXyAco7erJskTxI0I2Bs',
      authDomain: 'proovedor-front.firebaseapp.com',
      projectId: 'proovedor-front',
      storageBucket: 'proovedor-front.appspot.com',
      messagingSenderId: '486461246395',
      appId: '1:486461246395:web:46acdcc6b8c79fe670129e',
      measurementId: 'G-B3552N9NHP'
    },
    services:{
      auth: true,
      firestore: true,
      functions: true,
      storage: true,
      database: true,
      messaging: true,
      performance: true,
      analytics: true,
      remoteConfig: true
    }

  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/firebase'
  ],

  env:{
    VUE_APP_FIREBASE_KEY : process.env.VUE_APP_FIREBASE_KEY
  },



  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true
    }
  }
}
