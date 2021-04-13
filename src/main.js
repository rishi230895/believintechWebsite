import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope,faPhoneAlt,faArrowRight,faChevronRight,faUserCircle,faClock,faComments,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome,faFacebook,faFacebookSquare,faLinkedin, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

library.add(faFontAwesome,faFacebook,faLinkedin,faEnvelope,faPhoneAlt,faArrowRight,
  faChevronRight,faFacebookF,faLinkedinIn,faUserCircle,faClock,faComments,faFacebookSquare,faMapMarkerAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
}).$mount('#app')

// custom js
// const nav = document.querySelector('.navbarWrapper');
// const navTop = nav.offsetTop;
// const navHeight = nav.offsetHeight;

// function stickyNavigation() { 
//   console.log('navTop = ' + navTop);
//   console.log('scrollY = ' + window.scrollY);
//   console.log("nav height is = " + navHeight);
// }

// window.addEventListener('scroll', stickyNavigation);