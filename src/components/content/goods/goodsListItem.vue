<!-- 具体商品 -->
<template>
  <div class="goods-item" @click="itemClick">
    
    <img v-lazy='showImage' alt="" @load="imgload">
    <div class="goods-info">
      <p >{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
   
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {},

  computed: {
    showImage(){
      return this.goodsItem.image  || this.goodsItem.img || this.goodsItem.show.img
    }
  },

  methods: {
    imgload(){
      // if(this.$route.path.indexOf('/home')){
         this.$bus.$emit('imgload')
      // }else if(this.$route.path.indexOf('/detail')){
       this.$bus.$emit('detailimgload')
       this.$bus.$emit('cateload')
    //  }
      
    },
    itemClick() {
      let iid = this.goodsItem.iid
      this.$router.push({path:'/detail',query:{iid}})
    }
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // console.log(this.goodsItem)
  },
}
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */
  .goods-item {
    padding-bottom: 40px;
    position: relative;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .cfav {
    position: relative;
  }

  .goods-info .cfav::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~img/common/collect.svg") 0 0/14px 14px;
  }
</style>