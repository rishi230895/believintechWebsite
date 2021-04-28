import carousel from 'vue-owl-carousel';
// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: 'client-slider',
  components: {
    // VueSlickCarousel, 
    carousel
  },
  props: ['items'],
  data () {
    return {
      // settings: {
      //   arrows: false,
      //   dots: false,
      //   autoplay: true,
      //   autoplaySpeed: 3000,
      //   speed: 3000,
      //   cssEase: "linear",
      //   draggable: false,
      //   infinite: true,
      //   pauseOnHover: true,
      //   slidesToShow: 6,
      //   // slidesToScroll: 1,
      //   centerMode: true,
      // }
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    
  }
}


