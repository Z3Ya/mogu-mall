<!-- 商品列表 -->
<template>
  <div v-if="goods.length >0" class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem='item' class="goodsItem">
    </goods-list-item>
  </div>
</template>

<script>
import goodsListItem from './goodsListItem'
export default {
  data () {
    return {
    };
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },

  components: {
    goodsListItem
  },

  computed: {},

  methods: {},

  //生命周期 - 创建完成（访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // console.log(this.goods)    

  },
}
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
  }
  .goodsItem{
    width:49%;
  }
</style>