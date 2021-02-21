<!-- 自动消失的弹窗提醒 -->
<template>
  <div class="toast" v-show="show">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'toast', 
  data () {
    return {
      message: '',
      show: false
    }
  },

  // props: {
  //   message:{
  //     type: String,
  //     default: ''
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // },

  components: {},
  computed: {},
  methods: {
    isshow(data='默认文字',duration=2000){
      // console.log(this)
      this.show = true;
      this.message = data;
      // console.log(this.message,this.show)
      setTimeout(() => {
         this.show = false;
         this.message = '';
         console.log(this.message,this.show)
      }, duration);
    }
  },

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
.toast{
  position: fixed;
  z-index: 999;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  padding: 8px 10px;
  color: #fff;
  background-color:rgba(0, 0, 0, .6);
}
</style>