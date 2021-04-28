import axios from "axios"
import {apiUrl} from '@/constants.js'

export default {
  name: 'cta-banner-three',
  components: {},
  props: [],
  data () {
    return {
      aboutCtaBanner: []
    }
  },
  async created(){
    try {
      const res = await axios.get(apiUrl + '/aboutData');
      if(res.data.status == 'success'){
        this.aboutCtaBanner = res.data.data.aboutCtaBanner;
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


