<!--推荐信息的展示 -->
<template>
  <div class="recommend">
    <span
      v-for="(item, index) in recommends"
      :key="index"
      class="recommendItem"
    >
      <a :href="item.link">
        <img :src="item.image" alt=""  @load="imgload"/>
        <p>{{ item.title }}</p>
      </a>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return;
      },
    },
  },

  components: {},

  computed: {},

  methods: {
    imgload(){
      this.$bus.$emit('imgload')
    }
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}

.recommendItem {
  flex: 1;
}

.recommendItem img {
  width: 70px;
  height: 70px;
  margin: 10px;
}
</style>