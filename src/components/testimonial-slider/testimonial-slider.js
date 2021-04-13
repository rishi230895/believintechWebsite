import carousel from 'vue-owl-carousel';

export default {
  name: 'testimonial-slider',
  components: {carousel},
  props: [],
  data () {
    return {
      testimonials:[{
        testiMsg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt adipisci tenetur, facilis blanditiis quae voluptatum ullam. Quidem sapiente culpa adipisci magnam temporibus aliquid ullam accusantium! Voluptatem corporis libero fugiat.",
        testidesig: "CEO,",
        testiComp: "ABC Company"
      },
      {
        testiMsg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt adipisci tenetur, facilis blanditiis quae voluptatum ullam. Quidem sapiente culpa adipisci magnam temporibus aliquid ullam accusantium! Voluptatem corporis libero fugiat.",
        testidesig: "CTO,",
        testiComp: "XYZ Company"
      }]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}


