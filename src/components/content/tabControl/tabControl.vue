<!-- 分类导航栏 -->
<template>
  <div class="tab-control">
    <div v-for="(title, index) in titles" :key="index" class="tab-control-item" 
    :class="{active: index===activetitle}"
   >
      <span @click="changeTitle(index)">{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activetitle: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {},

  computed: {},

  methods: {
    changeTitle(index){
      this.activetitle = index;
      this.$emit('tabClick',index)
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
.tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 3px solid var(--color-tint);
  }

</style>