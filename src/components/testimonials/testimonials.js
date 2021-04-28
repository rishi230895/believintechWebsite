import testimonialSlider from '../testimonial-slider';
import axios from 'axios'
import {apiUrl} from '@/constants.js'

export default {
  name: 'testimonials',
  components: {testimonialSlider},
  props: ['items'],
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


