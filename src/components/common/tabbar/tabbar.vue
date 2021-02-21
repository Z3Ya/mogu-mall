<!--  -->
<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {

  },
  components: {},

  computed: {}

  // methods: {}
}
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */
  @import '~css/tabbar/tabbar.css';
</style>