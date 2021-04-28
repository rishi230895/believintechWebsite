import axios from 'axios'
import {apiUrl} from '@/constants.js'

export default {
  name: 'our-services',
  components: {},
  props: [],
  data () {
    return {
      serviceSection: [],
      routerPage: '',
    }
  },
  async created(){
    try {
      const res = await axios.get(apiUrl + '/homeData');
      if(res.data.status == 'success'){
        this.serviceSection = res.data.data.serviceSection;
      }
      if(this.$router.currentRoute.path == '/services'){
        this.routerPage = true;
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


