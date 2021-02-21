import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLazyload from 'vue-lazyload'
import toast from 'components/common/toast'

import FastClick from 'fastclick'

//安装插件
Vue.use(VueLazyload,{
  loading: require ('./assets/img/common/zs.jpg')
})  
//安装封装的toast插件
Vue.use(toast)

//解决移动端300ms延迟
FastClick.attach(document.body)

Vue.config.productionTip = false;
//new 一个vue实例，作为事件总线，用来监听事件
//?1、新建
//?2、this.$bus.$emit('事件名称’，‘参数)
//?3、this.$bus.$on('事件名称’，‘回调函数（参数)’）---每监听到一次事件，就触发一次回调函数
Vue.prototype.$bus = new Vue()



new Vue({
  router,
  store,
  toast,
  render: h => h(App)
}).$mount("#app");
