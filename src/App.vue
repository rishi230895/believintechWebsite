<template>
  <div id="app">
    <topMenu />
    <banner />
    <ctabanner />
    <process />
  </div>
</template>

<script>
import topMenu from './components/topMenu'
import banner from './components/banner'
import ctabanner from './components/ctaBanner'
import process from './components/process'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
    topMenu,
    banner,
    ctabanner,
    process
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
