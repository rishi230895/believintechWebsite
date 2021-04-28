import axios from "axios"
import {apiUrl} from '@/constants.js'

export default {
  name: 'cta-banner-two',
  components: {},
  props: [],
  data () {
    return {
      footerctabannarSection: [],
      routerPage: ''
    }
  },
  async created(){
    // if(this.$router.currentRoute.path == '/contact'){
    //   this.routerPage = "yes";
    //   console.log(this.routerPage);
    // }
    try {
      const res = await axios.get(apiUrl + '/homeData');
      if(res.data.status == "success"){
        this.footerctabannarSection = res.data.data.footerctabannarSection;
      }
    } catch (error) {
      console.log(error);
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}


