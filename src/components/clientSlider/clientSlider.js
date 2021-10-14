import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: 'client-slider',
  components: {
    VueSlickCarousel, 
  },
  props: ['items', 'slider'],
  data () {
    return {
      settings: {
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 3000,
        cssEase: "linear",
        draggable: true,
        infinite: true,
        pauseOnHover: false,
        slidesToShow: 6,
        rtl: true,
        centerMode: true,
      },
    }
  },
  computed: {

  },
  mounted () {
    
  },
  methods: {
    handleInit(event, slick) {
      console.log('handleInit', event, slick);
    },
    handleReInit(event, slick) {
      console.log('handleReInit', event, slick);
    },
  }
}


