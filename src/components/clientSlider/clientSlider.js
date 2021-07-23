// import carousel from 'vue-owl-carousel';
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// import Slick from 'vue-slick';
// import 'slick-carousel/slick/slick.css';

export default {
  name: 'client-slider',
  components: {
    VueSlickCarousel, 
    // carousel
    // Slick
  },
  props: ['items'],
  data () {
    return {
      settings: {
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 3000,
        cssEase: "linear",
        draggable: false,
        infinite: true,
        pauseOnHover: false,
        slidesToShow: 6,
        // slidesToScroll: 1,
        centerMode: true,
      }
      // slickOptions: {
      //   infinite: true,
      //   slidesToShow: 6,
      //   autoplay: true,
      //   autoplaySpeed: 0,
      //   speed: 3000,
      //   adaptiveHeight: false,
      //   arrows: false,
      //   cssEase: 'linear',
      //   pauseOnHover: false,
      //   centerMode: true,
      // },
      
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    // updated() {
    //   this.reInit();
    // },
    // reInit() {
    //   // Helpful if you have to deal with v-for to update dynamic lists
    //   this.$nextTick(() => {
    //       this.$refs.slick.reSlick();
    //   });
    // },
    handleInit(event, slick) {
      console.log('handleInit', event, slick);
    },
    handleReInit(event, slick) {
        console.log('handleReInit', event, slick);
    },
  }
}


