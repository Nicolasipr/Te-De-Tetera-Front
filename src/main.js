import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faShoppingCart, faHeart, faSearch, faAngleUp, faMapMarkerAlt, faPhoneAlt, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faStar, faShoppingCart, faHeart, faSearch, faFacebook, faInstagram, faAngleUp, faMapMarkerAlt, faPhoneAlt, faEnvelope, faGlobe])

Vue.component('FontAwesome', FontAwesomeIcon)

Vue.config.productionTip = false

import App from './App.vue'
import router from './router'
import store from './store/'

import en from './locales/en.json'
import es from './locales/es.json'

const messages = {
  en: en,
  es: es
}
// import messages from './messages-i18n.js'

const i18n = new VueI18n({
  locale: 'en',
  messages,
})

new Vue({
  render: h => h(App),
  i18n,
  store,
  router
}).$mount('#app')