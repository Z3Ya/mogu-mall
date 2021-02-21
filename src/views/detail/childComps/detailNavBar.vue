<!-- 详情页的导航栏 -->
<template>
  <div>
    <navBar>
      <div slot="left" @click="goback">
        <img src="~img/common/back.svg" alt="" class="back">
      </div>
      <div slot="center" class="titles">
        <span v-for="(title,index) in titles" 
              :key="index" 
              class="title"
              @click="titleclick(index)"
              :class="{'activetitle':currentIndex===index}">{{title}}</span>
      </div>
    </navBar>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar';
export default {
  data () {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0,
    };
  },

  components: {
    navBar
  },

  computed: {},

  methods: {
    titleclick(index) {
      
      this.currentIndex = index;
      this.$emit('titleclick',index)
    },
    goback() {
      this.$router.back();
      // this.router.go(-1)
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
  .titles {
    display: flex;
  }
  .title {
    flex: 1;
  }
  .activetitle {
    color: var(--color-high-text);
  }
  .back {
    margin-top: 12px;
  }
</style>