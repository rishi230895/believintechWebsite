import axios from 'axios';
import {apiUrl} from '@/constants.js';

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
        phnNo: '',
        resume: '',
      },
      file: '',
      labelTxt: 'Browse and upload your resume here',
      errFirst: null,
      errLast: null,
      errEmail: null,
      errPhn: null,
      errFile: null,
      hasError: false,
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
  methods: {
    sendInfo(jobTitle) {
      this.form.jobName = jobTitle;
    },
    onSubmit(event) {
      event.preventDefault()
      var formErr = [];
      var inputRes = document.getElementById('upload-res')
      if(this.form.firstname == ''){
        formErr.push(this.errFirst)
        this.errFirst = 'enter first name'
      }
      if(this.form.lastname == ''){
        formErr.push(this.errLast)
        this.errLast = 'enter last name'
      }
      if(this.form.email == ''){
        formErr.push(this.errEmail)
        this.errEmail = 'enter valid email address'
      }
      if(this.form.phnNo == ''){
        formErr.push(this.errPhn)
        this.errPhn = 'enter valid phone number'
      }
      if(inputRes.value == ''){
        formErr.push(this.errFile)
        this.labelTxt = 'please upload your resume in pdf format'
        this.hasError = true
      }else{
        if(!formErr.length > 0){
          this.errFirst = null
          this.errLast = null
          this.errEmail = null
          this.errPhn = null
          this.errFile = ''
          // alert(JSON.stringify(this.form))
          this.labelTxt = 'Browse and upload your resume here'

          axios.post(apiUrl + '/careerform', this.form)
          .then((response) => {
            //Perform Success Action
            if(response.data.Message.mailshoot == 'sent'){
              // console.log(response);
            }
          })
          .catch((error) => {
            console.log(error);
            // error.response.status Check status code
          }).finally(() => {
              // Reset our form values
              this.form.firstname = ''
              this.form.lastname = ''
              this.form.email = ''
              this.form.phnNo = ''
              inputRes.value = ''
          });
        }
      } 
    },
    uploadRes(e){
      const file = e.target.files[0]
      const filename = e.target.files[0].name
      const ext = filename.split('.').pop()
      const allowedExtensions = 'pdf'
      var inputRes = document.getElementById('upload-res')
      if(allowedExtensions == ext){
        this.labelTxt = filename
        this.hasError = false

         this.getBase64(file).then(
          (data) => {
            // console.log(data);
            this.form.resume = data;
          });

      }else{
        this.labelTxt = 'please upload your resume in pdf format'
        inputRes.value = ''
        this.hasError = true
      }
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }
  }
}


