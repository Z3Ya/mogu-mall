<!-- 详情页底部工具栏 -->
<template>
  <div class="bottomBar">
    <div class="bar-item bar-left">
      <div>
       <i class="icon service"></i>
        <div>客服</div>
      </div>
      <div>
          <i class="icon shop"></i>
        <div>店铺</div>
      </div>
      <div @click="toselect">
        <i class="icon select" v-if="!isselect"></i>
        <i class="icon selected" v-else></i>
        <div>收藏</div>
      </div>
    </div>

    <div class="bar-item bar-right">
      <div class="cart" @click="tocart">
        <div>加入购物车</div>
      </div>
      <div class="buy" @click="tobuy">
        <div>购买</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBottomBar",
  data() {
    return {
      isselect: false
    };
  },

  props: {},

  components: {},

  computed: {},

  methods: {
    toselect(){
      this.isselect=!this.isselect
    },
    tocart(){
      this.$emit('tocart',)
      //弹窗提示
    },
    tobuy(){

    },
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */
.bottomBar {
  background-color: #f6f6f6;
  height: 58px;
  border-top: 1px solid #eee;
  box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.2);

  /* 定位相关 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /* 布局相关 */
  display: flex;
  text-align: center;
}
.bar-item {
  flex: 1;
  display: flex;
}
.bar-item > div {
  flex: 1;
}
.bar-left {
  font-size: 13px;
}

.icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 7px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.select{
   background-position: 0 0
}
.selected{
background-position: 0 -26px
}

.service{
 background-position: 0 -52px
}

.shop{
  background-position: 0 -98px
}
/* 右边的样式 */
.bar-right {
  font-size: 15px;
  line-height: 58px;
  /* text-align: center; */
}

.bar-right .cart {
  background-color: #ffe817;
  color: #333;
}

.bar-right .buy {
  background-color: #f69;
  color: #fff;
}
</style>