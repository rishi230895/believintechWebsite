import carousel from 'vue-owl-carousel';
import axios from 'axios'
import {apiUrl} from '@/constants.js'

export default {
  name: 'testimonial-slider',
  components: {
    carousel,
  },
  props: [],
  data () {
    return {
      testimonialsSlider: [],
    }
  },
  async created(){
    try {
      const res = await axios.get(apiUrl + '/homeData');
      if(res.data.status == 'success'){
        this.testimonialsSlider = res.data.data.testimonialsSlider;
        console.log(this.testimonialsSlider);
      }
    } catch (error) {
      console.error(error);
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}


