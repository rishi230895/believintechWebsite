import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope,faPhoneAlt,faArrowRight,faChevronRight,faUserCircle,faClock,faComments,faMapMarkerAlt, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome,faFacebook,faFacebookSquare,faLinkedin, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vuelidate from 'vuelidate'
import VueMeta from 'vue-meta'
import VueAnalytics from 'vue-analytics';

library.add(faFontAwesome,faFacebook,faLinkedin,faEnvelope,faPhoneAlt,faArrowRight,
  faChevronRight,faFacebookF,faLinkedinIn,faUserCircle,faClock,faComments,faFacebookSquare,faMapMarkerAlt,faExternalLinkAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-119904331-2',
  router
});

// Vue Meta
Vue.use(VueMeta)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Vue use form validations
Vue.use(Vuelidate)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')