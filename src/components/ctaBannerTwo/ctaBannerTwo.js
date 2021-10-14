import axios from "axios"
import {apiUrl} from '@/constants.js'

export default {
  name: 'cta-banner-two',
  components: {},
  props: [],
  data () {
    return {
      footerctabannarSection: [],
    }
  },
  async created(){
    try {
      const res = await axios.get(apiUrl + '/homeData');
      if(res.data.status == "success"){
        this.footerctabannarSection = res.data.data.footerctabannarSection;
      }
    } catch (error) {
      console.log(error);
    }
   
  },
  mounted () {
      
  },
  methods: {

  }
}


