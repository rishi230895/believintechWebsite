
export default {
  name: 'banner',
  components: {},
  props: [],
  data () {
    return {
      heading:'A descriptive headline that clearly states what you do',
      subHeading:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum at itaque modi? Voluptatibus error dolorum obcaecati reprehenderit aperiam ut minima eos, qui tempora, sit, earum quo corporis',
      ctaText: 'Discuss Your Project ',
      form: {
        email: '',
        name: '',
        projectDetails: '',
        phnNumber: ''
      },
      show: true
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    onclick(event){
      event.preventDefault()
      
    },
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
      this.form = ''
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form = ''
      // this.form.email = ''
      // this.form.name = ''
      // this.form.projectDetails = ''
      // this.form.phnNumber = ''
      
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
      this.show = true
    })
  }
  }
}


