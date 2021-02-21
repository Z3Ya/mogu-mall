<template>
  <div id="app">
    <!-- exclude="Detail"匹配的是vue中的name属性 -->
    <keep-alive exclude="detail">
    <router-view></router-view>
    </keep-alive>
    <mainTabbar/>

  </div>
</template>

<script>
import mainTabbar from './components/content/tabbar/mainTabbar'

export default {
  name: 'App',
  components: {
    mainTabbar,
  }
}
</script>

<style>
/* @import './assets/css/base.css'; */
@import '~css/base.css';
</style>
