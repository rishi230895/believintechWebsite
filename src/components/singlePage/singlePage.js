// import axios from "axios";
// import {apiUrl} from '@/constants.js'

export default {
  name: 'single-page',
  components: {},
  props: ['items', 'banner'],
  data () {
    return {
      // blogThumbnail: [],
      // blogSection: []
    }
  },
  // async created(){
  //   try {
  //     const res = await axios.get(apiUrl + 'singleblog');
  //     if(res.data.status == 'success'){
  //       this.blogThumbnail = res.data.data.blogThumbnail;
  //       this.blogSection = res.data.data.blogSection;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}


