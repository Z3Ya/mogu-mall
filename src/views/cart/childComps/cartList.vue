<!--购物车商品列表的展示  -->
<template>
  <div class="cartList">
    <div v-for="(good,index) in cartList" :key="index">
      <cartListItem :good = 'good'></cartListItem>
    </div>

  </div>
</template>

<script>
import cartListItem from './cartListItem'

export default {
  name: 'cartList', 
  data () {
    return {
    };
  },

  props: {
  },

  components: {
    cartListItem
  },

  computed: {
    cartList(){
      return this.$store.state.cartList
    }
  },

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
/* .cartList{ */
  /* width: 100vh; */
/* } */
</style>