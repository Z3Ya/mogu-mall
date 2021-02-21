<!-- 分类的详细分类 -->
<template>
  <div class="contentmenu">
    <div v-for="(menu,index) in contentmenus" :key="index" class="contentmenu-item">
      <a :href="menu.link">
        <img v-lazy="menu.image" alt="小分类图片" @load="cateload">
        <div class="title">{{menu.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabContentMenu', 
  data () {
    return {

    };
  },

  props: {
    contentmenus: Array
  },

  components: {},

  computed: {},

  methods: {
    cateload(){
      this.$bus.$emit('cateload')
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
.contentmenu{
  display: flex;
  flex-wrap:wrap;
  /* justify-content:space-between; */
  padding: 1.6%;
}
.contentmenu-item{
  width: 30%;
  padding: 5px 5px;
  margin-top: 10px;
  margin: 1.6%;
}
.contentmenu-item img{
  width: 100%;
  height: 80%;
}
.title{
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  color: var(--color-text);
}
</style>