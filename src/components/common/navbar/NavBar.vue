<!-- 每个页面上方的导航 -->
<template>
  <div class='nav-bar'>
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {},

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
  .nav-bar {
    display: flex;
    line-height: 44px;
    height: 44px;
  }

  .left,
  .right {
    width: 60px;
  }

  .center {
    flex: 1;
    text-align: center;
  }
</style>