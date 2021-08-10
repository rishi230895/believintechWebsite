<template>
    <div id="home">
      <loader v-if="isLoading"/>
      <banner :items = "bannerSection"/>
      <our-services />
      <ctabanner :items = "ctabannarSection"/>
      <process :items = "workflowSection"/>
      <techStack :items = "technologiesSection"/>
      <clientSlider :items = "clientsSection"/>
      <testimonials :items = "testimonialsSection"/>
      <!-- <blogs /> -->
    </div>
</template>

<script>
import banner from '@/components/banner'
import ourServices from '@/components/our-services'
import ctabanner from '@/components/ctaBanner'
import process from '@/components/process'
import techStack from '@/components/techStack'
import clientSlider from '@/components/clientSlider'
import testimonials from '@/components/testimonials'
import loader from '@/components/loader'
// import blogs from '@/components/blogs'
import axios from 'axios'
import {apiUrl} from '@/constants.js'

export default {
  name: 'home',
  components: {
    banner,
    ourServices,
    ctabanner,
    process,
    techStack,
    clientSlider,
    testimonials,
    loader,
    // blogs
  },
  data(){
    return{
      bannerSection: [],
      ctabannarSection: [],
      workflowSection: [],
      technologiesSection: [],
      clientsSection: [],
      testimonialsSection: [],
      isLoading: true,
    }
  },
  metaInfo() {
    return { 
        title: "BelievIn Tech | Home.",
        meta: [
            { name: 'description', content:  'We produce pixel-perfect web and mobile app development. Our processes are tailored-made and we are flexible to work on our clients time-zones.'},
            { name: 'keywords', content: 'Website development, website designing, mobile app development, digital marketing, API development, eCommerce development, WordPress, WooCommerce'},
            { property: 'og:title', content: 'BelievIn Tech | One place to get all your web and app work.'},
            { property: 'og:site_name', content: 'Believ-in Tech'},
            { property: 'og:type', content: 'website'},    
            { name: 'robots', content: 'index,follow'} 
        ]
    }
  },
  async created(){
    try {
      const res = await axios.get(apiUrl + '/homeData');
      if(res.data.status == 'success'){
        this.bannerSection = res.data.data.bannerSection;
        this.ctabannarSection = res.data.data.ctabannarSection;
        this.workflowSection = res.data.data.workflowSection;
        this.technologiesSection = res.data.data.technologiesSection;
        this.clientsSection = res.data.data.clientsSection;
        this.testimonialsSection = res.data.data.testimonialsSection;
        this.isLoading = false;
        document.documentElement.style.overflow = 'visible';
      }
    } catch (error) {
      console.error(error);
    }
  },
  mounted() {
    this.disableScroll();
  },
  methods:{
    disableScroll(){
      if(this.isLoading == true){
        document.documentElement.style.overflow = 'hidden';
      }
    }
  }
}
</script>