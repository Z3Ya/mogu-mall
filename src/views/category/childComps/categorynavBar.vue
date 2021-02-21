<!-- 分类页面的导航栏 -->
<template>
  <div class="navbar">
    <navbar>
      <div slot="center">商品分类</div>
    </navbar>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar'

export default {
  name: 'categorynavBar', 
  data () {
    return {
    };
  },

  props: {
  },

  components: {
    navbar
  },

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
.navbar{
  background-color: var(--color-tint);
  color: white;
  z-index: 9;
}
</style>