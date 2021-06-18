import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope,faPhoneAlt,faArrowRight,faChevronRight,faUserCircle,faClock,faComments,faMapMarkerAlt, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome,faFacebook,faFacebookSquare,faLinkedin, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vuelidate from 'vuelidate'
import VueSkeletonLoader from 'skeleton-loader-vue';
// import axios from 'axios'
// import VueAxios from 'vue-axios'

library.add(faFontAwesome,faFacebook,faLinkedin,faEnvelope,faPhoneAlt,faArrowRight,
  faChevronRight,faFacebookF,faLinkedinIn,faUserCircle,faClock,faComments,faFacebookSquare,faMapMarkerAlt,faExternalLinkAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Vue use form validations
Vue.use(Vuelidate)
Vue.component('vue-skeleton-loader', VueSkeletonLoader);

// Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')