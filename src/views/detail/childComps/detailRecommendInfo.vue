<!-- 详情页推荐更多数据的展示 -->
<template>
  <div>
  <goodsList :goods ='recommend' ></goodsList>
  </div>
</template>

<script>
import goodsList from "components/content/goods/goodsList";

export default {
  name: 'detailRecommendInfo', 
  data () {
    return {
    };
  },

  props: {
    recommend:{
      type: Array,
    }
  },

  components: {
    goodsList
  },

  computed: {},

  methods: {},

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

</style>