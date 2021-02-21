<!-- 详情页的导航栏 -->
<template>
  <div>
    <nav-bar class="navbar">
      <div slot="center" class="titles">
        购物车（{{cartCount}}）
      </div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar';
import { mapGetters } from 'vuex';

export default {
 
  components: {
    navBar
  },

  computed: {
    // cartCount(){
      // return this.$store.state.cartList.length
      // return this.$store.getters.cartCount
    // },
    //通过mapGetters直接调用vuex中共的getters
    ...mapGetters(['cartCount'])
  },
}
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */
.navbar{
  background-color: var(--color-tint);
  color: white;
}
</style>