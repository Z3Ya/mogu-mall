<!--  -->
<template>
  <div id="cart">
    <nav-bar class="nav"></nav-bar>
    <scroll class="wrapper" :pullUpLoad="true" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import navBar from "./childComps/cartNavBar";
import cartList from "./childComps/cartList";
import cartBottomBar from "./childComps/cartBottomBar";

import scroll from "components/common/scroll/scroll";

export default {
  name: "cart",
  data() {
    return {};
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // this.$refs.scroll && this.$refs.scroll.refresh();
  },
  activated() {
    this.$refs.scroll && this.$refs.scroll.refresh();
  },
  components: {
    navBar,
    cartList,
    scroll,
    cartBottomBar
  },

  computed: {},

  methods: {},
};
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */

#cart {
  height: 100vh;
  position: relative;
  /* z-index: 2; */
  background-color: #fff;
  width: 100%;
}
/* .nav{ */
/* position: relative; */
/* z-index: 9; */
/* } */
.wrapper {
  overflow: hidden;
  position: fixed;
  top: 44px;
  bottom: 93px;
  width: 100%;
}
</style>