<template>
  <div id="app">
    <topMenu />
    <router-view />
    <ctaBannerTwo :items = "footerctabannar_section" v-if="$route.name !== 'Contact'" />
    <footerComp />
  </div>
</template>

<script>
import topMenu from './components/topMenu'
import ctaBannerTwo from './components/ctaBannerTwo'
import footerComp from './components/footerComp'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import {apiUrl} from '@/constants.js'

export default {
  name: 'App',
  components: {
    topMenu,
    ctaBannerTwo,
    footerComp,
  },
  data() {
    return{
      footerctabannar_section: [],
      ctaBanner: '',
    }
  },
  async created(){
    try {
      const res = await axios.get(apiUrl + '/homeData');
      if(res.data.status == 'success'){
        this.footerctabannar_section = res.data.data.footerctabannar_section;
      }
    } catch (error) {
      console.error(error);
    }
  },
}
</script>


<style lang="scss">
@import '@/styles/_variables.scss';
@import '@/styles/_common.scss'; 

html,body{
  scroll-behavior: smooth;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $charcoal;
}
@media (max-width: 767px){
  .container-lg{
    padding: 0 15px !important;
  }
}
</style>
