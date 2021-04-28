
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
      // sectionHeading: "We're Hiring",
      // routerPage: '',
      // careers: [
      //   {
      //     btnTitle: "Frontend Positions",
      //     role: "UI Developer",
      //     vacancy: "Vacancy: 1",
      //     experience: "Exp: 3-5 years"
      //   },
      //   {
      //     btnTitle: "Backend Positions",
      //     role: "UI Team Lead",
      //     vacancy: "Vacancy: 1",
      //     experience: "Exp: 5-7 years"
      //   }
      // ]
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


