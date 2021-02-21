<!--购物车商品详细数据的展示  -->
<template>
  <div id="cart-list-item">
    <div class="good-selector">
      <check-button @click.native="checkBtnClick" :ischecked = 'good.ischecked' > </check-button>
      <!--   v-model="itemInfo.checked" -->
    </div>
    <div class="good-image">
      <img :src="good.image" alt="商品图片" />
    </div>
    <div class="good-info" @click.self="godetail">
      <div class="good-title">{{ good.title }}</div>
      <div class="good-desc">商品描述：{{ good.desc }}</div>
      <div class="good-num">
        <div class="good-price">￥{{ good.price }}</div>
        <div  class="good-count">
          <button @click.stop="decount">-</button>
            <div class='input-count'>
              <!-- //@blur失去焦点的事件 -->
              <input type="text" v-model="good.count" @blur="checkinput"></div>
              <!-- v-model.number='good.count' -->
          <button @click.stop="incount">+</button>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
import checkButton from "components/content/checkButton/checkButton";

export default {
  name: "cartListItem",
  data(){
    return {
      valuecount: 1
    }
  },
  props: {
    good: Object,
  },
  components: {
    checkButton,
  },
  methods: {
    checkBtnClick(){
      this.good.ischecked = !this.good.ischecked
      this.$bus.$emit('checkBtnClick')
    },
    decount(){
      if(this.good.count>1)
      this.good.count--
    },
    incount(){
      this.good.count++
    },
    godetail(){
      let iid = this.good.iid
      this.$router.push({path:'/detail',query:{iid}})
    },
    checkinput(e){
      // e.target.value.replace(/^0*$/,'')
      // debugger
      let a=e.target.value;
      a = a.replace(/\D/,'');
      a = parseInt(a);
      if(!a){
        a=1
      }
      this.good.count = a
      // console.log(typeof e.target.value )
      // e.target.value.replace(/^0*$/,'')
      // e.target.value.replace(/[^0-9]/gi,'')
      // var rule  = /^[1-9][0-9]*$/g;
      // if(rule.test(e.target.value)){
      //   e.target.value= e.target.value
      // }else{
      //   e.target.value.replace(/^0*$/,'')
      //   e.target.value.replace(/[^0-9]/gi,'')
      //   if(!e.target.value){
      //     e.target.value=1
      //   }
      // }
     
    }

  },
};
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */
#cart-list-item {
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.good-selector {
  display: flex;
  justify-content: center;
  align-items: center;
}

.good-image {
  padding: 5px;
}

.good-image img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.good-info {
  padding: 5px 10px;
  position: relative;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
}

.good-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 17px;
  color: #333;
}
.good-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.good-num {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.good-num .good-price {
  color: orangered;
  float: left;
}
.good-num .good-count {
  float: right;
  display: flex;
}
button{
  width: 20px;
  margin: 0 5px;
}
.input-count input{
  width:40px ;
  text-align: center;
}
</style>