
export default {
  name: 'tabs',
  components: {},
  props: ['items'],
  data () {
    return {
      projects: [
        {
            projImg: 'https://picsum.photos/600/300/?image=25',
            projName: 'Patient Handling',
            visitBtn: 'Visit Site',
            visitUrl: 'https://www.patienthandling.com.au/'
        }
    ]
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

  }
}


