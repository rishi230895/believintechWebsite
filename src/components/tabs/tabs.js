
export default {
  name: 'tabs',
  components: {},
  props: ['items'],
  data () {
    return {
      form: {
        jobName: '',
        firstname: '',
        lastname: '',
        email: '',
        message: '',
        resume: ''
      },
      // show: true,
      showFile: false,
      file: ''
    }
  },
  created(){
    if(this.$router.currentRoute.path == '/career'){
      this.routerPage = true;
    }
    if(this.$router.currentRoute.path == '/work'){
      this.routerPage = false;
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    sendInfo(jobTitle) {
      this.form.jobName = jobTitle;
    },
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
      this.form.firstname = ''
      this.form.lastname = ''
      this.form.email = ''
      this.form.message = '',
      this.form.resume = '',
      this.show = false,
      this.showFile = false
    },
    uploadRes(e){
      const filename = e.target.files[0].name
      const filepath = e.target.value
      const ext = filename.split('.').pop()
      const allowedExtensions = 'pdf, doc'
      if(allowedExtensions == ext){
        this.form.resume = filename
        this.showFile = true
      }else{
        this.form.resume = ''
        this.showFile = false
        this.filepath = '';
        console.log(filepath + ' ' + ext)
      }
    }
  }
}


