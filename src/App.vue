<template>
  <div id="app">
    <topMenu />
    <banner />
    <our-services />
    <ctabanner />
    <process />
    <techStack />
    <clientSlider />
    <testimonials />
    <blogs />
    <ctaBannerTwo />
    <footerComp />
    <!-- <our-team /> -->
    <!-- <team /> -->
  </div>
</template>

<script>
import topMenu from './components/topMenu'
import banner from './components/banner'
import ourServices from './components/our-services'
import ctabanner from './components/ctaBanner'
import process from './components/process'
import techStack from './components/techStack'
import clientSlider from './components/clientSlider'
import testimonials from './components/testimonials'
import blogs from './components/blogs'
import ctaBannerTwo from './components/ctaBannerTwo'
import footerComp from './components/footerComp'
// import team from './components/team'
// import ourTeam from './components/our-team'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
    topMenu,
    banner,
    ourServices,
    ctabanner,
    process,
    techStack,
    clientSlider,
    testimonials,
    blogs,
    ctaBannerTwo,
    footerComp,
    // ourTeam,
    // team,
  }
}
</script>


<style>
html,body{
    scroll-behavior: smooth;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
