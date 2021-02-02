import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope,faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome,faFacebook,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFontAwesome,faFacebook,faLinkedin,faEnvelope,faPhoneAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
