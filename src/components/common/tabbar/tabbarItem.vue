<!--  -->
<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isactive">
      <slot name="img"></slot>
    </div>
    <div v-else>
      <slot name='active-img'></slot>
    </div>
    <div :class="{active: isactive}" :style=itemstyle>
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // isactive: false
    };
  },
  props:{
    link: String,
    activecolor: {
      type: String,
      default: "red"
      }
  },

  //生命周期 - 创建完成（访问当前this实例）
  // created() {

  // },
  //生命周期 - 挂载完成（访问DOM元素）
  // mounted() {

  // },
  components: {},

  computed: {
    isactive(){
       return this.$route.path==this.link
    },
    itemstyle(){
      return this.isactive ? {color:this.activecolor} : {}
    }
  },


  methods: {
    itemClick(){
      this.$router.replace({
        path:this.link,
      })
    }
  }
}
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */
   @import url(../../../assets/css/tabbar/tabbarItem.css);
   /* .active{
     color: red;
   } */
  
</style>