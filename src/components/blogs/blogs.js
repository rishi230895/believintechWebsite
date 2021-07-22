import axios from 'axios'
import {apiUrl} from '@/constants.js'

export default {
  name: 'blogs',
  components: {},
  props: [],
  data () {
    return {
      latestArticleSection: []
    }
  },
  async created(){
    const res = await axios.get(apiUrl + '/homeData');
    try {
        if(res.data.status == 'success'){
          console.log(res.data.data.latestArticleSection);
            this.latestArticleSection = res.data.data.latestArticleSection;
        }
    } catch (error) {
        console.log(error);
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}


