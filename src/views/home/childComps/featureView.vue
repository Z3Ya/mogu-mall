<!-- 本周流行 -->
<template>
  <div class="featureView">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="~img/home/recommend_bg.jpg" alt="" @load="imgload">
    </a>
  </div>
</template>

<script>
export default {
  name: "featureView",
  data () {
    return {
    };
  },
  components: {},

  computed: {},

  methods: {
    imgload(){
      this.$bus.$emit('imgload')
    }
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {

  },
}
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */
  .featureView img {
    width: 100%;
  }
</style>