<!-- 选中框的组件 -->
<template>
    <img src="~img/cart/tick.svg" alt=""  class="checkButton" :class="{ischeckButton: ischecked}"/>
</template>

<script>
export default {
  name: "checkButton",
  data() {
    return {};
  },

  props: {
    ischecked: {
      type: Boolean,
      default: false
    }
  },

  components: {},
  computed: {},
  methods: {},

  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */
.checkButton {
  /* background-color: red; */
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
}
.ischeckButton {
  background-color: #ff8198;
  border-color: #ff8198;
}
</style>