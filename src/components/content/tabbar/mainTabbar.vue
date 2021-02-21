<!--  -->
<template>
  <div>
    <tabbar>
      <tabbarItem link="/home" activecolor='blue' activeTextDecoration='underline'>
        <img slot='img' src="~img/tabbar/home.png" alt="">
        <img slot='active-img' src="~img/tabbar/home-fill.png" alt="">
        <div slot="text">首页</div>
      </tabbarItem>
      <tabbarItem link="/category">
        <img slot='img' src="~img/tabbar/all.png" alt="">
        <img slot='active-img' src="~img/tabbar/all-fill.png" alt="">
        <div slot="text">分类</div>
      </tabbarItem>
      <tabbarItem link="/cart">
        <img slot='img' src="~img/tabbar/cart-full.png" alt="">
        <img slot='active-img' src="~img/tabbar/cart-full-fill.png" alt="">
        <div slot="text">购物车</div>
      </tabbarItem>
      <tabbarItem link="/profile">
        <img slot='img' src="~img/tabbar/account.png" alt="">
        <img slot='active-img' src="~img/tabbar/account-fill.png" alt="">
        <div slot="text">我的</div>
      </tabbarItem>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/common/tabbar/tabbar.vue';
import tabbarItem from 'components/common/tabbar/tabbarItem.vue';
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
  components: {
    Tabbar,
    tabbarItem
  },

  computed: {},

  methods: {}
}
</script>
<style lang='css' scoped>
/* @import url(~); 引入css类 */

</style>