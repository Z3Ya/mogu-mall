<!-- 回到顶部组件 -->
<template>
  <div class="backTop" >
    <img src="~img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {
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
  .backTop {
    position: fixed;
    right: 8px;
    bottom: 52px;
  }
  .backTop img {
    width: 43px;
    height: 43px;
  }
</style>