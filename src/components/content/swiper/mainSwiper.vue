<!--  -->
<template>
  <div>
    <swiper :imgarr='imgarr' :speed='speed' :stay='stay' :swiperW=220 :swiperH=220></swiper>
    <!-- <swiper :imgarr='imgarr' :speed='2' :stay="3000" :swiperW="220" :swiperH="220"></swiper> -->
  </div>
</template>

<script>
import swiper from '../swiper/swiper'

export default {
  data () {
    return {
      imgarr: [
         () => {
         return [
           require("../../assets/img/swiper/1.png"),
           require("../../assets/img/swiper/2.png"),
           require("../../assets/img/swiper/3.png"),
           require("../../assets/img/swiper/4.png"),
           require("../../assets/img/swiper/5.png"),
         ];
       },
      ],
      //图片滑动的速度，越小越快
      speed: 5,
      //图片展示的时间，越大越久
      stay: 3000,
    };
  },

  components: {
    swiper
  },
  computed: {},
  methods: {},
 //生命周期 - 创建完成（访问当前this实例）
 created() {},
 //生命周期 - 挂载完成（访问DOM元素）
 mounted() {},
}
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */

</style>