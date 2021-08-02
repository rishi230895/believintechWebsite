// import axios from 'axios'
// import {apiUrl} from '@/constants.js'
// import loader from '@/components/loader'

export default {
  name: 'blogs',
  components: {
    // loader
  },
  props: ['items'],
  data () {
    return {
      // latestArticleSection: [],
      // isLoading: true
    }
  },
  // async created(){
  //   const res = await axios.get(apiUrl + '/homeData');
  //   try {
  //       if(res.data.status == 'success'){
  //         console.log(res.data.data.latestArticleSection);
  //           this.latestArticleSection = res.data.data.latestArticleSection;
  //           this.isLoading = false;
  //           document.documentElement.style.overflow = 'visible';
  //       }
  //   } catch (error) {
  //       console.log(error);
  //   }
  // },
  computed: {

  },
  // mounted () {
  //   this.disableScroll();
  // },
  // methods: {
  //   disableScroll(){
  //     if(this.isLoading == true){
  //       document.documentElement.style.overflow = 'hidden';
  //     }
  //   }
  // }
}


