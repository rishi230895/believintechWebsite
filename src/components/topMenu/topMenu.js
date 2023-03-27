import axios from 'axios'
import {apiUrl} from '@/constants.js'

export default {
  name: 'top-menu',
  components: {},
  props: [],
  data () {
    return {
      scrolled: false,
      HeaderSection: [],
      serviceSection: [],
      showNav: false
    }
  },
  async created(){
    const res = await axios.get(apiUrl + '/headerDetail');
    const servicesRes = await axios.get(apiUrl + '/homeData');
    try {
      if(res.data.status == 'success'){
        this.HeaderSection = res.data.data.HeaderSection;
        this.serviceSection = servicesRes.data.data.serviceSection;
      }
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
  
  },
  mounted () {
    window.addEventListener('scroll', this.stickyNav);
  },
  methods: {
    stickyNav(){
      window.onscroll = function(){
        if (window.scrollY > 40) {
          document.body.classList.add("fixed-header");
        }else{
          document.body.classList.remove("fixed-header");
        }
      }
    },
    toggleNav(){
      this.showNav = !this.showNav
      var bodySelector = document.getElementsByTagName('body')
      if(this.showNav == true){
        bodySelector.style.overflow = 'hidden' 
      }
    }
  }
}


