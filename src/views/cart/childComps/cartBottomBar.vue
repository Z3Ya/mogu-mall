<!-- 购物车底部工具栏 -->
<template>
  <div class="bottomBar">
    <div class="select" @click="selectAll"  >
      <check-button
        :ischecked='isselectAll'
        class="selectimg"
      ></check-button>
      全选
    </div>
    <div class="total">合计：￥{{parseFloat(checkedPrice).toFixed(2)}}</div>
    <div class="gobuy" @click="gobuy">结算{{checkedCount}}</div>
  </div>
</template>

<script>
import checkButton from "components/content/checkButton/checkButton";

import {checkedPrice,checkedCount, mapGetters} from 'vuex'
export default {
  name: "",
  data() {
    return {
      isselectAll: false,
    };
  },

  props: {
    totalPrice: {
      type: Number,
      default: 0,
    },
  },

  components: {
    checkButton,
  },

  computed: {
    ...mapGetters(['checkedPrice','checkedCount'])
  },

  methods: {
    selectAll() {
      this.isselectAll = !this.isselectAll;
      if (this.isselectAll) {
        for (let good of this.$store.state.cartList) {
          good.ischecked = true;
        }
      } else {
        for (let good of this.$store.state.cartList) {
          good.ischecked = false;
        }
      }
    },
  gobuy(){
    if(this.checkedCount==0){
    this.$toast.isshow('请选择要购买的商品')
    }
  }
    
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
     this.$bus.$on('checkBtnClick',()=>{
      this.isselectAll = true
      for(let good of this.$store.state.cartList){
        if(!good.ischecked){
          this.isselectAll = false;
          break
        }
      }
     })
  },
};
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */
.bottomBar {
  width: 100%;
  height: 44px;
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 44px;
  color: #888;
  background-color: #eee;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  /* padding-left: 25px; */
}
.select {
  width: 20%;
  display: flex; 
  justify-content: center;
  align-items: center;
}
.selectimg {
 margin: 10px;
}
.total {
  flex: 1;
  text-align: right;
  padding: 0 10px;
}
.gobuy {
  width: 30%;
  text-align: center;
  background-color: orangered;
  color: #fff;
}
</style>