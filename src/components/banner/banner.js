
export default {
  name: 'banner',
  components: {},
  props: [],
  data () {
    return {
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


