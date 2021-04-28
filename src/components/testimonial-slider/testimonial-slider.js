import carousel from 'vue-owl-carousel';
// import axios from 'axios'
// import {apiUrl} from '@/constants.js'
// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: 'testimonial-slider',
  components: {
    carousel,
    // VueSlickCarousel
  },
  props: ['items'],
  data () {
    return {
      
      // settings:{
      //   arrows: false,
      //   dots: true,
      //   autoplay: true,
      //   autoplaySpeed: 8000,
      //   speed: 8000,
      //   cssEase: "linear",
      //   draggable: false,
      //   infinite: false,
      //   pauseOnHover: true,
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
      //   centerMode: true,
      // },
      // testimonials:[{
      //   testiMsg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt adipisci tenetur, facilis blanditiis quae voluptatum ullam. Quidem sapiente culpa adipisci magnam temporibus aliquid ullam accusantium! Voluptatem corporis libero fugiat.",
      //   testidesig: "CEO,",
      //   testiComp: "ABC Company"
      // },
      // {
      //   testiMsg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt adipisci tenetur, facilis blanditiis quae voluptatum ullam. Quidem sapiente culpa adipisci magnam temporibus aliquid ullam accusantium! Voluptatem corporis libero fugiat.",
      //   testidesig: "CTO,",
      //   testiComp: "XYZ Company"
      // }]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}


