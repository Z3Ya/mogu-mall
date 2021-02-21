<!--  -->
<template>
<scroll class="wrapper" :pullUpLoad="true">

  <div class="tabMenu">
    <div class="menu-list-item"
          :class="{selected:isselect===index}"  
          v-for="(menu,index) in tabMenuList" 
          :key="index"
          @click="menuclick(index,menu.maitKey,menu.miniWallkey)">
      {{menu.title}}
      </div>
  </div>
  
  </scroll>
</template>

<script>
import scroll from 'components/common/scroll/scroll'

export default {
  name: 'tabMenu', 
  data () {
    return {
      isselect:0
    };
  },

  props: {
    tabMenuList: {
      type: Array,
    }
  },

  components: {
    scroll
  },

  computed: {},

  methods: {
    menuclick(index,maitKey,miniWallkey){
      // console.log('---')
      this.isselect = index;
      this.$emit('menuclick',maitKey,miniWallkey)
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
.wrapper{
  height: 100%;
  width: 100px;
  background-color: #f6f6f6;
}

.menu-list-item{
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}
.selected{
  color: var(--color-high-text);
  font-weight: 700;
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>